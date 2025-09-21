'use client'

import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { motion } from 'framer-motion'
import { 
  Percent, 
  CreditCard, 
  Clock,
  Star,
  TrendingDown,
  Shield,
  Sparkles,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'

const features = [
  {
    icon: TrendingDown,
    title: 'от 8.5%',
    subtitle: 'Процентная ставка',
    description: 'Льготные условия для клиентов аккредитованного застройщика',
    color: 'emerald',
    highlight: true,
    bgGradient: 'from-emerald-50 to-green-50',
    iconGradient: 'from-emerald-500 to-green-600',
    textColor: 'text-emerald-600'
  },
  {
    icon: CreditCard,
    title: 'от 10%',
    subtitle: 'Первоначальный взнос',
    description: 'Минимальный размер первого взноса от стоимости недвижимости',
    color: 'blue',
    highlight: false,
    bgGradient: 'from-blue-50 to-sky-50',
    iconGradient: 'from-blue-500 to-sky-600',
    textColor: 'text-blue-600'
  },
  {
    icon: Clock,
    title: 'до 30 лет',
    subtitle: 'Срок кредитования',
    description: 'Максимально гибкие условия для комфортных ежемесячных платежей',
    color: 'purple',
    highlight: false,
    bgGradient: 'from-purple-50 to-violet-50',
    iconGradient: 'from-purple-500 to-violet-600',
    textColor: 'text-purple-600'
  }
]

const benefits = [
  {
    icon: Star,
    title: 'Аккредитованный застройщик ВТБ',
    description: 'Гарантированные льготные условия'
  },
  {
    icon: Shield,
    title: 'Страхование включено',
    description: 'Комплексная защита вашей сделки'
  },
  {
    icon: CheckCircle2,
    title: 'Быстрое оформление',
    description: 'Решение по заявке за 2-3 рабочих дня'
  }
]

export function MortgageFeatures() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Основные условия ипотеки */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <Card className={`
                  p-8 h-full border-0 shadow-xl overflow-hidden relative transition-all duration-500
                  ${feature.highlight 
                    ? 'bg-gradient-to-br from-white via-emerald-50/50 to-green-50/80 ring-2 ring-emerald-200 hover:ring-emerald-300' 
                    : `bg-gradient-to-br ${feature.bgGradient} hover:shadow-2xl`
                  }
                `}>
                  {/* Декоративные элементы */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${feature.iconGradient} rounded-full -translate-y-16 translate-x-16`} />
                  </div>
                  
                  {/* Анимированные частицы для выделенной карточки */}
                  {feature.highlight && (
                    <>
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 0
                        }}
                      />
                      <motion.div
                        className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: 0.5
                        }}
                      />
                    </>
                  )}
                  
                  <div className="relative z-10">
                    {/* Иконка */}
                    <div className={`
                      w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                      bg-gradient-to-br ${feature.iconGradient} shadow-lg group-hover:scale-110
                      ${feature.highlight ? 'ring-2 ring-white/50' : ''}
                    `}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Заголовок и значение */}
                    <div className="mb-4">
                      <div className={`text-4xl font-bold mb-2 ${feature.textColor}`}>
                        {feature.title}
                      </div>
                      <div className="text-lg font-semibold text-slate-900 mb-3">
                        {feature.subtitle}
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Дополнительный элемент для выделенной карточки */}
                    {feature.highlight && (
                      <motion.div
                        className="flex items-center text-emerald-600 font-medium"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Sparkles className="w-4 h-4 mr-2" />
                        <span className="text-sm">Лучшее предложение</span>
                      </motion.div>
                    )}
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Дополнительные преимущества */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Card className="border-0 shadow-xl overflow-hidden">
            {/* Фоновый градиент */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
            
            <div className="relative z-10 p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
                  Дополнительные преимущества
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mx-auto" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.15 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center group cursor-pointer"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                        <IconComponent className="w-8 h-8 text-slate-600" />
                      </div>
                      
                      <h4 className="font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {benefit.title}
                      </h4>
                      
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* CTA кнопка */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Рассчитать ипотеку
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
