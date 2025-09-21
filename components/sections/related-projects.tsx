import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FadeIn } from '@/components/ui/fade-in'
import { PROJECT_CATEGORIES, type Project } from '@/types/projects'
import { 
  ArrowRight, 
  Square, 
  Bed, 
  Bath, 
  Layers 
} from 'lucide-react'

interface RelatedProjectsProps {
  projects: Project[]
}

export function RelatedProjects({ projects }: RelatedProjectsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <FadeIn>
      <div>
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Похожие проекты
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Рассмотрите другие варианты в той же категории
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const categoryInfo = PROJECT_CATEGORIES[project.category]
            
            return (
              <FadeIn key={project.id} delay={index * 0.1}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white h-full flex flex-col">
                  {/* Изображение */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                    
                    {/* Бейдж категории */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full bg-${categoryInfo.color}-100 text-${categoryInfo.color}-700`}>
                        {categoryInfo.label}
                      </span>
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Заголовок и цена */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-blue-600">
                          {formatPrice(project.price)}
                        </span>
                        <span className="text-sm text-slate-500">
                          {formatPrice(project.pricePerSqm)}/м²
                        </span>
                      </div>
                    </div>

                    {/* Характеристики */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Square className="w-4 h-4" />
                        <span className="text-sm">{project.area} м²</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Layers className="w-4 h-4" />
                        <span className="text-sm">{project.floors} этаж</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Bed className="w-4 h-4" />
                        <span className="text-sm">{project.bedrooms} спальни</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Bath className="w-4 h-4" />
                        <span className="text-sm">{project.bathrooms} санузла</span>
                      </div>
                    </div>

                    {/* Верхний блок с основной информацией */}
                    <div className="flex-1">
                      {/* Описание */}
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    {/* Нижний блок с кнопкой и информацией */}
                    <div className="mt-6 space-y-3">
                      {/* Кнопка перехода */}
                      <Link href={`/projects/${project.slug}`}>
                        <Button variant="outline" className="w-full group">
                          Подробнее
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>

                      {/* Срок строительства */}
                      <div className="pt-3 border-t border-slate-100">
                        <p className="text-xs text-slate-500">
                          Срок строительства: <span className="font-medium">{project.constructionTime}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            )
          })}
        </div>

        {/* Ссылка на все проекты */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Смотреть все проекты
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </FadeIn>
  )
}

