'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
// import { Select } from '@/components/ui/select'
import { PROJECT_CATEGORIES, SORT_OPTIONS } from '@/types/projects'
import { useProjects } from '@/lib/projects-context'
import { Filter, X, ArrowUpDown } from 'lucide-react'

export function ProjectsFilters() {
  const { filters, updateFilters, clearFilters, filteredProjects } = useProjects()
  const [isExpanded, setIsExpanded] = useState(false)

  const handleCategoryToggle = (category: string) => {
    const newCategories = filters.category.includes(category)
      ? filters.category.filter(c => c !== category)
      : [...filters.category, category]
    
    updateFilters({ category: newCategories })
  }

  const handleFloorToggle = (floor: number) => {
    const newFloors = filters.floors.includes(floor)
      ? filters.floors.filter(f => f !== floor)
      : [...filters.floors, floor]
    
    updateFilters({ floors: newFloors })
  }

  const handleSortChange = (sortBy: string) => {
    updateFilters({ sortBy: sortBy as any })
  }

  const hasActiveFilters = 
    filters.category.length > 0 ||
    filters.floors.length > 0

  return (
    <div className="mb-8 space-y-6">
      {/* Заголовок с кнопкой мобильных фильтров */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Найти идеальный дом</h2>
          <span className="text-slate-500">
            ({filteredProjects.length} проектов)
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Сортировка */}
          <div className="hidden lg:flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-slate-500" />
            <select 
              value={filters.sortBy} 
              onChange={(e) => handleSortChange(e.target.value)}
              className="px-3 py-2 text-sm border border-slate-300 rounded-lg bg-white text-slate-700 hover:border-blue-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              {SORT_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          
          {/* Мобильные фильтры */}
          <div className="lg:hidden">
            <Button
              variant="outline"
              onClick={() => setIsExpanded(!isExpanded)}
              className="gap-2"
            >
              <Filter className="w-4 h-4" />
              Фильтры
              {hasActiveFilters && (
                <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {filters.category.length + filters.floors.length}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Главная карточка фильтров */}
      <Card className={`border-0 shadow-lg bg-white transition-all duration-300 ${isExpanded ? 'block' : 'hidden lg:block'}`}>
        <div className="p-6">
          
          {/* Все фильтры с заголовками */}
          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-8">
            
            {/* Категории домов */}
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-slate-800 mb-4">Категория</h3>
              <div className="flex flex-wrap gap-2">
                {Object.entries(PROJECT_CATEGORIES).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => handleCategoryToggle(key)}
                    className={`px-4 py-3 text-center border rounded-lg transition-all duration-200 h-[44px] flex items-center justify-center ${
                      filters.category.includes(key)
                        ? 'bg-blue-50 border-blue-500 text-blue-700 shadow-md'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm'
                    }`}
                  >
                    <span className="font-semibold text-sm leading-tight">
                      {category.label} ({category.description})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Этажность */}
            <div className="flex-shrink-0">
              <h3 className="text-sm font-semibold text-slate-800 mb-4">Этажи</h3>
              <div className="flex gap-2">
                {[1, 2, 3].map(floor => (
                  <button
                    key={floor}
                    onClick={() => handleFloorToggle(floor)}
                    className={`px-4 py-3 text-sm rounded-lg border transition-all duration-200 font-semibold whitespace-nowrap min-w-[65px] h-[44px] ${
                      filters.floors.includes(floor)
                        ? 'bg-blue-500 text-white border-blue-500 shadow-md'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm'
                    }`}
                  >
                    {floor} эт.
                  </button>
                ))}
              </div>
            </div>

            {/* Кнопка сброса - всегда видна */}
            <div className="flex-shrink-0">
              <div className="h-6 mb-4"></div>
              <div className="flex justify-end">
                <button
                  onClick={hasActiveFilters ? clearFilters : undefined}
                  disabled={!hasActiveFilters}
                  className={`flex items-center gap-2 px-4 py-3 text-sm border rounded-lg transition-all duration-200 font-medium h-[44px] w-[110px] ${
                    hasActiveFilters
                      ? 'text-red-600 border-red-300 hover:bg-red-50 hover:border-red-400 hover:shadow-sm cursor-pointer'
                      : 'text-slate-400 border-slate-200 cursor-not-allowed bg-slate-50'
                  }`}
                >
                  <X className="w-4 h-4" />
                  Сбросить
                </button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

