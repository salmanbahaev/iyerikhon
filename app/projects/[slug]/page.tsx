import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { getProjectBySlug, getRelatedProjects, getAllProjects } from '@/lib/mock-projects'
import { ProjectDetails } from '@/components/sections/project-details'
import { ProjectGallery } from '@/components/sections/project-gallery'
import { ProjectSpecifications } from '@/components/sections/project-specifications'
import { ProjectLayouts } from '@/components/sections/project-layouts'
import { RelatedProjects } from '@/components/sections/related-projects'
import { Container } from '@/components/ui/container'

interface Props {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    return {
      title: 'Проект не найден'
    }
  }

  return {
    title: `${project.title} | Проекты домов | ООО «Иерихон»`,
    description: project.description,
    keywords: project.tags.join(', '),
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    }
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  
  if (!project) {
    notFound()
  }

  const relatedProjects = getRelatedProjects(project)

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
      {/* Галерея и основная информация */}
      <ProjectGallery project={project} />
      
      {/* Детальная информация */}
      <Container className="py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Основная информация */}
          <div className="lg:col-span-2">
            <ProjectDetails project={project} />
            
            {/* Планировки */}
            <div className="mt-12">
              <ProjectLayouts project={project} />
            </div>
          </div>
          
          {/* Боковая панель */}
          <div className="lg:col-span-1">
            <ProjectSpecifications project={project} />
          </div>
        </div>
      </Container>

      {/* Похожие проекты */}
      {relatedProjects.length > 0 && (
        <section className="bg-slate-50 py-16">
          <Container>
            <RelatedProjects projects={relatedProjects} />
          </Container>
        </section>
      )}
    </main>
    <Footer />
    </>
  )
}
