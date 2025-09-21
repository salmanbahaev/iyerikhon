'use client'

import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { PortfolioProject, PortfolioFilters } from '@/types/portfolio'
import { mockPortfolio } from '@/lib/mock-portfolio'

interface PortfolioContextType {
  allProjects: PortfolioProject[]
  filteredProjects: PortfolioProject[]
  filters: PortfolioFilters
  updateFilters: (newFilters: Partial<PortfolioFilters>) => void
  clearFilters: () => void
  totalCount: number
}

const defaultFilters: PortfolioFilters = {
  categories: [],
  years: [],
  status: [],
  sortBy: 'year-desc'
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined)

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<PortfolioFilters>(defaultFilters)

  const filteredProjects = useCallback(() => {
    let filtered = [...mockPortfolio]

    // Фильтр по категориям
    if (filters.categories.length > 0) {
      filtered = filtered.filter(project => 
        filters.categories.includes(project.category)
      )
    }

    // Фильтр по годам
    if (filters.years.length > 0) {
      filtered = filtered.filter(project => 
        filters.years.includes(project.year)
      )
    }

    // Фильтр по статусу
    if (filters.status.length > 0) {
      filtered = filtered.filter(project => 
        filters.status.includes(project.status)
      )
    }

    // Сортировка
    switch (filters.sortBy) {
      case 'year-desc':
        filtered.sort((a, b) => b.year - a.year)
        break
      case 'year-asc':
        filtered.sort((a, b) => a.year - b.year)
        break
      case 'area-desc':
        filtered.sort((a, b) => (b.area || 0) - (a.area || 0))
        break
      case 'area-asc':
        filtered.sort((a, b) => (a.area || 0) - (b.area || 0))
        break
      case 'alphabet':
        filtered.sort((a, b) => a.title.localeCompare(b.title, 'ru'))
        break
      default:
        break
    }

    return filtered
  }, [filters])

  const updateFilters = useCallback((newFilters: Partial<PortfolioFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
  }, [])

  const clearFilters = useCallback(() => {
    setFilters(defaultFilters)
  }, [])

  const value: PortfolioContextType = {
    allProjects: mockPortfolio,
    filteredProjects: filteredProjects(),
    filters,
    updateFilters,
    clearFilters,
    totalCount: mockPortfolio.length
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}
