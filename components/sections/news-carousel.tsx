'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Calendar, ArrowRight, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface NewsItem {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}

// Заглушки для новостей
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: 'Завершен капитальный ремонт МБОУ СОШ №37 г. Грозного',
    excerpt: 'Современное образовательное пространство на 680 учеников готово к новому учебному году. Полностью обновлены классы, спортзал и столовая.',
    date: '15 сентября 2025',
    readTime: '3 мин',
    category: 'Образование',
    image: 'bg-gradient-to-br from-emerald-500 to-green-600',
    slug: 'school-37-renovation-complete'
  },
  {
    id: 2,
    title: 'Новый жилой дом по программе ипотеки ВТБ',
    excerpt: 'Семья из Грозного получила ключи от нового дома площадью 120 м². Строительство велось по индивидуальному проекту с использованием современных материалов.',
    date: '12 сентября 2025',
    readTime: '2 мин',
    category: 'ИЖС',
    image: 'bg-gradient-to-br from-blue-500 to-primary-600',
    slug: 'new-house-vtb-mortgage'
  },
  {
    id: 3,
    title: 'Благоустройство территории в Курчалое',
    excerpt: 'Завершены работы по благоустройству дворовой территории по пер. А-Х. Кадырова. Установлены детские площадки и современное освещение.',
    date: '8 сентября 2025',
    readTime: '4 мин',
    category: 'Благоустройство',
    image: 'bg-gradient-to-br from-green-500 to-emerald-600',
    slug: 'kurchaloy-improvement-complete'
  },
  {
    id: 4,
    title: 'Реконструкция офиса Сбербанка в Ингушетии',
    excerpt: 'Успешно завершена реконструкция административного здания площадью 1120 м². Современный дизайн и энергоэффективные решения.',
    date: '5 сентября 2025',
    readTime: '3 мин',
    category: 'Корпоративные проекты',
    image: 'bg-gradient-to-br from-slate-600 to-secondary-700',
    slug: 'sberbank-office-reconstruction'
  }
]

export function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [direction, setDirection] = useState(0)

  // Автопрокрутка (увеличен интервал до 7 секунд)
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % newsItems.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev + 1) % newsItems.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev - 1 + newsItems.length) % newsItems.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1)
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <Container>
        <FadeIn>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-4">
                Последние новости
              </h2>
              <p className="text-xl text-secondary-600 max-w-2xl leading-relaxed">
                Следите за нашими проектами и достижениями в строительстве и благоустройстве
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="px-6"
              >
                Все новости
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Улучшенная сетка с лучшими пропорциями */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Главная новость - занимает 3 колонки */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="group relative h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      {/* Фон */}
                      <div className={`absolute inset-0 ${newsItems[currentSlide].image}`}></div>
                      
                      {/* Оверлей */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Контент */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="space-y-4"
                      >
                        <div className="flex flex-wrap items-center gap-3 text-sm">
                          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full font-medium">
                            {newsItems[currentSlide].category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{newsItems[currentSlide].date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span>{newsItems[currentSlide].readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight">
                          {newsItems[currentSlide].title}
                        </h3>
                        
                        <p className="text-white/90 leading-relaxed text-base line-clamp-3">
                          {newsItems[currentSlide].excerpt}
                        </p>
                        
                        <Button 
                          className="mt-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                          size="sm"
                        >
                          Читать далее
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Упрощенная навигация */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Статичные боковые новости - занимают 2 колонки */}
            <div className="lg:col-span-2">
              <div className="space-y-4 h-full">
                {/* Показываем статично первые 3 новости, исключая текущую главную */}
                {newsItems.slice(1, 4).map((item, index) => (
                  <FadeIn key={item.id} delay={0.3 + (index * 0.1)}>
                    <button
                      onClick={() => goToSlide(newsItems.findIndex(news => news.id === item.id))}
                      className="group w-full text-left bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-secondary-100 hover:border-primary-200"
                    >
                      <div className="flex space-x-4">
                        {/* Увеличенная картинка в пропорциях 16:9 */}
                        <div className={`w-36 ${item.image} rounded-lg flex-shrink-0`}></div>
                        
                        {/* Уменьшенная область для текста */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="inline-block px-2 py-1 bg-secondary-100 text-secondary-600 rounded text-xs font-medium">
                              {item.category}
                            </span>
                          </div>
                          
                          <h4 className="font-semibold text-secondary-900 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200 mb-1 text-sm leading-tight">
                            {item.title}
                          </h4>
                          
                          <p className="text-xs text-secondary-500">{item.date}</p>
                        </div>
                      </div>
                    </button>
                  </FadeIn>
                ))}
                
                {/* Показать все новости */}
                <FadeIn delay={0.6}>
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full border-secondary-200 text-secondary-600 hover:border-primary-300 hover:text-primary-600 transition-all duration-200"
                    >
                      Все новости
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* Упрощенные индикаторы слайдов */}
          <FadeIn delay={0.7}>
            <div className="flex justify-center space-x-2 mt-8">
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide 
                      ? 'bg-primary-600 w-6' 
                      : 'bg-secondary-300 hover:bg-secondary-400'
                  }`}
                />
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
