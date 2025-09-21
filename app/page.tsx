import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { FadeIn } from '@/components/ui/fade-in'
import { ModernHero } from '@/components/sections/modern-hero'

export const metadata: Metadata = {
  title: 'Главная',
  description: 'ООО «Иерихон» - аккредитованный застройщик ВТБ. Строим дома под ключ по выгодной ипотеке.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Modern Hero */}
        <ModernHero />
        
        {/* Блок преимуществ */}
        <section className="section-padding bg-white">
          <Container>
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">
                Наши преимущества
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FadeIn delay={0.1}>
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Аккредитованный застройщик ВТБ
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    Строим дома по ипотеке с выгодными условиями
                  </p>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-success-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Аккредитация Сбербанка и ЦБ РФ
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    Работаем с крупнейшими банками России
                  </p>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.3}>
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-secondary-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Прямые поставки материалов
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    От производителей без посредников
                  </p>
                </Card>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary-600 rounded"></div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Федеральные площадки
                  </h3>
                  <p className="text-secondary-600 text-sm">
                    Работа на государственных тендерах
                  </p>
                </Card>
              </FadeIn>
            </div>
          </Container>
        </section>
        
        {/* Блок новостей */}
        <section className="section-padding bg-secondary-50">
          <Container>
            <FadeIn>
              <h2 className="text-3xl font-bold text-center mb-12">
                Последние новости
              </h2>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <FadeIn key={item} delay={item * 0.1}>
                  <Card hover>
                    <div className="project-placeholder h-48 w-full"></div>
                    <div className="p-6">
                      <div className="text-sm text-secondary-500 mb-2">
                        20 сентября 2025
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        Заголовок новости {item}
                      </h3>
                      <p className="text-secondary-600 text-sm mb-4">
                        Краткое описание новости в две строки для предварительного просмотра контента.
                      </p>
                      <Button variant="ghost" size="sm" className="text-primary-600 hover:text-primary-700 p-0 h-auto">
                        Читать далее →
                      </Button>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  )
}