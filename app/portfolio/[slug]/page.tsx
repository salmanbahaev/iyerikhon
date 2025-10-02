import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getPortfolioBySlug, getAllPortfolioProjects } from '@/lib/mock-portfolio'
import { PortfolioProjectDetails } from '@/components/sections/portfolio-project-details'
import { Container } from '@/components/ui/container'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllPortfolioProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)
  
  if (!project) {
    return {
      title: 'Проект не найден'
    }
  }

  return {
    title: `${project.title} | Портфолио | ООО «Иерихон»`,
    description: project.description,
    keywords: project.tags.join(', '),
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.mainImage],
    }
  }
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getPortfolioBySlug(slug)
  
  if (!project) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Container className="py-16">
          <PortfolioProjectDetails project={project} />
        </Container>
      </main>
      <Footer />
    </>
  )
}
