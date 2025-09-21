"use client"

import { useEffect, useRef } from 'react'

interface LiquidBackgroundProps {
  className?: string
}

export function LiquidBackground({ className }: LiquidBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0
    let isVisible = true
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.offsetWidth
        canvas.height = parent.offsetHeight
      } else {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    const animate = () => {
      if (!isVisible) {
        animationId = requestAnimationFrame(animate)
        return
      }

      time += 0.003 // Немного замедлим для плавности

      // Очищаем canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Создаем градиент
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, `rgba(15, 23, 42, 0.9)`) // slate-900
      gradient.addColorStop(0.3, `rgba(30, 41, 59, 0.8)`) // slate-800  
      gradient.addColorStop(0.7, `rgba(6, 78, 59, 0.6)`) // emerald-900
      gradient.addColorStop(1, `rgba(15, 23, 42, 0.9)`) // slate-900

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Создаем жидкие формы с сильной реакцией на мышь
      const mouseInfluence = 0.15
      const mouseSizeInfluence = 0.8
      
      const shapes = [
        {
          x: canvas.width * 0.2 + Math.sin(time * 0.8) * 100 + (mouseX - canvas.width * 0.2) * mouseInfluence,
          y: canvas.height * 0.3 + Math.cos(time * 0.6) * 80 + (mouseY - canvas.height * 0.3) * mouseInfluence,
          size: 300 + Math.sin(time * 0.4) * 50 + Math.max(0, 200 - Math.sqrt((mouseX - canvas.width * 0.2) ** 2 + (mouseY - canvas.height * 0.3) ** 2) * mouseSizeInfluence),
          color: 'rgba(16, 185, 129, 0.25)', // emerald-500 - увеличена прозрачность
        },
        {
          x: canvas.width * 0.8 + Math.cos(time * 1.2) * 120 + (mouseX - canvas.width * 0.8) * mouseInfluence * 0.8,
          y: canvas.height * 0.7 + Math.sin(time * 0.9) * 100 + (mouseY - canvas.height * 0.7) * mouseInfluence * 0.8,
          size: 400 + Math.cos(time * 0.6) * 60 + Math.max(0, 180 - Math.sqrt((mouseX - canvas.width * 0.8) ** 2 + (mouseY - canvas.height * 0.7) ** 2) * mouseSizeInfluence),
          color: 'rgba(59, 130, 246, 0.2)', // blue-500
        },
        {
          x: canvas.width * 0.6 + Math.sin(time * 1.5) * 80 + (mouseX - canvas.width * 0.6) * mouseInfluence * 1.2,
          y: canvas.height * 0.4 + Math.cos(time * 1.1) * 90 + (mouseY - canvas.height * 0.4) * mouseInfluence * 1.2,
          size: 250 + Math.sin(time * 0.8) * 40 + Math.max(0, 150 - Math.sqrt((mouseX - canvas.width * 0.6) ** 2 + (mouseY - canvas.height * 0.4) ** 2) * mouseSizeInfluence),
          color: 'rgba(245, 158, 11, 0.18)', // amber-500
        },
        {
          x: canvas.width * 0.1 + Math.cos(time * 0.7) * 60 + (mouseX - canvas.width * 0.1) * mouseInfluence * 0.6,
          y: canvas.height * 0.8 + Math.sin(time * 1.3) * 70 + (mouseY - canvas.height * 0.8) * mouseInfluence * 0.6,
          size: 200 + Math.cos(time * 1.0) * 30 + Math.max(0, 120 - Math.sqrt((mouseX - canvas.width * 0.1) ** 2 + (mouseY - canvas.height * 0.8) ** 2) * mouseSizeInfluence),
          color: 'rgba(168, 85, 247, 0.15)', // purple-500
        },
        // Добавляем дополнительную форму, которая следует за мышью
        {
          x: mouseX + Math.sin(time * 2.0) * 50,
          y: mouseY + Math.cos(time * 1.8) * 40,
          size: 150 + Math.sin(time * 1.5) * 30,
          color: 'rgba(16, 185, 129, 0.3)', // emerald-500 - самая яркая
        }
      ]

      shapes.forEach((shape) => {
        // Создаем радиальный градиент для каждой формы
        const shapeGradient = ctx.createRadialGradient(
          shape.x, shape.y, 0,
          shape.x, shape.y, shape.size
        )
        shapeGradient.addColorStop(0, shape.color)
        shapeGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = shapeGradient
        ctx.beginPath()
        ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Добавляем интерактивные частицы
      for (let i = 0; i < 30; i++) {
        const particleTime = time + i * 0.3
        const baseX = (canvas.width * 0.1) + (canvas.width * 0.8) * ((i + Math.sin(particleTime * 0.3)) / 30)
        const baseY = canvas.height * 0.5 + Math.sin(particleTime * 0.8 + i) * 250
        
        // Притяжение к мыши
        const distanceToMouse = Math.sqrt((mouseX - baseX) ** 2 + (mouseY - baseY) ** 2)
        const mouseAttraction = Math.max(0, 1 - distanceToMouse / 300)
        
        const x = baseX + (mouseX - baseX) * mouseAttraction * 0.1
        const y = baseY + (mouseY - baseY) * mouseAttraction * 0.1
        const size = 2 + Math.sin(particleTime * 1.2) * 1 + mouseAttraction * 3
        const opacity = 0.2 + Math.sin(particleTime * 0.9) * 0.15 + mouseAttraction * 0.4

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Добавляем волновой эффект от мыши
      if (mouseX > 0 && mouseY > 0) {
        const waveRadius = (time * 50) % 300
        const waveOpacity = Math.max(0, 0.3 - waveRadius / 300)
        
        ctx.strokeStyle = `rgba(16, 185, 129, ${waveOpacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, waveRadius, 0, Math.PI * 2)
        ctx.stroke()
        
        // Вторая волна
        const waveRadius2 = ((time * 50) + 100) % 300
        const waveOpacity2 = Math.max(0, 0.2 - waveRadius2 / 300)
        
        ctx.strokeStyle = `rgba(59, 130, 246, ${waveOpacity2})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(mouseX, mouseY, waveRadius2, 0, Math.PI * 2)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    const handleVisibilityChange = () => {
      isVisible = !document.hidden
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    resize()
    animate()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  )
}
