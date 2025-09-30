import type { Metadata } from 'next'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Container } from '@/components/ui/container'
import { FadeIn } from '@/components/ui/fade-in'
import { ProjectsGrid } from '@/components/sections/projects-grid'
import { ProjectsFilters } from '@/components/features/projects-filters'
import { ProjectsProvider } from '@/lib/projects-context'

export const metadata: Metadata = {
  title: 'Проекты домов | ООО «Иерихон»',
  description: 'Готовые проекты домов для строительства под ключ. Типовые, комфорт, премиум и люкс категории. Ипотека ВТБ.',
  keywords: 'проекты домов, строительство под ключ, планировки, ипотека ВТБ, типовые проекты',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
        <ProjectsProvider>
          <Container className="py-16 lg:py-24">
            <FadeIn>
              {/* Заголовок страницы */}
              <div className="text-center mb-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                  Готовые проекты домов
                  <span className="block text-blue-600">для строительства под ключ</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                  Выберите идеальный проект из нашего каталога. Все дома можно построить 
                  по выгодной ипотеке ВТБ с минимальным первоначальным взносом.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {/* Фильтры */}
              <ProjectsFilters />
            </FadeIn>

            <FadeIn delay={0.4}>
              {/* Сетка проектов */}
              <ProjectsGrid />
            </FadeIn>
          </Container>
        </ProjectsProvider>
      </main>
      <Footer />
    </>
  )
}
