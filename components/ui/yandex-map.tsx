"use client"

import React, { useEffect, useRef } from 'react'
import { MapPin } from 'lucide-react'

interface YandexMapProps {
  address: string
  coordinates: [number, number]
  className?: string
  apiKey?: string
}

function YandexMapComponent({ address, coordinates, className = "", apiKey }: YandexMapProps) {
  
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const [isClient, setIsClient] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)
  const [error, setError] = React.useState<string | null>(null)
  const [retryCount, setRetryCount] = React.useState(0)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient) return

    // Загружаем Яндекс.Карты API
    const loadYandexMaps = () => {
      const yandexApiKey = apiKey || process.env.NEXT_PUBLIC_YANDEX_MAPS_API_KEY || 'demo-key-for-testing'

      if (!yandexApiKey || yandexApiKey === 'demo-key-for-testing' || yandexApiKey === 'undefined') {
        // Если API ключ не настроен или используется демо-ключ, показываем статическую карту
        console.warn('⚠️ API ключ Яндекс.Карт не настроен. Используем статическую карту.')
        setError('Карта недоступна. Используем статическую версию.')
        setIsLoading(false)
        return
      }

      // Временно отключаем проверку формата для отладки
      // const apiKeyPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
      // if (!apiKeyPattern.test(yandexApiKey)) {
      //   console.warn('⚠️ Неверный формат API ключа Яндекс.Карт. Используем статическую карту.')
      //   setError('Неверный формат API ключа. Используем статическую версию.')
      //   setIsLoading(false)
      //   return
      // }

      // Таймаут для загрузки скрипта (10 секунд)
      const loadTimeout = setTimeout(() => {
        console.error('⏰ Таймаут загрузки Яндекс.Карт')
        setError('Превышено время ожидания загрузки карты')
        setIsLoading(false)
      }, 10000)

      if (typeof window !== 'undefined' && !window.ymaps) {
        const script = document.createElement('script')
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${yandexApiKey}&lang=ru_RU`
        script.async = true
        script.onload = () => {
          clearTimeout(loadTimeout)
          try {
            initMap()
          } catch (err) {
            console.error('❌ Ошибка инициализации карты:', err)
            setError('Ошибка инициализации карты')
            setIsLoading(false)
          }
        }
        script.onerror = (e) => {
          console.error('❌ Ошибка загрузки скрипта Яндекс.Карт:', e)
          clearTimeout(loadTimeout)
          setError('Ошибка загрузки Яндекс.Карт. Проверьте подключение к интернету.')
          setIsLoading(false)
        }
        document.head.appendChild(script)
      } else if (window.ymaps) {
        clearTimeout(loadTimeout)
        try {
          initMap()
        } catch (err) {
          console.error('❌ Ошибка инициализации карты:', err)
          setError('Ошибка инициализации карты')
          setIsLoading(false)
        }
      }
    }

    const initMap = () => {
      if (window.ymaps && mapRef.current && !mapInstanceRef.current) {
        window.ymaps.ready(() => {
          try {
            const map = new window.ymaps.Map(mapRef.current, {
              center: coordinates,
              zoom: 18,
              controls: ['zoomControl', 'fullscreenControl', 'searchControl', 'routeButtonControl', 'trafficControl']
            }, {
              searchControlProvider: 'yandex#search'
            })

            // Добавляем поисковый контроль
            const searchControl = new window.ymaps.control.SearchControl({
              options: {
                provider: 'yandex#search',
                placeholderContent: 'Найти адрес или организацию',
                size: 'large'
              }
            })
            map.controls.add(searchControl)

            // Добавляем кнопку маршрута
            const routeButton = new window.ymaps.control.RouteButton({
              options: {
                float: 'right',
                size: 'auto'
              }
            })
            map.controls.add(routeButton)

            const placemark = new window.ymaps.Placemark(coordinates, {
              balloonContent: `
                <div style="max-width: 280px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                  <div style="font-weight: bold; font-size: 16px; color: #1e293b; margin-bottom: 8px;">ООО «Иерихон»</div>
                  <div style="font-size: 14px; color: #475569; line-height: 1.4; margin-bottom: 12px;">${address}</div>
                  <div style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
                    <div style="margin-bottom: 6px;">
                      <a href="tel:+79280207959" style="color: #3b82f6; text-decoration: none; font-weight: 500;">📞 +7 (928) 020-79-59</a>
                    </div>
                    <div style="margin-bottom: 6px;">
                      <a href="mailto:iyerikhon89@mail.ru" style="color: #3b82f6; text-decoration: none; font-weight: 500;">✉️ iyerikhon89@mail.ru</a>
                    </div>
                    <div style="font-size: 13px; color: #64748b; margin-top: 8px;">
                      <div style="font-style: italic; margin-bottom: 4px;">Аккредитованный застройщик ВТБ</div>
                      <div>Пн-Пт: 09:00 — 18:00</div>
                    </div>
                  </div>
                </div>
              `,
              hintContent: 'ООО «Иерихон» — ул. Р.Исаева, д. 40'
            }, {
              preset: 'islands#blueHomeIcon',
              iconColor: '#3b82f6'
            })

            map.geoObjects.add(placemark)

            // Обработчик клика по маркеру
            placemark.events.add('click', () => {
              placemark.balloon.open()
            })

            mapInstanceRef.current = map
            setIsLoading(false)
          } catch (err) {
            setError('Ошибка создания карты')
            setIsLoading(false)
          }
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
  }, [coordinates, address, retryCount])

  const handleRetry = () => {
    setIsLoading(true)
    setError(null)
    setRetryCount(prev => prev + 1)
  }

  if (!isClient) {
    return (
      <div className={`relative ${className}`}>
        <div
          className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/50 flex items-center justify-center"
          style={{ minHeight: '320px' }}
        >
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
    )
  }

  return (
    <div className={`relative ${className}`}>
      <div
        ref={mapRef}
        className="w-full h-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/50"
        style={{ minHeight: '320px' }}
      >
        {/* Loading state */}
        {isLoading && (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-slate-600 font-medium">
                Загрузка карты...
              </p>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 relative">
            <div className="text-center p-6 max-w-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Интерактивная карта
              </h3>
              <p className="text-slate-600 mb-4">
                ООО «Иерихон»<br/>
                {address}
              </p>
              <div className="space-y-3">
                {error.includes('статическую') || error.includes('демо-режиме') ? (
                  <div className="space-y-4">
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-blue-700 text-sm">
                        Используем статическую карту. Для интерактивной версии настройте API ключ Яндекс.Карт
                      </p>
                    </div>
                    {/* Статическая карта через iframe */}
                    <div className="rounded-lg overflow-hidden border border-slate-200">
                      <iframe
                        src={`https://yandex.ru/map-widget/v1/-/CCUBKHXc3D?ll=${coordinates[1]}%2C${coordinates[0]}&z=16`}
                        width="100%"
                        height="300"
                        frameBorder="0"
                        allowFullScreen
                        style={{ border: 0 }}
                        title="Статическая карта ООО Иерихон"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-600 font-medium text-sm">
                      {error}
                    </p>
                  </div>
                )}

                {retryCount < 3 && !error.includes('демо-режиме') && (
                  <button
                    onClick={handleRetry}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Попробовать снова
                  </button>
                )}

                {retryCount >= 3 && (
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-amber-700 text-sm">
                      Попробуйте обновить страницу или проверьте подключение к интернету
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* Decorative background */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 border-2 border-blue-300 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-emerald-300 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-12 h-12 border-2 border-purple-300 rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

// Мемоизируем компонент для предотвращения лишних рендеров
export const YandexMap = React.memo(YandexMapComponent)

// Расширяем глобальный объект Window
declare global {
  interface Window {
    ymaps: any
  }
}

