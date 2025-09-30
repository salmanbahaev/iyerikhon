import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { 
  Home, 
  Building2, 
  PaintBucket, 
  TreePine, 
  Construction, 
  Package,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  ChevronRight,
  Award,
  Users,
  Calendar,
  TrendingUp
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Услуги — ООО «Иерихон»',
  description: 'Полный спектр строительных услуг от аккредитованного застройщика ВТБ: строительство домов под ключ, капремонт, благоустройство, дорожные работы.',
}

const services = [
  {
    id: 'private-houses',
    icon: Home,
    title: 'Строительство частных домов под ключ',
    description: 'Индивидуальное проектирование, готовые проекты, авторский надзор с акцентом на ипотечных программах ВТБ',
    features: [
      'Индивидуальное проектирование',
      'Готовые проекты домов',
      'Авторский надзор',
      'Ипотека ВТБ с льготной ставкой',
      'Гарантия качества 5 лет',
      'Сроки строительства от 3 месяцев'
    ],
    gradient: 'from-blue-600 to-blue-700',
    bgGradient: 'from-blue-50 to-blue-100'
  },
  {
    id: 'construction-reconstruction',
    icon: Building2,
    title: 'Строительство, реконструкция, капитальный ремонт',
    description: 'Жилые и нежилые здания и сооружения в рамках государственного и муниципального заказа',
    features: [
      'Работа с государственными заказами',
      'Муниципальные контракты',
      'Реконструкция зданий',
      'Капитальный ремонт',
      'Проектирование и согласования',
      'Полный цикл работ'
    ],
    gradient: 'from-emerald-600 to-emerald-700',
    bgGradient: 'from-emerald-50 to-emerald-100'
  },
  {
    id: 'interior-finishing',
    icon: PaintBucket,
    title: 'Внутренняя отделка многоквартирных домов',
    description: 'Профессиональная отделка квартир и общественных помещений с использованием качественных материалов',
    features: [
      'Черновая отделка',
      'Чистовая отделка',
      'Дизайн-проекты',
      'Качественные материалы',
      'Соблюдение сроков',
      'Гарантия на работы'
    ],
    gradient: 'from-purple-600 to-purple-700',
    bgGradient: 'from-purple-50 to-purple-100'
  },
  {
    id: 'landscaping',
    icon: TreePine,
    title: 'Благоустройство территорий',
    description: 'Комплексное благоустройство дворовых территорий, парков и общественных пространств',
    features: [
      'Ландшафтный дизайн',
      'Озеленение территорий',
      'Детские и спортивные площадки',
      'Парковые зоны',
      'Системы освещения',
      'Малые архитектурные формы'
    ],
    gradient: 'from-green-600 to-green-700',
    bgGradient: 'from-green-50 to-green-100'
  },
  {
    id: 'road-works',
    icon: Construction,
    title: 'Дорожные работы',
    description: 'Строительство и ремонт автомобильных дорог, тротуаров и парковочных площадок',
    features: [
      'Строительство дорог',
      'Ремонт покрытий',
      'Тротуары и пешеходные зоны',
      'Парковочные площадки',
      'Дорожная разметка',
      'Установка дорожных знаков'
    ],
    gradient: 'from-orange-600 to-orange-700',
    bgGradient: 'from-orange-50 to-orange-100'
  },
  {
    id: 'materials-supply',
    icon: Package,
    title: 'Поставка строительных материалов',
    description: 'Прямые поставки качественных строительных материалов от ведущих производителей',
    features: [
      'Прямые поставки от производителей',
      'Цемент и бетонные смеси',
      'Металлопрокат',
      'Строительные блоки',
      'Кровельные материалы',
      'Конкурентные цены'
    ],
    gradient: 'from-slate-600 to-slate-700',
    bgGradient: 'from-slate-50 to-slate-100'
  }
]

const advantages = [
  {
    icon: CheckCircle,
    title: 'Аккредитованный застройщик ВТБ',
    description: 'Строим дома по льготной ипотеке с государственной поддержкой'
  },
  {
    icon: CheckCircle,
    title: 'Партнер Сбербанка',
    description: 'Выполняем корпоративные проекты крупнейшего банка России'
  },
  {
    icon: CheckCircle,
    title: 'Работа на федеральных площадках',
    description: 'Участвуем в государственных и муниципальных тендерах'
  },
  {
    icon: CheckCircle,
    title: 'Прямые поставки материалов',
    description: 'Работаем напрямую с производителями, что снижает стоимость'
  }
]

