'use client'

import { useEffect, useRef } from 'react'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { AnimatedCounter } from '@/components/ui/animated-counter'

interface KeyFigure {
  id: number
  value: number
  suffix: string
  label: string
  description: string
  icon: string
  color: string
}

const keyFigures: KeyFigure[] = [
  {
    id: 1,
    value: 10,
    suffix: '+',
    label: 'частных домов построено',
    description: 'Современные дома под ключ с полной отделкой',
    icon: '🏠',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    value: 10,
    suffix: '',
    label: 'школ отремонтировано',
    description: 'Капитальный ремонт образовательных учреждений',
    icon: '🏫',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    id: 3,
    value: 6,
    suffix: '',
    label: 'км дорог благоустроено',
    description: 'Создание комфортной городской среды',
    icon: '🌳',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 4,
    value: 5,
    suffix: '',
    label: 'объектов для Сбербанка',
    description: 'Реконструкция корпоративных помещений',
    icon: '🏢',
    color: 'from-slate-500 to-slate-600'
  },
  {
    id: 5,
    value: 21290,
    suffix: '',
    label: 'м² общая площадь',
    description: 'Общая площадь всех реализованных проектов',
    icon: '📐',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 6,
    value: 4,
    suffix: '',
    label: 'года опыта работы',
    description: 'Успешная работа на строительном рынке',
    icon: '📅',
    color: 'from-indigo-500 to-indigo-600'
  }
]

export function KeyFigures() {
  const sectionRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={sectionRef} className="section-padding bg-gradient-to-b from-white to-secondary-50">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
              Наши достижения в цифрах
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              За годы работы мы построили десятки объектов, отремонтировали тысячи квадратных метров 
              и создали современные пространства для жизни, учебы и работы
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {keyFigures.map((figure, index) => (
            <FadeIn key={figure.id} delay={index * 0.1} className="h-full">
              <div className="group relative h-full">
                {/* Карточка */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary-100 overflow-hidden h-full flex flex-col">
                  
                  {/* Фоновый градиент */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${figure.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Иконка */}
                  <div className="relative z-10 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${figure.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                      {figure.icon}
                    </div>
                  </div>
                  
                  {/* Число */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-baseline space-x-1">
                      <AnimatedCounter
                        value={figure.value}
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-900"
                        duration={2000}
                        delay={index * 200}
                      />
                      <span className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-secondary-900">
                        {figure.suffix}
                      </span>
                    </div>
                  </div>
                  
                  {/* Заголовок */}
                  <h3 className="relative z-10 text-lg font-semibold text-secondary-800 mb-3 leading-snug">
                    {figure.label}
                  </h3>
                  
                  {/* Описание */}
                  <p className="relative z-10 text-secondary-600 text-sm leading-relaxed mt-auto">
                    {figure.description}
                  </p>
                  
                  {/* Декоративный элемент */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                </div>
                
                {/* Подсветка при ховере */}
                <div className={`absolute inset-0 bg-gradient-to-br ${figure.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Дополнительная информация */}
        <FadeIn delay={0.6}>
          <div className="mt-16 text-center">
            <div className="flex flex-col gap-6 bg-white rounded-2xl p-6 shadow-lg border border-secondary-100 sm:grid sm:grid-cols-3 sm:gap-8 sm:p-8 sm:items-start">
              <div className="flex items-start space-x-3 sm:space-x-4 sm:justify-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm sm:text-base">ВТБ</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-secondary-900 text-sm sm:text-base">Аккредитованный застройщик</div>
                  <div className="text-xs sm:text-sm text-secondary-600">Банк ВТБ (ПАО)</div>
                </div>
              </div>

              <div className="flex justify-center sm:flex">
                <div className="w-8 h-px sm:w-px sm:h-8 bg-secondary-200"></div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4 sm:justify-end">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-xs">СБ</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-secondary-900 text-sm sm:text-base">Подрядчик</div>
                  <div className="text-xs sm:text-sm text-secondary-600">ПАО Сбербанк</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
