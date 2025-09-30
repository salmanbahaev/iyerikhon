"use client"

import * as React from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Phone, Mail, MapPin, Clock, ExternalLink, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { YandexMap } from "@/components/ui/yandex-map"

const iconMap = {
  Phone,
  Mail,
  MapPin,
  Clock
} as const

type IconName = keyof typeof iconMap

interface ContactItem {
  icon: IconName
  label: string
  value: string
  href?: string
  type: 'phone' | 'email' | 'address' | 'hours'
}

interface CreativeContactSectionProps {
  contactInfo: ContactItem[]
  companyDetails: Array<{
    label: string
    value: string
  }>
  mapAddress: string
  mapCoordinates: [number, number]
}

export function CreativeContactSection({
  contactInfo,
  companyDetails,
  mapAddress,
  mapCoordinates
}: CreativeContactSectionProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)

  const getContactColor = (type: ContactItem['type']) => {
    switch (type) {
      case 'phone': return 'from-emerald-500 to-teal-500'
      case 'email': return 'from-blue-500 to-indigo-500'
      case 'address': return 'from-purple-500 to-pink-500'
      case 'hours': return 'from-orange-500 to-red-500'
      default: return 'from-slate-500 to-slate-600'
    }
  }

  return (
    <div ref={ref} className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="contactPattern" patternUnits="userSpaceOnUse" width="20" height="20">
              <circle cx="10" cy="10" r="2" fill="currentColor" opacity="0.3" />
              <circle cx="5" cy="5" r="1" fill="currentColor" opacity="0.2" />
              <circle cx="15" cy="15" r="1.5" fill="currentColor" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contactPattern)" />
        </svg>
      </div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -50 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="space-y-8"
        >
          <div className="relative">
            <motion.h3 
              className="text-3xl font-bold text-slate-900 mb-8"
              animate={{
                backgroundImage: hoveredIndex !== null 
                  ? "linear-gradient(45deg, #3b82f6, #10b981)" 
                  : "linear-gradient(45deg, #0f172a, #0f172a)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              transition={{ duration: 0.3 }}
            >
              Связь с нами
            </motion.h3>
            
            {/* Decorative line */}
            <motion.div
              className="absolute -top-2 -left-4 w-12 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
              animate={{
                width: hoveredIndex !== null ? 60 : 48,
                opacity: hoveredIndex !== null ? 1 : 0.7
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <div className="grid gap-6">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isInView ? 1 : 0, 
                  y: isInView ? 0 : 30 
                }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <motion.div
                  className={cn(
                    "relative p-6 rounded-2xl bg-white border border-slate-200",
                    "hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden",
                    contact.href && "hover:border-blue-300"
                  )}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  animate={{
                    borderColor: hoveredIndex === index ? "#3b82f6" : "#e2e8f0"
                  }}
                >
                  {/* Gradient overlay */}
                  <motion.div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500",
                      getContactColor(contact.type)
                    )}
                    animate={{
                      opacity: hoveredIndex === index ? 0.05 : 0
                    }}
                  />

                  {/* Floating decoration */}
                  <motion.div
                    className="absolute top-2 right-2 w-16 h-16 opacity-5"
                    animate={{
                      rotate: hoveredIndex === index ? 45 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {React.createElement(iconMap[contact.icon], { className: "w-full h-full" })}
                  </motion.div>

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Icon */}
                    <motion.div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center",
                        "bg-gradient-to-br shadow-lg",
                        getContactColor(contact.type)
                      )}
                      whileHover={{ rotate: 5 }}
                      animate={{
                        boxShadow: hoveredIndex === index 
                          ? "0 8px 25px -5px rgba(59, 130, 246, 0.3)" 
                          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      {React.createElement(iconMap[contact.icon], { className: "w-6 h-6 text-white" })}
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-slate-900 mb-2">
                        {contact.label}
                      </h4>
                      
                      {contact.href ? (
                        <motion.a
                          href={contact.href}
                          className="text-slate-600 hover:text-blue-600 transition-colors duration-200 whitespace-pre-line block"
                          whileHover={{ x: 4 }}
                        >
                          <span>{contact.value}</span>
                          <ExternalLink className="inline w-4 h-4 ml-2 opacity-60" />
                        </motion.a>
                      ) : (
                        <p className="text-slate-600 whitespace-pre-line">
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%)`
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredIndex === index ? 1 : 0,
                      opacity: hoveredIndex === index ? [0, 0.5, 0] : 0
                    }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map and Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 0.4, delay: 0.1, type: "spring" }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8">
              Местоположение
            </h3>
            
            {/* Interactive Map */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              transition={{ duration: 0.3 }}
            >
              <YandexMap
                address={mapAddress}
                coordinates={mapCoordinates}
                className="h-[500px]"
              />
              
              {/* Map overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

          </div>
        </motion.div>
      </div>

      {/* Company Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        className="mt-12 bg-slate-100 rounded-2xl p-6 border border-slate-200 overflow-hidden"
      >
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Реквизиты компании
          </h3>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid gap-3">
            {companyDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="flex justify-between items-center py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isInView ? 1 : 0,
                  x: isInView ? 0 : -20
                }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              >
                <span className="font-medium text-slate-600 text-sm">
                  {detail.label}
                </span>
                <span className="font-semibold text-slate-900 text-sm text-right">
                  {detail.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
