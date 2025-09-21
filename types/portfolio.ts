export interface PortfolioProject {
  id: string
  slug: string
  title: string
  category: 'houses' | 'schools' | 'landscaping' | 'sberbank'
  categoryLabel: string
  description: string
  year: number
  area?: number
  length?: number
  capacity?: number
  location: string
  duration: string
  client: string
  status: 'completed' | 'in-progress' | 'planned'
  mainImage: string
  images: string[]
  features: string[]
  specifications: Record<string, string>
  achievements?: string[]
  tags: string[]
}

export interface PortfolioStats {
  total: number
  categories: {
    houses: number
    schools: number
    landscaping: number
    sberbank: number
  }
  totalArea: number
  totalLength: number
  years: number[]
}

export interface PortfolioFilters {
  categories: string[]
  years: number[]
  status: string[]
  sortBy: 'year-desc' | 'year-asc' | 'area-desc' | 'area-asc' | 'alphabet'
}

export type PortfolioCategory = 'houses' | 'schools' | 'landscaping' | 'sberbank'

export const PORTFOLIO_CATEGORIES = {
  houses: { label: 'Частные дома', icon: '🏠' },
  schools: { label: 'Школы', icon: '🏫' },
  landscaping: { label: 'Благоустройство', icon: '🌳' },
  sberbank: { label: 'Сбербанк', icon: '🏢' }
}

export const PORTFOLIO_STATUS = {
  completed: { label: 'Завершен', color: 'green' },
  'in-progress': { label: 'В работе', color: 'yellow' },
  planned: { label: 'Запланирован', color: 'blue' }
}