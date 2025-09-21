'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { useProjects } from '@/lib/projects-context'
import { PROJECT_CATEGORIES } from '@/types/projects'
import { 
  Bed, 
  Bath, 
  Square, 
  Layers, 
  Heart, 
  Star,
  Calculator,
  Eye,
  ArrowRight
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.3 }
  }
}

export function ProjectsGrid() {
  const { filteredProjects } = useProjects()
  const [favorites, setFavorites] = useState<string[]>([])
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const projects = filteredProjects

  const toggleFavorite = (projectId: string) => {
    setFavorites(prev => 
      prev.includes(projectId)
        ? prev.filter(id => id !== projectId)
        : [...prev, projectId]
    )
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="space-y-6">
      {/* Счетчик результатов */}
      <div className="flex items-center justify-between">
        <p className="text-slate-600">
          Найдено <span className="font-semibold text-slate-900">{projects.length}</span> проектов
        </p>
        <div className="hidden lg:flex items-center gap-2 text-sm text-slate-500">
          <Heart className="w-4 h-4" />
          Избранное: {favorites.length}
        </div>
      </div>

      {/* Сетка проектов */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {projects.map((project) => {
          const categoryInfo = PROJECT_CATEGORIES[project.category]
          const isFavorite = favorites.includes(project.id)
          const isHovered = hoveredCard === project.id

          return (
            <motion.div key={project.id} variants={cardVariants}>
              <Card 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col"
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Изображение */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  />
                  
                  {/* Бейджи */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700`}>
                      {categoryInfo.label}
                    </span>
                    {project.isPopular && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-700 flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Популярный
                      </span>
                    )}
                    {project.isNew && (
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                        Новинка
                      </span>
                    )}
                  </div>

                  {/* Кнопка избранного */}
                  <button
                    onClick={() => toggleFavorite(project.id)}
                    className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all duration-300 ${
                      isFavorite 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/80 text-slate-600 hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
                  </button>

                  {/* Overlay с кнопками при ховере */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-3 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button size="sm" variant="outline" className="bg-white/90 text-slate-800">
                      <Eye className="w-4 h-4 mr-2" />
                      Смотреть
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Рассчитать
                    </Button>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Заголовок и цена */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-blue-600">
                        {formatPrice(project.price)}
                      </span>
                      <span className="text-sm text-slate-500">
                        {formatPrice(project.pricePerSqm)}/м²
                      </span>
                    </div>
                  </div>

                  {/* Характеристики */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Square className="w-4 h-4" />
                      <span className="text-sm">{project.area} м²</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Layers className="w-4 h-4" />
                      <span className="text-sm">{project.floors} этаж</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{project.bedrooms} спальни</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{project.bathrooms} санузла</span>
                    </div>
                  </div>

                  {/* Верхний блок с основной информацией */}
                  <div className="flex-1">
                    {/* Описание */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Нижний блок с кнопками и информацией */}
                  <div className="mt-6 space-y-3">
                    {/* Кнопки действий */}
                    <div className="flex gap-2">
                      <Link 
                        href={`/projects/${project.slug}`}
                        className="flex-1"
                      >
                        <Button variant="outline" className="w-full group">
                          Подробнее
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                      <Button 
                        className="px-4"
                      >
                        <Calculator className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Срок строительства */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500">
                        Срок строительства: <span className="font-medium">{project.constructionTime}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Кнопка загрузить еще */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg" className="px-8">
          Загрузить еще проекты
        </Button>
      </div>

    </div>
  )
}
