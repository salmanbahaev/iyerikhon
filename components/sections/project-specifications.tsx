'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { type Project } from '@/types/projects'
import { 
  Calculator, 
  Download, 
  Phone, 
  MessageCircle,
  Timer,
  Ruler,
  Building,
  Bed,
  Bath
} from 'lucide-react'

interface ProjectSpecificationsProps {
  project: Project
}

export function ProjectSpecifications({ project }: ProjectSpecificationsProps) {
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const specifications = [
    {
      label: 'Фундамент',
      value: project.specifications.foundation,
      icon: Building
    },
    {
      label: 'Стены',
      value: project.specifications.walls,
      icon: Building
    },
    {
      label: 'Кровля',
      value: project.specifications.roof,
      icon: Building
    },
    {
      label: 'Утепление',
      value: project.specifications.insulation,
      icon: Building
    },
    {
      label: 'Отделка',
      value: project.specifications.finishing,
      icon: Building
    },
    {
      label: 'Отопление',
      value: project.specifications.heating,
      icon: Building
    },
    {
      label: 'Электрика',
      value: project.specifications.electrical,
      icon: Building
    },
    {
      label: 'Сантехника',
      value: project.specifications.plumbing,
      icon: Building
    }
  ]

  return (
    <div className="space-y-6">
      {/* Краткая информация */}
      <FadeIn>
        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <h3 className="text-xl font-bold mb-4">Краткая информация</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Ruler className="w-4 h-4" />
                Площадь
              </span>
              <span className="font-semibold">{project.area} м²</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Building className="w-4 h-4" />
                Этажность
              </span>
              <span className="font-semibold">{project.floors} этаж</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Bed className="w-4 h-4" />
                Спальни
              </span>
              <span className="font-semibold">{project.bedrooms}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Bath className="w-4 h-4" />
                Санузлы
              </span>
              <span className="font-semibold">{project.bathrooms}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Timer className="w-4 h-4" />
                Срок
              </span>
              <span className="font-semibold">{project.constructionTime}</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-blue-500">
            <div className="text-center">
              <div className="text-sm opacity-90 mb-1">Стоимость строительства</div>
              <div className="text-2xl font-bold">{formatPrice(project.price)}</div>
              <div className="text-sm opacity-75">{formatPrice(project.pricePerSqm)}/м²</div>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Кнопки действий */}
      <FadeIn delay={0.1}>
        <Card className="p-6 border-0 shadow-lg">
          <div className="space-y-3">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              size="lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Рассчитать стоимость
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              <Download className="w-5 h-5 mr-2" />
              Скачать планировки
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              <Phone className="w-5 h-5 mr-2" />
              Заказать звонок
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Задать вопрос
            </Button>
          </div>
        </Card>
      </FadeIn>

      {/* Технические характеристики */}
      <FadeIn delay={0.2}>
        <Card className="p-6 border-0 shadow-lg">
          <h3 className="text-xl font-bold text-slate-900 mb-4">
            Технические характеристики
          </h3>
          
          <div className="space-y-4">
            {specifications.map((spec, index) => (
              <div key={index} className="border-b border-slate-100 pb-3 last:border-b-0 last:pb-0">
                <div className="flex items-start gap-3">
                  <spec.icon className="w-4 h-4 text-slate-400 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium text-slate-900 text-sm mb-1">
                      {spec.label}
                    </div>
                    <div className="text-slate-600 text-sm leading-relaxed">
                      {spec.value}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>

      {/* Ипотека ВТБ */}
      <FadeIn delay={0.3}>
        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Ипотека ВТБ
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Мы - аккредитованный застройщик ВТБ. Получите ипотеку на выгодных условиях.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-slate-600">Ставка от:</span>
                <span className="font-semibold text-green-700">8.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Первый взнос от:</span>
                <span className="font-semibold text-green-700">10%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Срок до:</span>
                <span className="font-semibold text-green-700">30 лет</span>
              </div>
            </div>
            <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
              Подробнее об ипотеке
            </Button>
          </div>
        </Card>
      </FadeIn>

    </div>
  )
}
