import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { HeroWithParticles } from '@/components/ui/hero-with-particles'
import { FloatingCardsGrid } from '@/components/ui/floating-cards'
import { MorphingText } from '@/components/ui/morphing-text'
import { CreativeValuesGrid } from '@/components/ui/creative-values-grid'
import { InteractiveTimeline } from '@/components/ui/interactive-timeline'
import { CreativeContactSection } from '@/components/ui/creative-contact-section'
import { 
  Building2, 
  Target,
  Phone,
  Mail,
  Zap,
  Star,
  Heart
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'О компании — ООО «Иерихон»',
  description: 'ООО «Иерихон» — динамично развивающаяся строительная компания, специализирующаяся на строительстве жилых и нежилых зданий, дорог и поставке строительных материалов.',
  keywords: 'о компании, строительная компания, Иерихон, строительство домов, дороги, материалы',
}

const floatingStats = [
  {
    icon: 'Home' as const,
    title: 'Лет на рынке',
    value: 15,
    suffix: '+'
  },
  {
    icon: 'Building2' as const,
    title: 'Проектов реализовано',
    value: 500,
    suffix: '+'
  },
  {
    icon: 'Users' as const,
    title: 'Специалистов в команде',
    value: 50,
    suffix: '+'
  },
  {
    icon: 'Award' as const,
    title: 'Наград и сертификатов',
    value: 25,
    suffix: '+'
  }
]

const heroTexts = [
  'строим будущее с 2009 года',
  'создаем надежные дома',
  'воплощаем ваши мечты',
  'строим с любовью и качеством'
]

const values = [
  {
    icon: 'Shield' as const,
    title: 'Качество и надежность',
    description: 'Каждый проект проходит строгий контроль качества. Мы используем только проверенные материалы и технологии, обеспечивая долговечность и безопасность наших объектов.'
  },
  {
    icon: 'Handshake' as const,
    title: 'Партнерские отношения',
    description: 'Выстраиваем долгосрочные отношения с клиентами, поставщиками и подрядчиками. Наша репутация — результат взаимного доверия и профессионального подхода к каждому проекту.'
  },
  {
    icon: 'Leaf' as const,
    title: 'Экологичность',
    description: 'Применяем современные экологически чистые технологии и материалы. Заботимся об окружающей среде и создаем комфортное пространство для жизни будущих поколений.'
  },
  {
    icon: 'Rocket' as const,
    title: 'Инновации и развитие',
    description: 'Постоянно развиваемся, внедряем новейшие строительные технологии и повышаем квалификацию наших специалистов. Идем в ногу со временем и опережаем стандарты отрасли.'
  }
]

const contactInfo = [
  {
    icon: 'Phone' as const,
    label: 'Телефон',
    value: '+7 (928) 020-79-59',
    href: 'tel:+79280207959',
    type: 'phone' as const
  },
  {
    icon: 'Mail' as const,
    label: 'Email',
    value: 'iyerikhon89@mail.ru',
    href: 'mailto:iyerikhon89@mail.ru',
    type: 'email' as const
  },
  {
    icon: 'MapPin' as const,
    label: 'Юридический адрес',
    value: '366913, Чеченская Республика, Гудермесский р-н, с. Шуани, ул Р.Исаева, д. 40',
    type: 'address' as const
  },
  {
    icon: 'Clock' as const,
    label: 'График работы',
    value: 'Пн-Пт: 09:00 — 18:00\nСб-Вс: Выходные',
    type: 'hours' as const
  }
]

const companyDetails = [
  {
    label: 'ИНН',
    value: '2005013416'
  },
  {
    label: 'КПП',
    value: '200501001'
  },
  {
    label: 'Полное наименование',
    value: 'Общество с ограниченной ответственностью «Иерихон»'
  }
]

