"use client"

import * as React from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronRight, Clock, CheckCircle } from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface InteractiveTimelineProps {
  items: TimelineItem[]
  className?: string
}

export function InteractiveTimeline({ items, className }: InteractiveTimelineProps) {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const containerRef = React.useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })
  
  // Scroll-based progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 30%", "end 70%"]
  })
  
  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  // Update active index based on scroll progress
  React.useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      const newIndex = Math.min(
        Math.round(progress * (items.length - 1)),
        items.length - 1
      )
      setActiveIndex(Math.max(0, newIndex))
    })

    return unsubscribe
  }, [scrollYProgress, items.length])

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 400 600" preserveAspectRatio="none">
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 Q200,0 400,100 T400,300 Q200,400 0,350 T0,500"
            fill="none"
            stroke="url(#timelineGradient)"
            strokeWidth="2"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Timeline controls */}
        <div className="flex flex-wrap gap-2 mb-12">
          {items.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                "border border-slate-200 hover:border-slate-300",
                activeIndex === index
                  ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                  : "bg-white text-slate-600 hover:bg-slate-50"
              )}
              whileTap={{ scale: 0.95 }}
            >
              {items[index].year}
            </motion.button>
          ))}
        </div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute w-0.5 bg-slate-200 top-0 bottom-0 left-4 sm:left-8" />
          <div className="absolute w-0.5 bg-slate-200 top-0 bottom-0 left-4 sm:left-8" />

          {/* Progress indicator - scroll-based */}
          <motion.div
            className="absolute w-0.5 bg-gradient-to-b from-blue-600 to-emerald-600 top-0 left-4 sm:left-8"
            style={{ height: progressHeight }}
          />

          {/* Timeline items */}
          <div className="space-y-8 sm:space-y-12">
            {items.map((item, index) => {
              const isActive = index === activeIndex
              const isPassed = index < activeIndex

              return (
                <motion.div
                  key={index}
                  className="relative pl-12 sm:pl-20"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ 
                    opacity: 1, 
                    x: 0
                  }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 150
                  }}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 flex items-center justify-center cursor-pointer left-3 sm:left-7 top-2"
                    animate={{
                      backgroundColor: isActive ? "#3b82f6" : isPassed ? "#10b981" : "#ffffff",
                      borderColor: isActive ? "#3b82f6" : isPassed ? "#10b981" : "#cbd5e1"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {isPassed ? (
                      <CheckCircle className="w-2.5 h-2.5 text-white" />
                    ) : isActive ? (
                      <Clock className="w-2.5 h-2.5 text-white" />
                    ) : null}
                  </motion.div>

                  {/* Content card */}
                  <motion.div
                    className={cn(
                      "bg-white rounded-2xl p-6 border border-slate-200 cursor-pointer",
                      "hover:shadow-lg transition-all duration-300",
                      isActive && "shadow-lg border-blue-200 bg-blue-50/30"
                    )}
                    animate={{
                      borderColor: isActive ? "#3b82f6" : "#e2e8f0",
                      backgroundColor: isActive ? "rgba(239, 246, 255, 0.5)" : "#ffffff"
                    }}
                    whileHover={{ 
                      y: -2,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                  >
                    {/* Year badge */}
                    <motion.div
                      className={cn(
                        "inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3",
                        isActive 
                          ? "bg-blue-600 text-white" 
                          : "bg-slate-100 text-slate-600"
                      )}
                      animate={{
                        backgroundColor: isActive ? "#3b82f6" : "#f1f5f9",
                        color: isActive ? "#ffffff" : "#64748b"
                      }}
                    >
                      {item.year}
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      className="text-xl font-bold text-slate-900 mb-3 leading-tight"
                      animate={{
                        color: isActive ? "#1e40af" : "#0f172a"
                      }}
                    >
                      {item.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="text-slate-600 leading-relaxed"
                      animate={{
                        color: isActive ? "#475569" : "#64748b"
                      }}
                    >
                      {item.description}
                    </motion.p>

                    {/* Arrow indicator */}
                    <motion.div
                      className="flex items-center justify-end mt-4 text-slate-400"
                      animate={{
                        color: isActive ? "#3b82f6" : "#94a3b8"
                      }}
                    >
                      <ChevronRight 
                        className={cn(
                          "w-5 h-5 transition-transform duration-300",
                          isActive && "translate-x-1"
                        )} 
                      />
                    </motion.div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
