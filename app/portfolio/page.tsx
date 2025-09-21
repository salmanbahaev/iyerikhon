import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { PortfolioProvider } from '@/lib/portfolio-context'
import { PortfolioStats } from '@/components/sections/portfolio-stats'
import { PortfolioFilters } from '@/components/features/portfolio-filters'
import { PortfolioGrid } from '@/components/sections/portfolio-grid'

export const metadata: Metadata = {
  title: 'Портфолио | ООО «Иерихон»',
  description: 'Портфолио выполненных проектов ООО «Иерихон»: частные дома, школы, благоустройство территорий, корпоративные проекты Сбербанка.',
  keywords: 'портфолио, выполненные проекты, строительство домов, капремонт школ, благоустройство, Сбербанк',
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <PortfolioProvider>
          <Container className="py-16 lg:py-24">
            <FadeIn>
              {/* Заголовок страницы */}
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Наше портфолио
                  <span className="block text-blue-600">выполненных проектов</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Более 25 успешно реализованных проектов по всей Чеченской Республике. 
                  Частные дома, школы, благоустройство территорий и корпоративные объекты.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Статистика портфолио */}
              <div className="mb-16">
                <PortfolioStats />
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Фильтры */}
              <PortfolioFilters />
            </FadeIn>

            <FadeIn delay={0.6}>
              {/* Сетка проектов */}
              <PortfolioGrid />
            </FadeIn>
          </Container>
        </PortfolioProvider>
      </main>
      
      <Footer />
    </>
  )
}
