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
  starCount = 150,
  maxDistance = 100,
  pullStrength = 0.1
}: InteractiveStarsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

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

  // Обработка движения мыши
  const handleMouseMove = (e: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    }
  }

  // Анимация звезд
  const animate = () => {
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

    starsRef.current.forEach((star) => {
      // Расчет расстояния до курсора
      const dx = mouse.x - star.originalX
      const dy = mouse.y - star.originalY
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Эффект притяжения к курсору
      if (distance < maxDistance) {
        const force = (maxDistance - distance) / maxDistance
        const pullX = dx * force * pullStrength
        const pullY = dy * force * pullStrength
        
        star.x = star.originalX + pullX
        star.y = star.originalY + pullY
      } else {
        // Возврат к исходной позиции
        star.x += (star.originalX - star.x) * 0.05
        star.y += (star.originalY - star.y) * 0.05
      }

      // Эффект мерцания
      const twinkle = Math.sin(currentTime * star.twinkleSpeed + star.twinklePhase)
      const currentOpacity = star.opacity + twinkle * 0.3

      // Отрисовка звезды
      ctx.save()
      ctx.globalAlpha = Math.max(0.2, currentOpacity)
      
      // Основная звезда с градиентом
      const starGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2)
      starGradient.addColorStop(0, '#ffffff')
      starGradient.addColorStop(0.6, '#60a5fa')
      starGradient.addColorStop(1, 'transparent')
      
      ctx.fillStyle = starGradient
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fill()

      // Светящийся эффект для больших звезд
      if (star.size > 1.5) {
        ctx.globalAlpha = Math.max(0.1, currentOpacity * 0.4)
        const glowGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3)
        glowGradient.addColorStop(0, '#10b981')
        glowGradient.addColorStop(0.5, '#60a5fa')
        glowGradient.addColorStop(1, 'transparent')
        
        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Эффект притяжения - линии к курсору
      if (distance < maxDistance && distance > 0) {
        const lineOpacity = (maxDistance - distance) / maxDistance * 0.6
        ctx.globalAlpha = lineOpacity
        
        // Создаем градиент для линии
        const gradient = ctx.createLinearGradient(star.x, star.y, mouse.x, mouse.y)
        gradient.addColorStop(0, '#10b981') // emerald-500
        gradient.addColorStop(0.5, '#60a5fa') // blue-400
        gradient.addColorStop(1, '#3b82f6') // blue-500
        
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1.5
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(star.x, star.y)
        ctx.lineTo(mouse.x, mouse.y)
        ctx.stroke()
        
        // Добавляем светящийся эффект
        ctx.globalAlpha = lineOpacity * 0.3
        ctx.lineWidth = 3
        ctx.stroke()
      }

      ctx.restore()
    })

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    updateDimensions()
    
    const handleResize = () => {
      updateDimensions()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)

    // Запуск анимации
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
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
