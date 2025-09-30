"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Home,
  Building2, 
  Users, 
  Award,
  Shield,
  Handshake,
  Leaf,
  Rocket
} from "lucide-react"

const iconMap = {
  Home,
  Building2,
  Users,
  Award,
  Shield,
  Handshake,
  Leaf,
  Rocket
} as const

type IconName = keyof typeof iconMap

interface FloatingCardProps {
  icon: IconName
  title: string
  value: number
  suffix?: string
  delay?: number
  className?: string
}

export function FloatingCard({ 
  icon, 
  title, 
  value, 
  suffix = "", 
  delay = 0, 
  className 
}: FloatingCardProps) {
  const Icon = iconMap[icon]
  const [isHovered, setIsHovered] = React.useState(false)
  const [count, setCount] = React.useState(0)

  // Анимация счетчика
  React.useEffect(() => {
    let start = 0
    const end = value
    const duration = 2000
    const increment = (end - start) / (duration / 16)
    
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        duration: 0.4, 
        delay,
        type: "spring",
        stiffness: 150,
        damping: 20
      }}
      className={cn(
        "group relative p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50/80",
        "border border-white/20 backdrop-blur-xl shadow-xl hover:shadow-2xl",
        "transition-all duration-300 cursor-pointer",
        "hover:-translate-y-4",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: isHovered ? [-20, -40, -20] : [0, -10, 0],
              opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.4, 0.2],
              scale: isHovered ? [1, 1.5, 1] : [1, 1.2, 1]
            }}
            transition={{
              duration: 1 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Card content */}
      <div className="relative z-10">
        {/* Icon with morphing background */}
        <motion.div
          className="relative mb-6"
          animate={{
            rotateY: isHovered ? 180 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 p-0.5 shadow-lg group-hover:shadow-blue-500/25">
            <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center">
              <Icon className="w-8 h-8 text-slate-700 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
          </div>
          
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 w-16 h-16 rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-transparent to-purple-500"
            animate={{
              rotate: isHovered ? 360 : 0
            }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: isHovered ? Infinity : 0
            }}
            style={{
              maskImage: "linear-gradient(45deg, transparent 45%, black 50%, transparent 55%)"
            }}
          />
        </motion.div>

        {/* Value with glitch effect */}
        <motion.div
          className="text-4xl font-bold text-slate-900 mb-2"
          animate={{
            textShadow: isHovered 
              ? "0 0 8px rgba(59, 130, 246, 0.5)" 
              : "0 0 0px rgba(59, 130, 246, 0)"
          }}
          transition={{ duration: 0.3 }}
        >
          <span>{count.toLocaleString()}</span>
          <span className="text-blue-600">{suffix}</span>
        </motion.div>

        {/* Title with typing effect */}
        <motion.div
          className="text-slate-600 font-medium text-sm leading-relaxed"
          animate={{
            color: isHovered ? "#1e40af" : "#6b7280"
          }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.div>
      </div>

      {/* Interactive corners */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute w-3 h-3 border-t-2 border-l-2 border-blue-400/20",
            i === 0 && "top-4 left-4",
            i === 1 && "top-4 right-4 rotate-90",
            i === 2 && "bottom-4 right-4 rotate-180", 
            i === 3 && "bottom-4 left-4 -rotate-90"
          )}
          animate={{
            borderColor: isHovered ? "rgba(59, 130, 246, 0.8)" : "rgba(59, 130, 246, 0.2)",
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3, delay: i * 0.1 }}
        />
      ))}
    </motion.div>
  )
}

interface FloatingCardsGridProps {
  cards: Array<{
    icon: IconName
    title: string
    value: number
    suffix?: string
  }>
  className?: string
}

export function FloatingCardsGrid({ cards, className }: FloatingCardsGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
      className
    )}>
      {cards.map((card, index) => (
        <FloatingCard
          key={index}
          {...card}
          delay={index * 0.2}
        />
      ))}
    </div>
  )
}
