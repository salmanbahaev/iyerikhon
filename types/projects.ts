export interface Project {
  id: string
  slug: string
  title: string
  category: 'typical' | 'comfort' | 'premium' | 'luxury'
  categoryLabel: string
  area: number // Площадь в м²
  floors: number
  bedrooms: number
  bathrooms: number
  price: number // Базовая стоимость в рублях
  pricePerSqm: number // Цена за м²
  image: string
  gallery: string[]
  description: string
  features: string[]
  specifications: {
    foundation: string
    walls: string
    roof: string
    insulation: string
    finishing: string
    heating: string
    electrical: string
    plumbing: string
  }
  layout: {
    floor: number
    image: string
    rooms: Array<{
      name: string
      area: number
    }>
  }[]
  constructionTime: string // Срок строительства
  popularity: number // Для сортировки по популярности
  isPopular: boolean
  isNew: boolean
  tags: string[]
}

export interface ProjectsFilters {
  category: string[]
  areaRange: [number, number]
  priceRange: [number, number]
  floors: number[]
  bedrooms: number[]
  sortBy: 'popularity' | 'price-asc' | 'price-desc' | 'area-asc' | 'area-desc' | 'newest'
}

export interface ProjectsFilterOptions {
  categories: Array<{
    value: string
    label: string
    count: number
  }>
  areaRange: [number, number]
  priceRange: [number, number]
  floors: number[]
  bedrooms: number[]
}

// Константы для фильтров
export const PROJECT_CATEGORIES = {
  typical: {
    label: 'Типовой',
    description: '80-120 м²',
    color: 'emerald'
  },
  comfort: {
    label: 'Комфорт', 
    description: '120-180 м²',
    color: 'blue'
  },
  premium: {
    label: 'Премиум',
    description: '180-250 м²',
    color: 'purple'
  },
  luxury: {
    label: 'Люкс',
    description: '250+ м²',
    color: 'amber'
  }
} as const

export const SORT_OPTIONS = [
  { value: 'popularity', label: 'По популярности' },
  { value: 'price-asc', label: 'Сначала дешевые' },
  { value: 'price-desc', label: 'Сначала дорогие' },
  { value: 'area-asc', label: 'По площади ↑' },
  { value: 'area-desc', label: 'По площади ↓' },
  { value: 'newest', label: 'Новые проекты' },
] as const

