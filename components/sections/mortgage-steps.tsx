import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { 
  FileText, 
  UserCheck, 
  Calculator, 
  Home, 
  Key,
  ArrowRight,
  Clock
} from 'lucide-react'

const steps = [
  {
    number: 1,
    icon: FileText,
    title: 'Подача заявки',
    description: 'Заполните онлайн-заявку или обратитесь к нашему менеджеру. Потребуется минимальный пакет документов.',
    time: '15 минут',
    documents: ['Паспорт', 'Справка о доходах', 'Трудовая книжка']
  },
  {
    number: 2,
    icon: UserCheck,
    title: 'Рассмотрение заявки',
    description: 'Банк проверяет платежеспособность и принимает предварительное решение по кредиту.',
    time: '2-3 дня',
    documents: ['Анкета заемщика', 'Справка с места работы']
  },
  {
    number: 3,
    icon: Calculator,
    title: 'Оценка недвижимости',
    description: 'Независимая оценка стоимости дома и земельного участка аккредитованным оценщиком.',
    time: '3-5 дней',
    documents: ['Техническая документация', 'Документы на участок']
  },
  {
    number: 4,
    icon: Home,
    title: 'Подписание договора',
    description: 'Заключение кредитного договора и договора долевого участия в строительстве.',
    time: '1 день',
    documents: ['Кредитный договор', 'Договор ДДУ', 'Страховые полисы']
  },
  {
    number: 5,
    icon: Key,
    title: 'Получение дома',
    description: 'Строительство дома, промежуточные осмотры банка и получение готового объекта.',
    time: '4-12 месяцев',
    documents: ['Акт приема-передачи', 'Свидетельство о собственности']
  }
]

export function MortgageSteps() {
  return (
    <div className="space-y-12">
      <FadeIn>
        <div className="text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Как получить ипотеку ВТБ
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Пошаговый процесс оформления ипотечного кредита - от заявки до получения ключей от дома
          </p>
        </div>
      </FadeIn>

      <div className="relative">
        {/* Connecting Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 transform -translate-x-px"></div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0
            
            return (
              <FadeIn key={index} delay={index * 0.2}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Step Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className={`flex items-start gap-4 ${isEven ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                              Этап {step.number}
                            </div>
                            <div className="flex items-center gap-1 text-sm text-slate-500">
                              <Clock className="w-4 h-4" />
                              {step.time}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-slate-600 mb-4 leading-relaxed">
                            {step.description}
                          </p>
                          <div>
                            <div className="text-sm font-semibold text-slate-700 mb-2">
                              Необходимые документы:
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {step.documents.map((doc, docIndex) => (
                                <span
                                  key={docIndex}
                                  className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-md"
                                >
                                  {doc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2">
                        <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" />
                      </div>
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <FadeIn delay={1}>
        <div className="text-center">
          <Card className="inline-block p-6 border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900">Готовы начать?</div>
                <div className="text-sm text-slate-600">Подайте заявку прямо сейчас</div>
              </div>
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Подать заявку
              </button>
            </div>
          </Card>
        </div>
      </FadeIn>
    </div>
  )
}
