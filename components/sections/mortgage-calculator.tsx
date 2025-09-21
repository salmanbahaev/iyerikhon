'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calculator, Download, Phone, TrendingUp, Home, Calendar, Percent, CreditCard, DollarSign, BarChart3, TrendingDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface MortgageParams {
  housePrice: number
  downPayment: number
  loanTerm: number
  interestRate: number
}

interface MortgageResult {
  loanAmount: number
  monthlyPayment: number
  totalPayment: number
  overpayment: number
  downPaymentPercent: number
}

// Компонент для плавной анимации чисел
interface AnimatedNumberProps {
  value: number
  formatValue: (value: number) => string
  className?: string
}

function AnimatedNumber({ value, formatValue, className = "" }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(value)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Безопасность для SSR
  useEffect(() => {
    setIsMounted(true)
    setDisplayValue(value)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    if (value !== displayValue) {
      setIsAnimating(true)
      
      // Анимируем изменение числа через интерполяцию
      const startValue = displayValue
      const endValue = value
      const duration = 200 // мс
      const steps = 15
      const stepValue = (endValue - startValue) / steps
      const stepDuration = duration / steps

      let currentStep = 0
      const interval = setInterval(() => {
        currentStep++
        const newValue = startValue + (stepValue * currentStep)
        
        if (currentStep >= steps) {
          setDisplayValue(endValue)
          setIsAnimating(false)
          clearInterval(interval)
        } else {
          setDisplayValue(newValue)
        }
      }, stepDuration)

      return () => clearInterval(interval)
    }
  }, [value, displayValue, isMounted])

  // На сервере и при первом рендере показываем статичное значение
  if (!isMounted) {
    return <div className={className}>{formatValue(value)}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{
        scale: isAnimating ? [1, 1.05, 1] : 1,
        opacity: isAnimating ? [1, 0.8, 1] : 1
      }}
      transition={{ duration: 0.3 }}
    >
      {formatValue(displayValue)}
    </motion.div>
  )
}

// Улучшенный слайдер компонент
interface AdvancedSliderProps {
  min: number
  max: number
  value: number
  step?: number
  onChange: (value: number) => void
  label: string
  unit: string
  icon: React.ComponentType<any>
  formatValue?: (value: number) => string
  importance: 'high' | 'medium' | 'low'
}

