'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { type Project } from '@/types/projects'
import { 
  Download, 
  ZoomIn,
  Layers,
  Home,
  Square
} from 'lucide-react'

interface ProjectLayoutsProps {
  project: Project
}

export function ProjectLayouts({ project }: ProjectLayoutsProps) {
  const [selectedFloor, setSelectedFloor] = useState(0)

  const currentLayout = project.layout[selectedFloor]
  const totalArea = project.layout.reduce((total, floor) => 
    total + floor.rooms.reduce((floorTotal, room) => floorTotal + room.area, 0), 0
  )

  return (
    <FadeIn>
      <Card className="p-6 border-0 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-900">
            Планировки этажей
          </h2>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Скачать PDF
          </Button>
        </div>

        {/* Переключатель этажей */}
        {project.layout.length > 1 && (
          <div className="flex gap-2 mb-6">
            {project.layout.map((floor, index) => (
              <Button
                key={index}
                variant={selectedFloor === index ? "primary" : "outline"}
                onClick={() => setSelectedFloor(index)}
                className="flex items-center gap-2"
              >
                <Layers className="w-4 h-4" />
                {floor.floor} этаж
              </Button>
            ))}
          </div>
        )}

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Планировка */}
          <div>
            <div className="relative aspect-square bg-slate-100 rounded-lg overflow-hidden mb-4">
              <Image
                src={currentLayout.image}
                alt={`Планировка ${currentLayout.floor} этажа`}
                fill
                className="object-contain p-4"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
              
              {/* Кнопка увеличения */}
              <Button
                size="sm"
                variant="outline"
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>

            {/* Информация об этаже */}
            <div className="bg-slate-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Home className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-slate-900">
                  {currentLayout.floor} этаж
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-600">Количество комнат:</span>
                  <div className="font-semibold text-slate-900">
                    {currentLayout.rooms.length}
                  </div>
                </div>
                <div>
                  <span className="text-slate-600">Площадь этажа:</span>
                  <div className="font-semibold text-slate-900">
                    {currentLayout.rooms.reduce((total, room) => total + room.area, 0).toFixed(1)} м²
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Список помещений */}
          <div>
            <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
              <Square className="w-5 h-5 text-blue-600" />
              Помещения {currentLayout.floor} этажа
            </h3>
            
            <div className="space-y-3">
              {currentLayout.rooms.map((room, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-medium text-slate-900">
                      {room.name}
                    </span>
                  </div>
                  <span className="text-slate-600 font-medium">
                    {room.area} м²
                  </span>
                </div>
              ))}
            </div>

            {/* Общая информация */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-3">
                Общая информация
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-700">Общая площадь:</span>
                  <span className="font-semibold text-blue-900">{project.area} м²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Жилая площадь:</span>
                  <span className="font-semibold text-blue-900">
                    {totalArea.toFixed(1)} м²
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Этажность:</span>
                  <span className="font-semibold text-blue-900">{project.floors} этаж</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-700">Количество комнат:</span>
                  <span className="font-semibold text-blue-900">
                    {project.layout.reduce((total, floor) => total + floor.rooms.length, 0)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Примечание */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
          <p className="text-amber-800 text-sm">
            <strong>Примечание:</strong> Планировки могут быть адаптированы под ваши потребности. 
            Возможны изменения в расположении перегородок и функциональном назначении помещений.
          </p>
        </div>
      </Card>
    </FadeIn>
  )
}

