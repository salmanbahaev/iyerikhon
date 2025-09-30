'use client'

import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Award, Truck, Globe } from 'lucide-react'

interface Advantage {
  id: number
  title: string
  description: string
  icon: React.ReactNode
  features: string[]
  color: string
  bgColor: string
}

const advantages: Advantage[] = [
  {
    id: 1,
    title: 'Аккредитованный застройщик ВТБ',
    description: 'Строим дома по выгодным ипотечным программам с минимальной ставкой',
    icon: <Shield className="w-8 h-8" />,
    features: [
      'Ипотека от 5.9% годовых',
      'Первоначальный взнос от 10%',
      'Срок кредита до 30 лет',
      'Упрощенное оформление'
    ],
    color: 'text-primary-600',
    bgColor: 'bg-primary-50'
  },
  {
    id: 2,
    title: 'Аккредитация у Сбербанка и ЦБ РФ',
    description: 'Официальный подрядчик крупнейших финансовых институтов России',
    icon: <Award className="w-8 h-8" />,
    features: [
      'Работа с госзаказами',
      'Высокие стандарты качества',
      'Полное страхование объектов',
      'Гарантия на все работы'
    ],
    color: 'text-success-600',
    bgColor: 'bg-success-50'
  },
  {
    id: 3,
    title: 'Прямые поставки материалов',
    description: 'Работаем напрямую с производителями, что снижает стоимость строительства',
    icon: <Truck className="w-8 h-8" />,
    features: [
      'Цены без посредников',
      'Контроль качества материалов',
      'Быстрая доставка на объект',
      'Экономия до 20% от бюджета'
    ],
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 4,
    title: 'Работа на федеральных площадках',
    description: 'Участвуем в тендерах на крупнейших электронных торговых площадках',
    icon: <Globe className="w-8 h-8" />,
    features: [
      'Прозрачность процессов',
      'Соответствие 44-ФЗ и 223-ФЗ',
      'Опыт крупных проектов',
      'Надежность и стабильность'
    ],
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

export function Advantages() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6">
              Наши преимущества
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
              Мы работаем с крупнейшими банками и корпорациями России, 
              что гарантирует высокое качество и надежность наших услуг
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <FadeIn key={advantage.id} delay={index * 0.15}>
              <div className="group relative">
                {/* Основная карточка */}
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-secondary-100 overflow-hidden">
                  
                  {/* Фоновый элемент */}
                  <div className={`absolute top-0 right-0 w-32 h-32 ${advantage.bgColor} rounded-full opacity-20 -translate-y-8 translate-x-8 group-hover:scale-150 transition-transform duration-700`}></div>
                  
                  {/* Иконка */}
                  <div className="relative z-10 mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${advantage.bgColor} rounded-xl ${advantage.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {advantage.icon}
                    </div>
                  </div>
                  
                  {/* Заголовок */}
                  <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  
                  {/* Описание */}
                  <p className="relative z-10 text-secondary-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {advantage.description}
                  </p>
                  
                  {/* Список особенностей */}
                  <ul className="relative z-10 space-y-3">
                    {advantage.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 ${advantage.color.replace('text-', 'bg-')} rounded-full flex-shrink-0`}></div>
                        <span className="text-secondary-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Подсветка при ховере */}
                <div className={`absolute inset-0 ${advantage.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl`}></div>
              </div>
            </FadeIn>
          ))}
        </div>

      </Container>
    </section>
  )
}