const stats = [
  {
    icon: Home,
    value: 10,
    label: 'Частных домов построено',
    suffix: ''
  },
  {
    icon: Award,
    value: 10,
    label: 'Школ отремонтировано',
    suffix: ''
  },
  {
    icon: TrendingUp,
    value: 5754,
    label: 'Кв. метров благоустроено',
    suffix: 'м²'
  },
  {
    icon: Users,
    value: 5,
    label: 'Объектов для Сбербанка',
    suffix: ''
  }
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M0%200h80v80H0V0zm20%2020v40h40V20H20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
          
          {/* Floating Shapes */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-white/10 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-32 left-32 w-3 h-3 bg-emerald-400/20 rounded-full animate-bounce delay-1000"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20">
                  <Award className="w-4 h-4" />
                  Аккредитованный застройщик ВТБ
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
                  <span className="block text-white mb-2">Полный спектр</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 animate-gradient-x">
                    строительных услуг
                  </span>
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-6 sm:mb-10 leading-relaxed max-w-2xl">
                  От частного домостроения до крупных государственных проектов — 
                  <span className="text-white font-semibold"> мы обеспечиваем высокое качество</span> на каждом этапе
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                  <Button 
                    size="lg" 
                    className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Получить консультацию
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="group border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Отправить заявку
                  </Button>
                </div>
              </FadeIn>

              {/* Trust Indicators */}
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap items-center gap-4 md:gap-8 text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">Партнер Сбербанка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">15+ лет опыта</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                    <span className="text-sm">500+ проектов</span>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Stats */}
            <div className="lg:col-span-5">
              <FadeIn delay={0.5}>
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl blur-xl"></div>
                  
                  {/* Main stats card */}
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Наши достижения</h3>
                      <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mx-auto"></div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {stats.map((stat, index) => (
                        <div key={index} className="text-center group">
                          <div className="relative mb-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <stat.icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                          </div>
                          <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                          </div>
                          <div className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Bottom accent */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <div className="text-center text-slate-300 text-sm">
                        ⭐ Надежный партнер для вашего проекта
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </Container>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-20 lg:py-32 bg-white">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Наши услуги
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                Предоставляем полный цикл строительных работ с гарантией качества 
                и соблюдением всех технических требований
              </p>
            </FadeIn>
          </div>

          {/* Main Service - Highlighted */}
          <FadeIn delay={0.1}>
            <Card className="mb-12 p-8 lg:p-12 bg-gradient-to-br from-blue-50 via-white to-emerald-50 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                      <Home className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full mb-2">
                        Основная услуга
                      </span>
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900">
                        Строительство частных домов под ключ
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Индивидуальное проектирование, готовые проекты, авторский надзор с акцентом на ипотечных программах ВТБ
                  </p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Смотреть проекты
                    </Button>
                    <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                      Рассчитать стоимость
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {services[0].features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Other Services */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.slice(1).map((service, index) => (
              <FadeIn key={service.id} delay={(index + 1) * 0.1}>
                <Card className={`group h-full p-6 bg-gradient-to-br ${service.bgGradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2 mb-6 text-left">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant="ghost" 
                      className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-semibold group/btn w-full justify-center"
                    >
                      Подробнее
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <Container>
          <div className="text-center mb-16">
            <FadeIn>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Почему выбирают нас
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
                Наши конкурентные преимущества и партнерства с ведущими компаниями России
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Card className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl translate-x-32 translate-y-32"></div>
        </div>

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50">
              <div className="text-center">
                <FadeIn>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <Calendar className="w-4 h-4" />
                    Бесплатная консультация
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                    Готовы начать ваш проект?
                  </h2>
                </FadeIn>
                
                <FadeIn delay={0.1}>
                  <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Свяжитесь с нами для получения персонального предложения 
                    и детального расчета стоимости работ
                  </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      +7 938 888 88 59
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 px-8 py-4 text-lg transition-all"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      iyerikhon89@mail.ru
                    </Button>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="mt-8 pt-8 border-t border-slate-200">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-slate-900">24/7</div>
                        <div className="text-sm text-slate-600">Поддержка</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">15+</div>
                        <div className="text-sm text-slate-600">Лет опыта</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">100%</div>
                        <div className="text-sm text-slate-600">Гарантия</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-slate-900">500+</div>
                        <div className="text-sm text-slate-600">Проектов</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
    </>
  )
}
