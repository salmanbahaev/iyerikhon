"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { 
  Shield,
  Handshake,
  Leaf,
  Rocket
} from "lucide-react"

const iconMap = {
  Shield,
  Handshake,
  Leaf,
  Rocket
} as const

type IconName = keyof typeof iconMap

interface ValueCardProps {
  icon: IconName
  title: string
  description: string
  index: number
  isLarge?: boolean
}

function ValueCard({ icon, title, description, index, isLarge = false }: ValueCardProps) {
  const Icon = iconMap[icon]
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        type: "spring",
        stiffness: 150
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative p-8 rounded-3xl bg-white border border-slate-200/60",
        "hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer",
        "overflow-hidden",
        isLarge && "lg:col-span-2 lg:p-12"
      )}
    >
      {/* Fixed background pattern with perfect circles */}
      <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 overflow-hidden">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '10px 10px',
            backgroundPosition: '0 0, 5px 5px'
          }}
        />
      </div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Floating decoration */}
      <div className="absolute top-4 right-4 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
        <motion.div
          animate={{
            rotate: isHovered ? 180 : 0,
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Icon className="w-full h-full" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon with animated border */}
        <motion.div
          className="relative mb-6 inline-block"
          animate={{
            rotateY: isHovered ? 10 : 0
          }}
          transition={{ duration: 0.4 }}
        >
          <div className="relative">
            {/* Icon background with gradient */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 p-4 shadow-lg group-hover:shadow-blue-500/20 transition-shadow duration-500">
              <Icon className="w-full h-full text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
            </div>
            
            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent"
              style={{
                background: "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.3), transparent, rgba(16, 185, 129, 0.3), transparent) border-box",
                maskImage: "linear-gradient(white, white) padding-box, linear-gradient(white, white)"
              }}
              animate={{
                rotate: isHovered ? 360 : 0
              }}
              transition={{ duration: 2, ease: "linear", repeat: isHovered ? Infinity : 0 }}
            />
          </div>
        </motion.div>

        {/* Title with morphing effect */}
        <motion.h3
          className={cn(
            "font-bold text-slate-900 mb-4 leading-tight",
            isLarge ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          )}
          animate={{
            color: isHovered ? "#1e40af" : "#0f172a"
          }}
          transition={{ duration: 0.3 }}
        >
          {title.split(' ').map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              className="inline-block mr-2"
              animate={{
                y: isHovered ? [-2, 2, -2] : 0
              }}
              transition={{
                duration: 1,
                delay: wordIndex * 0.1,
                repeat: isHovered ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h3>

        {/* Description with typing effect */}
        <motion.p
          className={cn(
            "text-slate-600 leading-relaxed",
            isLarge ? "text-lg" : "text-base"
          )}
          animate={{
            color: isHovered ? "#475569" : "#64748b"
          }}
          transition={{ duration: 0.3 }}
        >
          {description}
        </motion.p>

        {/* Interactive dots */}
        <div className="flex space-x-2 mt-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-[3px] h-[3px] rounded-full bg-slate-300 flex-shrink-0"
              style={{
                minWidth: '3px',
                minHeight: '3px',
                maxWidth: '3px',
                maxHeight: '3px'
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner decorations */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute w-4 h-4 border-slate-200",
            i === 0 && "top-4 left-4 border-l-2 border-t-2",
            i === 1 && "top-4 right-4 border-r-2 border-t-2",
            i === 2 && "bottom-4 right-4 border-r-2 border-b-2",
            i === 3 && "bottom-4 left-4 border-l-2 border-b-2"
          )}
          animate={{
            borderColor: isHovered ? "#3b82f6" : "#e2e8f0",
            scale: isHovered ? 1.2 : 1
          }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
        />
      ))}
    </motion.div>
  )
}

interface CreativeValuesGridProps {
  values: Array<{
    icon: IconName
    title: string
    description: string
  }>
  className?: string
}

export function CreativeValuesGrid({ values, className }: CreativeValuesGridProps) {
  return (
    <div className={cn(
      "grid grid-cols-1 lg:grid-cols-3 gap-8",
      className
    )}>
      {values.map((value, index) => (
        <ValueCard
          key={index}
          {...value}
          index={index}
          isLarge={index === 0 || index === values.length - 1}
        />
      ))}
    </div>
  )
}
