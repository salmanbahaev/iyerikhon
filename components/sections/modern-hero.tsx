'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { InteractiveStars } from '@/components/ui/interactive-stars'
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react'

interface Slide {
  id: number
  title: string
  description: string
  image: string
  category: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Частные дома под ключ",
    description: "Современные дома с полной отделкой по специальным ипотечным программам ВТБ",
    image: "bg-gradient-to-br from-blue-600 to-emerald-600",
    category: "ИЖС"
  },
  {
    id: 2,
    title: "Капремонт школ",
    description: "18 000+ м² отремонтированных образовательных учреждений с современным оснащением",
    image: "bg-gradient-to-br from-emerald-600 to-teal-600",
    category: "Образование"
  },
  {
    id: 3,
    title: "Благоустройство",
    description: "5 754 м² благоустроенных территорий для комфортной городской среды",
    image: "bg-gradient-to-br from-slate-700 to-emerald-700",
    category: "Инфраструктура"
  },
  {
    id: 4,
    title: "Корпоративные проекты",
    description: "2 021 м² реконструированных офисных помещений для крупных корпораций",
    image: "bg-gradient-to-br from-blue-700 to-slate-700",
    category: "Бизнес"
  }
]

export function ModernHero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Автопрокрутка
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000)
  }

  const current = slides[currentSlide]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Интерактивный звездный фон */}
      <InteractiveStars 
        starCount={250}
        maxDistance={150}
        pullStrength={0.2}
      />
      
      {/* Дополнительные фоновые эффекты */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Тонкая сетка */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Левая часть - Контент */}
          <div className="space-y-8">
            {/* Логотип и бейдж */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-2xl shadow-emerald-500/25">
                  <span className="text-2xl font-bold text-white">И</span>
                </div>
                <div className="space-y-1">
                  <h1 className="text-2xl font-bold text-white">ООО «Иерихон»</h1>
                  <p className="text-emerald-400 text-sm font-medium">Строительная компания</p>
                </div>
              </div>
              
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-emerald-400/30 rounded-full text-sm text-white font-medium">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
                Аккредитованный застройщик ВТБ
              </div>
            </div>

            {/* Основной заголовок */}
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-emerald-300 via-blue-300 to-emerald-300 bg-clip-text text-transparent">
                  Строим
                </span>
                <br />
                <span className="text-white">
                  ваши дома
                </span>
                <br />
                <span className="text-2xl lg:text-3xl font-light text-white/80">
                  по выгодной ипотеке
                </span>
              </h2>
              
              <p className="text-xl text-white/70 leading-relaxed max-w-lg">
                От проекта до новоселья. Работаем с крупнейшими банками России и создаем современные пространства для жизни и работы.
              </p>
            </div>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-emerald-600/25 hover:shadow-emerald-600/40 transition-all duration-300 group"
              >
                Смотреть проекты домов
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                Ипотека ВТБ
              </Button>
            </div>

            {/* Ключевые цифры */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-white/60 text-sm">частных домов построено</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">18k+</div>
                <div className="text-white/60 text-sm">м² школ отремонтировано</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">5.7k</div>
                <div className="text-white/60 text-sm">м² благоустроено</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">2k+</div>
                <div className="text-white/60 text-sm">м² для Сбербанка</div>
              </div>
            </div>
          </div>

          {/* Правая часть - Слайдер */}
          <div className="relative">
            {/* Основной слайдер */}
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-black/20">
              <div className={`absolute inset-0 ${current.image} transition-all duration-700`}></div>
              
              {/* Оверлей */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Контент слайда */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {current.category}
                  </div>
                  <h3 className="text-2xl font-bold">{current.title}</h3>
                  <p className="text-white/90 leading-relaxed">{current.description}</p>
                </div>
              </div>
              
              {/* Навигация */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Индикаторы слайдов */}
            <div className="flex justify-center space-x-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-emerald-400 shadow-lg shadow-emerald-400/50 scale-110' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </Container>
      
      {/* Скролл индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
