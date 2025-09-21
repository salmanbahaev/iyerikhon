'use client'

import { useState } from 'react'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { ArrowRight, Home, Calculator, Phone, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <Container>
        <FadeIn>
          <div className="relative">
            {/* Декоративные элементы фона */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-2xl"></div>
            
            {/* Основной контент */}
            <motion.div 
              className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-blue-500/10 relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3 }}
            >
              {/* Анимированный градиентный фон */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-blue-500/5 to-emerald-500/5 rounded-3xl"
                animate={{
                  background: isHovered 
                    ? 'linear-gradient(135deg, rgba(30, 64, 175, 0.1), rgba(59, 130, 246, 0.1), rgba(16, 185, 129, 0.1))'
                    : 'linear-gradient(135deg, rgba(30, 64, 175, 0.05), rgba(59, 130, 246, 0.05), rgba(16, 185, 129, 0.05))'
                }}
                transition={{ duration: 0.5 }}
              />

              {/* Плавающие декоративные иконки */}
              <motion.div 
                className="absolute top-6 right-6 text-primary-300"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Home className="w-8 h-8" />
              </motion.div>

              <motion.div 
                className="absolute bottom-6 left-6 text-emerald-300"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Star className="w-6 h-6" />
              </motion.div>

              <div className="relative z-10">
                <div className="text-center">
                  {/* Заголовок */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-secondary-900 via-primary-700 to-secondary-900 bg-clip-text text-transparent">
                      Готовы начать строительство?
                    </h2>
                  </motion.div>

                  {/* Подзаголовок */}
                  <motion.p 
                    className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Получите персональное предложение и расчет стоимости вашего проекта уже сегодня
                  </motion.p>

                  {/* Преимущества */}
                  <motion.div 
                    className="flex flex-wrap justify-center gap-6 mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center space-x-2 text-secondary-700">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm font-medium">Ипотека ВТБ от 0.1%</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium">Готовые проекты</span>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-700">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-sm font-medium">Строительство под ключ</span>
                    </div>
                  </motion.div>

                  {/* Кнопки действий */}
                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group border-0 min-w-[240px]"
                    >
                      <Home className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Смотреть проекты домов
                      <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="border-2 border-secondary-300 text-secondary-700 hover:bg-secondary-50 hover:border-primary-400 hover:text-primary-700 px-8 py-4 text-lg font-semibold transition-all duration-300 group min-w-[200px]"
                    >
                      <Calculator className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                      Рассчитать стоимость
                    </Button>
                  </motion.div>

                  {/* Дополнительная информация */}
                  <motion.div 
                    className="mt-8 pt-6 border-t border-secondary-200"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-secondary-500">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>Бесплатная консультация</span>
                      </div>
                      <div className="hidden sm:block w-1 h-1 bg-secondary-300 rounded-full"></div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4" />
                        <span>Гарантия качества</span>
                      </div>
                      <div className="hidden sm:block w-1 h-1 bg-secondary-300 rounded-full"></div>
                      <span>Ответим в течение 15 минут</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