function AdvancedSlider({ 
  min, max, value, step = 1, onChange, label, unit, icon: Icon, formatValue, importance 
}: AdvancedSliderProps) {
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)
  
  const percentage = ((value - min) / (max - min)) * 100
  
  // Создаем отрезки для визуализации
  const segments = Math.ceil((max - min) / step)
  const segmentArray = Array.from({ length: segments + 1 }, (_, i) => min + i * step)
  
  const importanceStyles = {
    high: 'border border-slate-200 bg-white shadow-sm',
    medium: 'border border-slate-200 bg-white shadow-sm',
    low: 'border border-slate-200 bg-white shadow-sm'
  }
  
  const iconStyles = {
    high: 'bg-slate-700',
    medium: 'bg-slate-600', 
    low: 'bg-slate-500'
  }

  // Функция для вычисления значения по позиции мыши
  const getValueFromPosition = useCallback((clientX: number) => {
    if (!trackRef.current) return value

    const rect = trackRef.current.getBoundingClientRect()
    const position = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const rawValue = min + (max - min) * position
    
    // Округляем до ближайшего step
    const steppedValue = Math.round(rawValue / step) * step
    return Math.max(min, Math.min(max, steppedValue))
  }, [min, max, step, value])

  // Обработчики мыши для drag&drop
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    
    const newValue = getValueFromPosition(e.clientX)
    onChange(newValue)
  }, [getValueFromPosition, onChange])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return
    
    const newValue = getValueFromPosition(e.clientX)
    onChange(newValue)
  }, [isDragging, getValueFromPosition, onChange])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Обработчики для touch событий (мобильные устройства)
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault()
    setIsDragging(true)
    
    const touch = e.touches[0]
    const newValue = getValueFromPosition(touch.clientX)
    onChange(newValue)
  }, [getValueFromPosition, onChange])

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return
    e.preventDefault()
    
    const touch = e.touches[0]
    const newValue = getValueFromPosition(touch.clientX)
    onChange(newValue)
  }, [isDragging, getValueFromPosition, onChange])

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Добавляем глобальные слушатели для mouse/touch событий
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.addEventListener('touchmove', handleTouchMove, { passive: false })
      document.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd])

  return (
    <motion.div 
      className={`p-6 rounded-2xl ${importanceStyles[importance]} transition-all duration-300 hover:scale-[1.02]`}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-br ${iconStyles[importance]} rounded-xl flex items-center justify-center shadow-sm`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="font-semibold text-slate-800">{label}</div>
          </div>
        </div>
        <div className="text-right">
          <motion.div 
            className="text-2xl font-bold text-slate-900"
            key={value}
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {formatValue ? formatValue(value) : value.toLocaleString()}
          </motion.div>
          <div className="text-sm text-slate-600">{unit}</div>
        </div>
      </div>
      
      <div 
        className="relative mb-4 py-2"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Фоновая полоса с отрезками */}
        <div 
          ref={trackRef}
          className="w-full h-3 bg-slate-100 rounded-full relative cursor-pointer transition-all duration-200"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Отрезки на фоне */}
          <div className="absolute inset-0 flex pointer-events-none">
            {segmentArray.slice(0, -1).map((segmentValue, index) => (
              <div
                key={index}
                className="border-r border-slate-200 first:border-l-0"
                style={{ 
                  width: `${100 / segments}%`,
                  height: '100%'
                }}
              />
            ))}
          </div>
          
          {/* Заполненная часть */}
          <motion.div 
            className={`h-full rounded-full relative z-10 transition-all duration-200 ${
              isDragging ? 'bg-slate-800' : 'bg-slate-700'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: isDragging ? 0.1 : 0.3, ease: "easeOut" }}
          />
        </div>
        
        {/* Видимый ползунок */}
        <motion.div 
          className={`absolute top-1/2 -translate-y-1/2 rounded-full shadow-lg border-2 border-white z-20 transition-all duration-200 ${
            isDragging 
              ? 'w-7 h-7 cursor-grabbing bg-slate-800' 
              : isHovering 
                ? 'w-6 h-6 cursor-grab bg-slate-700' 
                : 'w-5 h-5 cursor-grab bg-slate-600'
          }`}
          style={{ left: `calc(${percentage}% - ${isDragging ? '14px' : isHovering ? '12px' : '10px'})` }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
        >
          {/* Внутренняя точка */}
          <div className={`bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
            isDragging ? 'w-2 h-2' : 'w-1.5 h-1.5'
          }`} />
          
          {/* Анимированные кольца при перетаскивании */}
          {isDragging && (
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-slate-400"
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ scale: 1.8, opacity: 0 }}
              transition={{ duration: 0.6, repeat: Infinity }}
            />
          )}
        </motion.div>

        {/* Tooltip с текущим значением при наведении/перетаскивании */}
        {(isHovering || isDragging) && (
          <motion.div
            className="absolute -top-12 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg z-30"
            style={{ left: `calc(${percentage}% - 24px)` }}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {formatValue ? formatValue(value) : value.toLocaleString()}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
          </motion.div>
        )}
      </div>
      
      <div className="flex justify-between text-xs text-slate-500">
        <span>{formatValue ? formatValue(min) : min.toLocaleString()}</span>
        <span>{formatValue ? formatValue(max) : max.toLocaleString()}</span>
      </div>
    </motion.div>
  )
}

