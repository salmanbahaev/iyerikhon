"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
  speed: number
}

interface HeroWithParticlesProps {
  children: React.ReactNode
  className?: string
  particleCount?: number
}

export function HeroWithParticles({ 
  children, 
  className, 
  particleCount = 25 
}: HeroWithParticlesProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [particles, setParticles] = React.useState<Particle[]>([])
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 300], [0, -150])

  // Initialize particles
  React.useEffect(() => {
    if (!containerRef.current) return

    const initialParticles = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.5 + 0.1
    }))

    setParticles(initialParticles)
  }, [particleCount])

  // Mouse tracking
  const handleMouseMove = React.useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }, [])

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  // Animate particles
  React.useEffect(() => {
    if (particles.length === 0) return

    const animateParticles = () => {
      setParticles(prev => prev.map(particle => {
        const newY = particle.y - particle.speed
        return {
          ...particle,
          y: newY < 0 ? window.innerHeight + 20 : newY,
          opacity: newY < 0 
            ? Math.random() * 0.8 + 0.2 
            : particle.opacity
        }
      }))
    }

    const interval = setInterval(animateParticles, 50)
    return () => clearInterval(interval)
  }, [particles.length])

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative min-h-screen overflow-hidden",
        "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950",
        className
      )}
    >
      {/* Animated background grid */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
            `
          }}
          animate={{
            background: [
              `radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
               radial-gradient(circle at 40% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 80% 30%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 20% 70%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
               radial-gradient(circle at 60% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
              `radial-gradient(circle at 40% 60%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
               radial-gradient(circle at 70% 40%, rgba(16, 185, 129, 0.12) 0%, transparent 50%),
               radial-gradient(circle at 30% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-white/10 rounded-lg"
            style={{
              width: 60 + i * 20,
              height: 60 + i * 20,
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Interactive particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-emerald-400"
            style={{
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              opacity: particle.opacity
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [particle.opacity, particle.opacity * 0.5, particle.opacity]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Mouse follow effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: mousePosition.x - 100,
          top: mousePosition.y - 100,
          width: 200,
          height: 200
        }}
      >
        <div className="w-full h-full rounded-full bg-gradient-radial from-blue-500/20 via-transparent to-transparent blur-xl" />
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10"
        style={{ y: y1 }}
      >
        {children}
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </motion.div>
  )
}
