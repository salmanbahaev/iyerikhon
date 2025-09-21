'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { PortfolioProject, PORTFOLIO_CATEGORIES, PORTFOLIO_STATUS } from '@/types/portfolio'
import { 
  ArrowLeft,
  Calendar, 
  MapPin, 
  Square, 
  Users,
  Ruler,
  Clock,
  CheckCircle,
  Building,
  ChevronLeft,
  ChevronRight,
  Star
} from 'lucide-react'

interface PortfolioProjectDetailsProps {
  project: PortfolioProject
}

export function PortfolioProjectDetails({ project }: PortfolioProjectDetailsProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const categoryInfo = PORTFOLIO_CATEGORIES[project.category]
  const statusInfo = PORTFOLIO_STATUS[project.status]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

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
    <div className="space-y-8">
      {/* Навигация назад */}
      <FadeIn>
        <Link 
          href="/portfolio"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Вернуться к портфолио
        </Link>
      </FadeIn>

      {/* Заголовок и основная информация */}
      <FadeIn delay={0.1}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Галерея изображений */}
          <div className="lg:col-span-2">
            <Card className="p-6 border-0 shadow-xl">
              {/* Основное изображение */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-4">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                
                {/* Навигация по изображениям */}
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                {/* Счетчик изображений */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </div>

              {/* Миниатюры */}
              {project.images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImageIndex === index 
                          ? 'border-blue-500 ring-2 ring-blue-500/20' 
                          : 'border-slate-300 hover:border-slate-400'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - изображение ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </Card>
          </div>

          {/* Информация о проекте */}
          <div className="lg:col-span-1">
            <Card className="p-6 border-0 shadow-xl">
              {/* Бейджи */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700`}>
                  {categoryInfo.label}
                </span>
                <span className={`px-3 py-1 text-sm font-medium rounded-full bg-${statusInfo.color}-100 text-${statusInfo.color}-700 flex items-center gap-1`}>
                  {project.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                  {statusInfo.label}
                </span>
              </div>

              {/* Заголовок */}
              <h1 className="text-2xl font-bold text-slate-900 mb-3">
                {project.title}
              </h1>

              {/* Основные характеристики */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Год: {project.year}</span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{project.location}</span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-600">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">Срок: {project.duration}</span>
                </div>

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
                  <Building className="w-4 h-4" />
                  <span className="text-sm">Заказчик: {project.client}</span>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Заказать похожий проект
                </Button>
                <Button variant="outline" className="w-full">
                  Получить консультацию
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </FadeIn>

      {/* Описание проекта */}
      <FadeIn delay={0.2}>
        <Card className="p-8 border-0 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Описание проекта</h2>
          <p className="text-slate-600 leading-relaxed text-lg mb-6">
            {project.description}
          </p>

          {/* Особенности проекта */}
          {project.features.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Особенности проекта</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </Card>
      </FadeIn>

      {/* Технические характеристики */}
      {project.specifications && (
        <FadeIn delay={0.3}>
          <Card className="p-8 border-0 shadow-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Технические характеристики</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(project.specifications).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100">
                  <span className="font-medium text-slate-700">{key}:</span>
                  <span className="text-slate-600">{value}</span>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>
      )}

      {/* Достижения */}
      {project.achievements && project.achievements.length > 0 && (
        <FadeIn delay={0.4}>
          <Card className="p-8 border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Достижения и результаты</h2>
            <div className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{achievement}</span>
                </div>
              ))}
            </div>
          </Card>
        </FadeIn>
      )}

      {/* Теги */}
      <FadeIn delay={0.5}>
        <Card className="p-8 border-0 shadow-xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Теги проекта</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </FadeIn>
    </div>
  )
}