export function MortgageCalculator() {
  const [params, setParams] = useState<MortgageParams>({
    housePrice: 3000000,
    downPayment: 500000,
    loanTerm: 20,
    interestRate: 8.5
  })

  const [result, setResult] = useState<MortgageResult | null>(null)

  const calculateMortgage = (params: MortgageParams): MortgageResult => {
    const { housePrice, downPayment, loanTerm, interestRate } = params
    const loanAmount = housePrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const totalPayments = loanTerm * 12
    
    const monthlyPayment = loanAmount * 
      (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
      (Math.pow(1 + monthlyRate, totalPayments) - 1)
    
    const totalPayment = monthlyPayment * totalPayments
    const overpayment = totalPayment - loanAmount
    const downPaymentPercent = (downPayment / housePrice) * 100

    return {
      loanAmount,
      monthlyPayment,
      totalPayment,
      overpayment,
      downPaymentPercent
    }
  }

  useEffect(() => {
    setResult(calculateMortgage(params))
  }, [params])

  const handleParamChange = (key: keyof MortgageParams, value: number) => {
    setParams(prev => ({ ...prev, [key]: value }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const formatPercent = (value: number) => {
    return `${value.toFixed(1)}%`
  }

  // Вынесем useMemo на верхний уровень, чтобы избежать ошибки Rules of Hooks
  const resultItems = useMemo(() => {
    if (!result) return []
    
    return [
      { 
        label: 'Сумма кредита', 
        amount: result.loanAmount,
        icon: DollarSign,
      },
      { 
        label: 'Первоначальный взнос', 
        amount: params.downPayment,
        icon: CreditCard,
      },
      { 
        label: 'Общая сумма выплат', 
        amount: result.totalPayment,
        icon: BarChart3,
      },
      { 
        label: 'Переплата', 
        amount: result.overpayment,
        icon: TrendingDown,
      },
    ]
  }, [result?.loanAmount, params.downPayment, result?.totalPayment, result?.overpayment])

  return (
    <div className="space-y-8">
      {/* Профессиональный заголовок */}
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
          <Calculator className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">Ипотечный калькулятор</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Рассчитайте ежемесячный платеж и параметры кредита
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* Параметры кредита - занимают 3 колонки */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 border-0 shadow-xl bg-white">
            <div className="space-y-6">
              <AdvancedSlider
                min={1000000}
                max={15000000}
                step={500000}
                value={params.housePrice}
                onChange={(value) => handleParamChange('housePrice', value)}
                label="Стоимость дома"
                unit="₽"
                icon={Home}
                importance="high"
                formatValue={(value) => `${(value / 1000000).toFixed(1)} млн`}
              />

              <AdvancedSlider
                min={Math.max(params.housePrice * 0.1, 100000)}
                max={params.housePrice * 0.8}
                step={100000}
                value={params.downPayment}
                onChange={(value) => handleParamChange('downPayment', value)}
                label={`Первоначальный взнос (${result ? formatPercent(result.downPaymentPercent) : '10%'})`}
                unit="₽"
                icon={TrendingUp}
                importance="medium"
                formatValue={(value) => `${(value / 1000000).toFixed(2)} млн`}
              />

              <AdvancedSlider
                min={5}
                max={30}
                step={1}
                value={params.loanTerm}
                onChange={(value) => handleParamChange('loanTerm', value)}
                label="Срок кредита"
                unit="лет"
                icon={Calendar}
                importance="medium"
              />

              <AdvancedSlider
                min={6}
                max={15}
                step={0.5}
                value={params.interestRate}
                onChange={(value) => handleParamChange('interestRate', value)}
                label="Процентная ставка"
                unit="% годовых"
                icon={Percent}
                importance="low"
              />
            </div>
          </Card>
        </motion.div>

        {/* Результаты расчета - занимают 2 колонки */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="p-6 border border-slate-200 shadow-lg bg-white h-full">
            {result && (
              <div className="space-y-6 h-full flex flex-col">
                {/* Главный результат */}
                <div className="text-center border-b border-slate-200 pb-6">
                  <div className="text-sm text-slate-600 mb-3">Ежемесячный платеж</div>
                  <AnimatedNumber 
                    value={result.monthlyPayment}
                    formatValue={formatCurrency}
                    className="text-4xl font-bold text-slate-900"
                  />
                </div>

                {/* Детали в компактном списке */}
                <div className="space-y-3 flex-1">
                  {resultItems.map((item, index) => (
                    <div 
                      key={item.label}
                      className="bg-slate-50 rounded-lg p-4 border border-slate-200 hover:bg-slate-100 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center">
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-slate-700">{item.label}</div>
                            <AnimatedNumber 
                              value={item.amount}
                              formatValue={(value) => `${(value / 1000000).toFixed(item.label === 'Первоначальный взнос' ? 2 : 1)} млн ₽`}
                              className="text-lg font-bold text-slate-900"
                            />
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-slate-500">точная сумма</div>
                          <AnimatedNumber 
                            value={item.amount}
                            formatValue={formatCurrency}
                            className="text-sm font-semibold text-slate-700"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Кнопки действий */}
                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <Button 
                    className="w-full bg-slate-700 text-white hover:bg-slate-800 font-semibold transition-all duration-200"
                    size="lg"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Оставить заявку на ипотеку
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-200"
                    size="lg"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Скачать расчет
                  </Button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
