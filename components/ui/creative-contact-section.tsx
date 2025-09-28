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
                  whileHover={{ y: -4, scale: 1.02 }}
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
                      rotate: hoveredIndex === index ? 45 : 0,
                      scale: hoveredIndex === index ? 1.2 : 1
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
                      whileHover={{ rotate: 5, scale: 1.1 }}
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
                      scale: hoveredIndex === index ? 2 : 0,
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
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <YandexMap 
                address={mapAddress}
                coordinates={mapCoordinates}
                className="h-80"
              />
              
              {/* Map overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Address details */}
            <motion.div
              className="mt-6 p-6 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-slate-200"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <h4 className="font-semibold text-slate-900">Адрес офиса</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                366913, Чеченская Республика,<br />
                Гудермесский район, село Шуани,<br />
                улица Р.Исаева, дом 40
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Company Details */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.4, delay: 0.2, type: "spring" }}
        className="mt-16 bg-gradient-to-br from-slate-50 via-white to-slate-50 rounded-3xl p-8 lg:p-12 border border-slate-200/60 overflow-hidden relative"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M50,50 Q150,50 150,150 Q50,150 50,50"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <motion.h3 
              className="text-3xl font-bold text-slate-900 mb-4"
              whileHover={{
                backgroundImage: "linear-gradient(45deg, #3b82f6, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Реквизиты компании
            </motion.h3>
            <motion.div
              className="w-20 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full mx-auto"
              animate={{
                width: [80, 120, 80],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              {companyDetails.map((detail, index) => (
                <motion.div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-slate-200/70 last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isInView ? 1 : 0, 
                    x: isInView ? 0 : -20 
                  }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 4, backgroundColor: "rgba(248, 250, 252, 0.5)" }}
                >
                  <span className="font-medium text-slate-600">
                    {detail.label}
                  </span>
                  <span className="font-semibold text-slate-900 text-right">
                    {detail.value}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  className="w-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white shadow-lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Позвонить
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="w-full border-2 border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Написать письмо
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
