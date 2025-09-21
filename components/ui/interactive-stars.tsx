'use client'

import { useEffect, useRef, useState } from 'react'

interface Star {
  x: number
  y: number
  originalX: number
  originalY: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

interface InteractiveStarsProps {
  className?: string
  starCount?: number
  maxDistance?: number
  pullStrength?: number
}

export function InteractiveStars({ 
  className = '', 
  starCount = 100, // Уменьшено с 250 до 100
  maxDistance = 80, // Уменьшено с 150 до 80
  pullStrength = 0.08 // Уменьшено для плавности
}: InteractiveStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number | null>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const lastMouseMoveTime = useRef<number>(0)
  const isVisible = useRef<boolean>(true)
  const performanceMode = useRef<'high' | 'medium' | 'low'>('high')

  // Инициализация звезд
  const initStars = (width: number, height: number) => {
    const stars: Star[] = []
    for (let i = 0; i < starCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      stars.push({
        x,
        y,
        originalX: x,
        originalY: y,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2
      })
    }
    starsRef.current = stars
  }

  // Обновление размеров
  const updateDimensions = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const dpr = window.devicePixelRatio || 1
    
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.scale(dpr, dpr)
    }

    setDimensions({ width: rect.width, height: rect.height })
    initStars(rect.width, rect.height)
  }

  // Оптимизированная обработка движения мыши с throttling
  const handleMouseMove = (e: MouseEvent) => {
    const now = performance.now()
    if (now - lastMouseMoveTime.current < 16) return // Throttle до 60fps
    
    lastMouseMoveTime.current = now
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  // Автоматическое определение режима производительности
  const checkPerformance = () => {
    const start = performance.now()
    // Простой тест производительности
    for (let i = 0; i < 10000; i++) {
      Math.sqrt(Math.random() * 1000)
    }
    const duration = performance.now() - start
    
    if (duration > 5) {
      performanceMode.current = 'low'
    } else if (duration > 2) {
      performanceMode.current = 'medium'
    } else {
      performanceMode.current = 'high'
    }
  }

  // Оптимизированная анимация звезд
  const animate = () => {
    if (!isVisible.current) {
      animationRef.current = requestAnimationFrame(animate)
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = dimensions
    if (width === 0 || height === 0) return

    // Очистка canvas
    ctx.clearRect(0, 0, width, height)

    const mouse = mouseRef.current
    const currentTime = Date.now() * 0.001
    const mode = performanceMode.current

    starsRef.current.forEach((star, index) => {
      // Пропускаем некоторые звезды в режиме низкой производительности
      if (mode === 'low' && index % 2 !== 0) return

      // Оптимизированный расчет расстояния (избегаем Math.sqrt когда возможно)
      const dx = mouse.x - star.originalX
      const dy = mouse.y - star.originalY
      const distanceSquared = dx * dx + dy * dy
      const maxDistanceSquared = maxDistance * maxDistance

      // Эффект притяжения к курсору
      if (distanceSquared < maxDistanceSquared) {
        const distance = Math.sqrt(distanceSquared) // Только когда нужно
        const force = (maxDistance - distance) / maxDistance
        const pullX = dx * force * pullStrength
        const pullY = dy * force * pullStrength
        
        star.x = star.originalX + pullX
        star.y = star.originalY + pullY
      } else {
        // Возврат к исходной позиции (быстрее)
        star.x += (star.originalX - star.x) * 0.08
        star.y += (star.originalY - star.y) * 0.08
      }

      // Упрощенное мерцание
      let currentOpacity = star.opacity
      if (mode === 'high') {
        const twinkle = Math.sin(currentTime * star.twinkleSpeed + star.twinklePhase)
        currentOpacity = star.opacity + twinkle * 0.2 // Уменьшено с 0.3
      }

      // Упрощенная отрисовка звезды
      ctx.save()
      ctx.globalAlpha = Math.max(0.3, currentOpacity)
      
      // Простая белая заливка вместо градиентов для оптимизации
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()

      // Убираем все тяжелые эффекты (градиенты, свечение, линии)
      // Они создавали основную нагрузку

      ctx.restore()
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    updateDimensions()
    checkPerformance() // Проверяем производительность устройства
    
    const handleResize = () => {
      updateDimensions()
    }

    const handleVisibilityChange = () => {
      isVisible.current = !document.hidden
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    // Запуск анимации
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (dimensions.width > 0 && dimensions.height > 0) {
      animate()
    }
  }, [dimensions])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  )
}
