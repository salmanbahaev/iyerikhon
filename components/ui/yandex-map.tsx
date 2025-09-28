"use client"

import { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

interface YandexMapProps {
  address: string
  coordinates: [number, number]
  className?: string
}

export function YandexMap({ address, coordinates, className = "" }: YandexMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)

  useEffect(() => {
    // Загружаем Яндекс.Карты API
    const loadYandexMaps = () => {
      if (typeof window !== 'undefined' && !window.ymaps) {
        const script = document.createElement('script')
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=&lang=ru_RU'
        script.async = true
        script.onload = initMap
        document.head.appendChild(script)
      } else if (window.ymaps) {
        initMap()
      }
    }

    const initMap = () => {
      if (window.ymaps && mapRef.current && !mapInstanceRef.current) {
        window.ymaps.ready(() => {
          const map = new window.ymaps.Map(mapRef.current, {
            center: coordinates,
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl']
          }, {
            searchControlProvider: 'yandex#search'
          })

          const placemark = new window.ymaps.Placemark(coordinates, {
            balloonContent: `ООО «Иерихон»<br>${address}`
          }, {
            preset: 'islands#blueIcon'
          })

          map.geoObjects.add(placemark)
          mapInstanceRef.current = map
        })
      }
    }

    loadYandexMaps()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.destroy()
        mapInstanceRef.current = null
      }
    }
  }, [coordinates, address])

  return (
    <div className={`relative ${className}`}>
      <div 
        ref={mapRef}
        className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/50"
        style={{ minHeight: '320px' }}
      >
        {/* Fallback loading state */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-slate-600 font-medium">
              Загрузка карты...
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Расширяем глобальный объект Window
declare global {
  interface Window {
    ymaps: any
  }
}
