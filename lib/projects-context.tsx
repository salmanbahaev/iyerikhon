'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { Project, ProjectsFilters } from '@/types/projects'
import { mockProjects } from '@/lib/mock-projects'

interface ProjectsContextType {
  allProjects: Project[]
  filteredProjects: Project[]
  filters: ProjectsFilters
  updateFilters: (newFilters: Partial<ProjectsFilters>) => void
  clearFilters: () => void
  totalCount: number
}

const defaultFilters: ProjectsFilters = {
  category: [],
  areaRange: [50, 400],
  priceRange: [1000000, 15000000], 
  floors: [],
  bedrooms: [],
  sortBy: 'popularity'
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined)

export function ProjectsProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<ProjectsFilters>(defaultFilters)

  const filteredProjects = useCallback(() => {
    let filtered = [...mockProjects]

    // Фильтр по категориям
    if (filters.category.length > 0) {
      filtered = filtered.filter(project => 
        filters.category.includes(project.category)
      )
    }

    // Фильтр по этажности
    if (filters.floors.length > 0) {
      filtered = filtered.filter(project => 
        filters.floors.includes(project.floors)
      )
    }

    // Фильтр по количеству спален
    if (filters.bedrooms.length > 0) {
      filtered = filtered.filter(project => 
        filters.bedrooms.includes(project.bedrooms)
      )
    }

    // Фильтр по площади
    const [minArea, maxArea] = filters.areaRange
    filtered = filtered.filter(project => 
      project.area >= minArea && project.area <= maxArea
    )

    // Фильтр по цене
    const [minPrice, maxPrice] = filters.priceRange
    filtered = filtered.filter(project => 
      project.price >= minPrice && project.price <= maxPrice
    )

    // Сортировка
    switch (filters.sortBy) {
      case 'popularity':
        filtered.sort((a, b) => b.popularity - a.popularity)
        break
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price)
        break
      case 'area-asc':
        filtered.sort((a, b) => a.area - b.area)
        break
      case 'area-desc':
        filtered.sort((a, b) => b.area - a.area)
        break
      case 'newest':
        filtered.sort((a, b) => {
          if (a.isNew && !b.isNew) return -1
          if (!a.isNew && b.isNew) return 1
          return b.popularity - a.popularity
        })
        break
      default:
        break
    }

    return filtered
  }, [filters])

  const updateFilters = useCallback((newFilters: Partial<ProjectsFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters)
  }, [])

  const value: ProjectsContextType = {
    allProjects: mockProjects,
    filteredProjects: filteredProjects(),
    filters,
    updateFilters,
    clearFilters,
    totalCount: mockProjects.length
  }

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  )
}

export function useProjects() {
  const context = useContext(ProjectsContext)
  if (context === undefined) {
    throw new Error('useProjects must be used within a ProjectsProvider')
  }
  return context
}
