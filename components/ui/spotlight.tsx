"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface SpotlightProps {
  className?: string
  color?: string
  size?: number
}

// Minimal spotlight that follows the cursor with GPU-accelerated radial-gradient
export function Spotlight({ className, color = "rgba(59,130,246,0.15)", size = 280 }: SpotlightProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      el.style.setProperty("--sx", `${x}px`)
      el.style.setProperty("--sy", `${y}px`)
    }
    el.addEventListener("mousemove", handle)
    return () => el.removeEventListener("mousemove", handle)
  }, [])

  return (
    <div
      ref={ref}
      className={cn("pointer-events-none absolute inset-0 [mask-image:radial-gradient(closest-side,white,transparent)]", className)}
      style={{
        background: `radial-gradient(${size}px ${size}px at var(--sx, 50%) var(--sy, 50%), ${color}, transparent)`,
        willChange: "transform, background",
      }}
    />
  )
}



