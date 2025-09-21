'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { usePortfolio } from '@/lib/portfolio-context'
import { PORTFOLIO_CATEGORIES, PORTFOLIO_STATUS } from '@/types/portfolio'
import { 
  Calendar, 
  MapPin, 
  Square, 
  Users,
  ArrowRight,
  Eye,
  Ruler,
  Clock,
  CheckCircle
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

export function PortfolioGrid() {
  const { filteredProjects } = usePortfolio()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const formatArea = (area?: number) => {
    if (!area) return null
    return `${area.toLocaleString('ru-RU')} м²`
  }

  const formatCapacity = (capacity?: number) => {
    if (!capacity) return null
    return `${capacity} мест`
  }

  const formatLength = (length?: number) => {
    if (!length) return null
    return length >= 1000 ? `${(length / 1000).toFixed(1)} км` : `${length} м`
  }

  return (
    <div className="space-y-6">
      {/* Счетчик результатов */}
      <div className="flex items-center justify-between">
        <p className="text-slate-600">
          Найдено <span className="font-semibold text-slate-900">{filteredProjects.length}</span> проектов
        </p>
      </div>

      {/* Сетка проектов */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => {
          const categoryInfo = PORTFOLIO_CATEGORIES[project.category]
          const statusInfo = PORTFOLIO_STATUS[project.status]
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
                    src={project.mainImage}
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
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${statusInfo.color}-100 text-${statusInfo.color}-700 flex items-center gap-1`}>
                      {project.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                      {statusInfo.label}
                    </span>
                  </div>

                  {/* Год */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-black/70 text-white flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>

                  {/* Overlay с кнопкой при ховере */}
                  <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button size="sm" variant="outline" className="bg-white/90 text-slate-800">
                      <Eye className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </div>

                {/* Контент */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Верхний блок с основной информацией */}
                  <div className="flex-1">
                    {/* Заголовок */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-slate-500 text-sm">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{project.location}</span>
                      </div>
                    </div>

                    {/* Описание */}
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Характеристики */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {formatArea(project.area) && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <Square className="w-4 h-4" />
                          <span className="text-sm">{formatArea(project.area)}</span>
                        </div>
                      )}
                      
                      {formatCapacity(project.capacity) && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <Users className="w-4 h-4" />
                          <span className="text-sm">{formatCapacity(project.capacity)}</span>
                        </div>
                      )}
                      
                      {formatLength(project.length) && (
                        <div className="flex items-center gap-2 text-slate-600">
                          <Ruler className="w-4 h-4" />
                          <span className="text-sm">{formatLength(project.length)}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{project.duration}</span>
                      </div>
                    </div>

                    {/* Теги */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-md">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Нижний блок с кнопкой и заказчиком */}
                  <div className="mt-6 space-y-3">
                    {/* Кнопка действия */}
                    <Link 
                      href={`/portfolio/${project.slug}`}
                      className="block"
                    >
                      <Button variant="outline" className="w-full group">
                        Подробнее о проекте
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>

                    {/* Клиент */}
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-xs text-slate-500">
                        Заказчик: <span className="font-medium text-slate-700">{project.client}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>

      {/* Пустое состояние */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Square className="w-12 h-12 text-slate-400" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            Проекты не найдены
          </h3>
          <p className="text-slate-600 mb-6">
            Попробуйте изменить критерии поиска или сбросить фильтры
          </p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Сбросить все фильтры
          </Button>
        </div>
      )}
    </div>
  )
}