const timeline = [
  {
    year: '2009',
    title: 'Основание компании',
    description:
      'Начало пути в строительной индустрии с командой профессионалов и четким видением качественного строительства.',
  },
  {
    year: '2015',
    title: 'Партнерство с ВТБ',
    description:
      'Получение аккредитации застройщика ВТБ, что открыло новые возможности для клиентов в сфере ипотечного кредитования.',
  },
  {
    year: '2020',
    title: 'Сотрудничество со Сбербанком',
    description:
      'Статус подрядчика Сбербанка и реализация крупных корпоративных проектов, включая реконструкцию банковских отделений.',
  },
  {
    year: 'Сегодня',
    title: 'Лидер строительного рынка',
    description:
      'Полный цикл строительных услуг: от индивидуальных домов до крупных инфраструктурных проектов. Более 500 реализованных объектов.',
  }
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Creative Hero Section */}
        <HeroWithParticles className="relative flex items-center justify-center min-h-screen">
          <Container className="relative z-10 pt-20">
            <div className="max-w-6xl mx-auto text-center">
              <FadeIn>
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm text-blue-200 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/20 hover:bg-white/15 transition-all duration-200">
                  <Building2 className="w-5 h-5" />
                  <span>О нашей компании</span>
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                </div>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9] tracking-tight">
                  <span className="block text-white mb-4">ООО «Иерихон»</span>
                  <MorphingText 
                    texts={heroTexts}
                    className="block animate-gradient-x leading-tight"
                    interval={4000}
                  />
                </h1>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto">
                  Аккредитованный застройщик <span className="text-blue-400 font-semibold">ВТБ</span> и 
                  подрядчик <span className="text-emerald-400 font-semibold">Сбербанка</span>. 
                  Специализируемся на полном комплексе строительных услуг — 
                  от проектирования до сдачи объекта в эксплуатацию
                </p>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-white to-slate-100 text-slate-900 hover:from-slate-100 hover:to-slate-200 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105"
                  >
                    <Phone className="mr-3 h-5 w-5" />
                    Связаться с нами
                  </Button>
                  <Link href="/portfolio">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-8 py-4 text-lg backdrop-blur-sm transition-all duration-200"
                    >
                      <Star className="mr-3 h-5 w-5" />
                      Наше портфолио
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </HeroWithParticles>

        {/* Floating Stats Section */}
        <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
              <defs>
                <pattern id="statsPattern" patternUnits="userSpaceOnUse" width="40" height="40">
                  <circle cx="20" cy="20" r="2" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#statsPattern)" />
            </svg>
          </div>
          
          <Container className="relative z-10">
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Наши достижения
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                    в цифрах
                  </span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  За годы работы мы накопили богатый опыт и завоевали доверие сотен клиентов
                </p>
              </div>
            </FadeIn>

            <FloatingCardsGrid cards={floatingStats} />
          </Container>
        </section>

        {/* Interactive Timeline Section */}
        <section className="py-32 bg-white relative overflow-hidden">
          <Container>
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-8">
                <FadeIn>
                  <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                      История компании
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      Путь от небольшой строительной бригады до лидера рынка
                    </p>
                  </div>
                </FadeIn>
                
                <InteractiveTimeline items={timeline} />
              </div>

              <div className="lg:col-span-4">
                <FadeIn delay={0.2}>
                  <div className="sticky top-32">
                    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-3xl p-8 lg:p-10 text-white relative overflow-hidden">
                      {/* Decorative elements */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <Target className="w-full h-full" />
                      </div>
                      
                      <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-2xl font-bold">Наша миссия</h3>
                        </div>
                        
                        <p className="text-slate-200 leading-relaxed mb-6">
                          Создавать комфортные и надежные условия для жизни и работы, 
                          внося вклад в будущее клиентов и общества через качественное 
                          строительство и ответственное ведение бизнеса.
                        </p>

                        <div className="flex items-center gap-4 pt-6 border-t border-white/20">
                          <Zap className="w-5 h-5 text-emerald-400" />
                          <span className="text-sm text-slate-300">
                            Каждый проект — шаг в будущее
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </Container>
        </section>

        {/* Creative Values Section */}
        <section className="py-32 bg-gradient-to-br from-slate-50 to-white relative">
          <Container>
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Наши ценности
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Принципы, которые определяют наш подход к каждому проекту
                </p>
              </div>
            </FadeIn>

            <CreativeValuesGrid values={values} />
          </Container>
        </section>

        {/* Creative Contact Section */}
        <section className="py-32 bg-white">
          <Container>
            <FadeIn>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Свяжитесь с нами
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Обсудим ваш проект и предложим оптимальное решение
                </p>
              </div>
            </FadeIn>

            <CreativeContactSection
              contactInfo={contactInfo}
              companyDetails={companyDetails}
              mapAddress="ул. Р.Исаева, д. 40, с. Шуани, Гудермесский р-н"
              mapCoordinates={[43.3569, 46.1061]}
            />
          </Container>
        </section>

        {/* Enhanced CTA Section */}
        <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute center w-64 h-64 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          <Container className="relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <FadeIn>
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Готовы начать
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-emerald-400 to-purple-400 animate-gradient-x">
                    сотрудничество?
                  </span>
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.1}>
                <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                  Свяжитесь с нами для получения персонального предложения 
                  и детального расчета стоимости вашего проекта
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a href="tel:+79280207959">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-5 text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-200 transform hover:scale-105 border-0"
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      +7 (928) 020-79-59
                    </Button>
                  </a>
                  <a href="mailto:iyerikhon89@mail.ru">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-10 py-5 text-lg backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
                    >
                      <Mail className="mr-3 h-6 w-6" />
                      iyerikhon89@mail.ru
                    </Button>
                  </a>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
