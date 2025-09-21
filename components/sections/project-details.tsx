import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { type Project } from '@/types/projects'
import { 
  CheckCircle, 
  Clock, 
  MapPin, 
  Award,
  Zap
} from 'lucide-react'

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Описание */}
      <FadeIn>
        <Card className="p-6 border-0 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            О проекте
          </h2>
          <p className="text-slate-600 leading-relaxed text-lg">
            {project.description}
          </p>
        </Card>
      </FadeIn>

      {/* Особенности */}
      <FadeIn delay={0.1}>
        <Card className="p-6 border-0 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Особенности проекта
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </Card>
      </FadeIn>

      {/* Преимущества строительства с нами */}
      <FadeIn delay={0.2}>
        <Card className="p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Преимущества строительства с ООО «Иерихон»
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Award className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Аккредитованный застройщик ВТБ
                </h3>
                <p className="text-slate-600 text-sm">
                  Строим дома по выгодной ипотеке с минимальным первоначальным взносом
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Соблюдение сроков
                </h3>
                <p className="text-slate-600 text-sm">
                  Фиксированные сроки строительства с гарантией качества
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-purple-600 rounded-lg">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Современные технологии
                </h3>
                <p className="text-slate-600 text-sm">
                  Используем передовые материалы и технологии строительства
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-orange-600 rounded-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">
                  Авторский надзор
                </h3>
                <p className="text-slate-600 text-sm">
                  Контроль качества на каждом этапе строительства
                </p>
              </div>
            </div>
          </div>
        </Card>
      </FadeIn>

      {/* Теги */}
      <FadeIn delay={0.3}>
        <Card className="p-6 border-0 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Теги проекта
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </Card>
      </FadeIn>
    </div>
  )
}

