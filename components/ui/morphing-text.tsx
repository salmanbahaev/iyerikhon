"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface MorphingTextProps {
  texts: string[]
  className?: string
  interval?: number
  prefix?: string
  suffix?: string
}

export function MorphingText({ 
  texts, 
  className, 
  interval = 2500,
  prefix = "",
  suffix = ""
}: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isAnimating, setIsAnimating] = React.useState(false)

  React.useEffect(() => {
    const timer = setInterval(() => {
      // Ждем дополнительное время для чтения текста
      setTimeout(() => {
        setIsAnimating(true)
        
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length)
          setIsAnimating(false)
        }, 300)
      }, interval * 0.8) // 80% времени - пауза для чтения
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  const currentText = texts[currentIndex]

  return (
    <div className={cn("relative inline-block break-words", className)} style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}>
      {prefix && (
        <span className="mr-2">
          {prefix}
        </span>
      )}
      
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, rotateX: -90 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            rotateX: 0,
            filter: isAnimating ? "blur(4px)" : "blur(0px)"
          }}
          exit={{ opacity: 0, y: -20, rotateX: 90 }}
          transition={{ 
            duration: 0.3,
            type: "spring",
            stiffness: 250,
            damping: 25
          }}
          className="inline-block bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent"
          style={{
            transformOrigin: "center center",
            transformStyle: "preserve-3d",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {currentText.split(' ').map((word, wordIndex) => (
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.2,
                delay: wordIndex * 0.1,
                type: "spring",
                stiffness: 400
              }}
              className="inline-block mr-6"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>

      {suffix && (
        <span className="ml-2">
          {suffix}
        </span>
      )}

      {/* Text shadow/glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-emerald-400 opacity-0 blur-xl"
        animate={{
          opacity: isAnimating ? [0, 0.3, 0] : 0
        }}
        transition={{ duration: 1 }}
      />
    </div>
  )
}
