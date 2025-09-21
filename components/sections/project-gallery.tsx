'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { PROJECT_CATEGORIES, type Project } from '@/types/projects'
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Share2, 
  ZoomIn,
  X,
  Star
} from 'lucide-react'

interface ProjectGalleryProps {
  project: Project
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  const images = [project.image, ...project.gallery]
  const categoryInfo = PROJECT_CATEGORIES[project.category]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
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
    <>
      <section className="relative bg-slate-900">
        <Container className="py-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Галерея изображений */}
            <div className="relative">
              {/* Основное изображение */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800">
                <Image
                  src={images[currentImage]}
                  alt={project.title}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                
                {/* Навигация */}
                {images.length > 1 && (
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

                {/* Кнопка полноэкранного просмотра */}
                <button
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <ZoomIn className="w-5 h-5" />
                </button>

                {/* Счетчик изображений */}
                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                  {currentImage + 1} / {images.length}
                </div>
              </div>

              {/* Миниатюры */}
              {images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`relative flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        currentImage === index 
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
            </div>

            {/* Информация о проекте */}
            <div className="text-white">
              {/* Бейджи */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-3 py-1 text-sm font-medium rounded-full bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700`}>
                  {categoryInfo.label}
                </span>
                {project.isPopular && (
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-orange-100 text-orange-700 flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Популярный
                  </span>
                )}
                {project.isNew && (
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-700">
                    Новинка
                  </span>
                )}
              </div>

              {/* Заголовок */}
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {project.title}
              </h1>

              {/* Описание */}
              <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Цена */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-blue-400">
                  {formatPrice(project.price)}
                </span>
                <span className="text-lg text-slate-400">
                  {formatPrice(project.pricePerSqm)}/м²
                </span>
              </div>

              {/* Основные характеристики */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{project.area}</div>
                  <div className="text-sm text-slate-400">м² площадь</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{project.floors}</div>
                  <div className="text-sm text-slate-400">этаж{project.floors > 1 ? 'а' : ''}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{project.bedrooms}</div>
                  <div className="text-sm text-slate-400">спальни</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{project.bathrooms}</div>
                  <div className="text-sm text-slate-400">санузла</div>
                </div>
              </div>

              {/* Кнопки действий */}
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Рассчитать стоимость
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  Заказать проект
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`border-white hover:bg-white hover:text-slate-900 ${
                    isFavorite ? 'bg-red-500 border-red-500 text-white' : 'text-white'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-slate-900"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[currentImage]}
                alt={project.title}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Закрыть */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Навигация в lightbox */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 text-white rounded-full hover:bg-black/70"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

