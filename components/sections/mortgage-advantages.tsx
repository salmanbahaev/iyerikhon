'use client'

import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { motion } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  Star, 
  Heart, 
  Award,
  TrendingDown,
  CheckCircle,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const advantages = [
  {
    icon: Star,
    title: 'Аккредитованный застройщик ВТБ',
    description: 'Мы входим в реестр аккредитованных застройщиков банка ВТБ, что гарантирует качество строительства и надежность сделки.',
    color: 'blue'
  },
  {
    icon: TrendingDown,
    title: 'Льготная процентная ставка',
    description: 'Специальные условия для клиентов аккредитованного застройщика - ставка от 8.5% годовых вместо стандартных 12-15%.',
    color: 'green'
  },
  {
    icon: CheckCircle,
    title: 'Минимальный первый взнос',
    description: 'Возможность получить ипотеку с первоначальным взносом от 10% от стоимости недвижимости.',
    color: 'purple'
  },
  {
    icon: Clock,
    title: 'Быстрое оформление',
    description: 'Ускоренное рассмотрение заявки и принятие решения по кредиту в течение 2-3 рабочих дней.',
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Страхование включено',
    description: 'Комплексное страхование жизни, здоровья и имущества с выгодными тарифами от партнеров банка.',
    color: 'red'
  },
  {
    icon: Award,
    title: 'Гарантии качества',
    description: 'Банк контролирует ход строительства, что исключает риски недостроя и гарантирует сдачу объекта в срок.',
    color: 'indigo'
  },
  {
    icon: Heart,
    title: 'Семейная ипотека',
    description: 'Льготные условия для семей с детьми - сниженная ставка 4.5% для семей с двумя и более детьми.',
    color: 'pink'
  },
  {
    icon: Users,
    title: 'Персональный менеджер',
    description: 'Индивидуальное сопровождение сделки от подачи заявки до получения ключей от готового дома.',
    color: 'teal'
  }
]

export function MortgageAdvantages() {
  const featuredAdvantages = advantages.slice(0, 3) // Основные преимущества
  const secondaryAdvantages = advantages.slice(3) // Дополнительные преимущества

  return (
    <div className="space-y-16">
      <FadeIn>
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Эксклюзивные условия
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Преимущества ипотеки ВТБ <br />
            <span className="bg-gradient-to-r from-slate-600 to-slate-800 bg-clip-text text-transparent">
              с ООО «Иерихон»
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Как аккредитованный застройщик ВТБ, мы предлагаем нашим клиентам 
            особые условия ипотечного кредитования
          </p>
        </div>
      </FadeIn>

      {/* Главные преимущества - hero стиль */}
      <div className="grid lg:grid-cols-3 gap-8">
        {featuredAdvantages.map((advantage, index) => {
          const IconComponent = advantage.icon
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="p-8 h-full border-0 shadow-xl bg-gradient-to-br from-white to-slate-50 hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                {/* Декоративный элемент */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-${advantage.color}-100 to-${advantage.color}-200 rounded-full -translate-y-12 translate-x-12 opacity-50`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br from-${advantage.color}-400 to-${advantage.color}-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                    {advantage.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {advantage.description}
                  </p>
                  
                  <div className="flex items-center text-slate-500 group-hover:text-slate-700 transition-colors">
                    <span className="text-sm font-medium">Подробнее</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Дополнительные преимущества - компактный стиль */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-3xl"
        />
        
        <div className="relative z-10 p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              Дополнительные преимущества
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-slate-400 to-slate-600 rounded-full mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {secondaryAdvantages.map((advantage, index) => {
              const IconComponent = advantage.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center group cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br from-${advantage.color}-100 to-${advantage.color}-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-all duration-300`}>
                    <IconComponent className={`w-7 h-7 text-${advantage.color}-600`} />
                  </div>
                  
                  <h4 className="font-bold text-slate-900 mb-2 text-sm leading-tight group-hover:text-slate-700 transition-colors">
                    {advantage.title}
                  </h4>
                  
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {advantage.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      {/* CTA секция - современный минималистичный дизайн */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        {/* Основной контейнер с градиентной рамкой */}
        <div className="relative group">
          {/* Анимированная градиентная рамка */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-3xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
          
          {/* Основной контент */}
          <Card className="relative border-0 shadow-xl overflow-hidden rounded-3xl bg-white">
            {/* Фоновые декоративные элементы */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
              
              {/* Геометрические фигуры */}
              <div className="absolute top-8 right-8 w-24 h-24 border border-emerald-200 rounded-full opacity-30" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-2xl rotate-12 opacity-40" />
              <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-emerald-300 rounded-full animate-bounce delay-300" />
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-700" />
              
              {/* Волнистые линии */}
              <svg className="absolute bottom-0 left-0 w-full h-32 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-emerald-300"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-blue-300"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-slate-200"></path>
              </svg>
            </div>
            
            <div className="relative z-10 p-8 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                {/* Иконка с особым дизайном */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative w-20 h-20 mx-auto mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-2xl rotate-6 animate-pulse" />
                  <div className="absolute inset-0.5 bg-white rounded-2xl flex items-center justify-center">
                    <Star className="w-10 h-10 text-emerald-500" />
                  </div>
                </motion.div>
                
                {/* Заголовок */}
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl lg:text-4xl font-bold mb-6 leading-tight bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                >
                  Готовы получить одобрение <br />
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    по ипотеке?
                  </span>
                </motion.h3>
                
                {/* Описание */}
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-slate-600 text-lg mb-10 leading-relaxed max-w-2xl mx-auto"
                >
                  Оставьте заявку прямо сейчас, и наш специалист свяжется с вами в течение часа 
                  для консультации по всем вопросам ипотечного кредитования
                </motion.p>
                
                {/* Кнопки */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-4 overflow-hidden rounded-xl font-semibold text-white transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 transition-all duration-300 group-hover:from-emerald-600 group-hover:to-blue-700" />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 flex items-center gap-2">
                      Оставить заявку на ипотеку
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-slate-300 text-slate-700 rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all duration-300"
                  >
                    Получить консультацию
                  </motion.button>
                </motion.div>
                
                {/* Дополнительная информация */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-8 pt-8 border-t border-slate-200"
                >
                  <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Без комиссий</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Быстрое решение</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Льготные условия</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
