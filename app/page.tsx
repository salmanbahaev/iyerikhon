import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { ModernHero } from '@/components/sections/modern-hero'
import { KeyFigures } from '@/components/sections/key-figures'
import { Advantages } from '@/components/sections/advantages'
import { CTASection } from '@/components/sections/cta-section'
import { NewsCarousel } from '@/components/sections/news-carousel'

export const metadata: Metadata = {
  title: 'Главная',
  description: 'ООО «Иерихон» - аккредитованный застройщик ВТБ. Строим дома под ключ по выгодной ипотеке.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero-секция с слайдером */}
        <ModernHero />
        
        {/* Блок ключевых цифр с анимированными счетчиками */}
        <KeyFigures />
        
        {/* Секция преимуществ */}
        <Advantages />
        
        {/* CTA секция */}
        <CTASection />
        
        {/* Блок новостей (карусель) */}
        <NewsCarousel />
      </main>
      
      <Footer />
    </>
  )
}