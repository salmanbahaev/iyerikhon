import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { MortgageCalculator } from '@/components/sections/mortgage-calculator'
import { MortgageFeatures } from '@/components/sections/mortgage-features'
import { MortgageAdvantages } from '@/components/sections/mortgage-advantages'
import { MortgageSteps } from '@/components/sections/mortgage-steps'

export const metadata: Metadata = {
  title: 'Ипотека ВТБ | ООО «Иерихон»',
  description: 'Выгодная ипотека от ВТБ для строительства частного дома. Аккредитованный застройщик. Ставка от 8.5%, первый взнос от 10%.',
  keywords: 'ипотека ВТБ, ипотечный калькулятор, строительство дома, аккредитованный застройщик, ипотека на строительство',
}

export default function MortgagePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20">
        {/* Hero секция */}
        <section className="py-16 lg:py-24">
          <Container>
            <FadeIn>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.74L12 19.74L6.82 22.74L8 14.74L2 9L9.91 8.26L12 2Z"/>
                  </svg>
                  Аккредитованный застройщик ВТБ
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
                  Ипотека ВТБ для строительства
                  <span className="block text-blue-600">вашего дома</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Воспользуйтесь выгодными условиями ипотечного кредитования от банка ВТБ. 
                  Мы поможем вам построить дом мечты с минимальными переплатами.
                </p>
              </div>
            </FadeIn>

          </Container>
        </section>

        {/* Основные условия */}
        <MortgageFeatures />

        {/* Калькулятор */}
        <section className="py-16 bg-slate-50">
          <Container>
            <FadeIn delay={0.3}>
              <MortgageCalculator />
            </FadeIn>
          </Container>
        </section>

        {/* Преимущества */}
        <section className="py-16">
          <Container>
            <FadeIn delay={0.4}>
              <MortgageAdvantages />
            </FadeIn>
          </Container>
        </section>

        {/* Этапы получения ипотеки */}
        <section className="py-16">
          <Container>
            <FadeIn delay={0.5}>
              <MortgageSteps />
            </FadeIn>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
