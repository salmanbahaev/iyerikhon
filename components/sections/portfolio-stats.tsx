import { Card } from '@/components/ui/card'
import { FadeIn } from '@/components/ui/fade-in'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { getPortfolioStats } from '@/lib/mock-portfolio'
import { 
  Home, 
  GraduationCap, 
  Trees, 
  Building2,
  Calendar,
  Square
} from 'lucide-react'

export function PortfolioStats() {
  const stats = getPortfolioStats()

  const statsData = [
    {
      icon: Home,
      value: stats.categories.houses,
      label: 'Частных домов',
      color: 'blue'
    },
    {
      icon: GraduationCap,
      value: stats.categories.schools,
      label: 'Школ отремонтировано',
      color: 'green'
    },
    {
      icon: Trees,
      value: Math.round(stats.totalLength / 1000 * 10) / 10,
      label: 'км благоустроено',
      color: 'emerald',
      suffix: ' км'
    },
    {
      icon: Building2,
      value: stats.categories.sberbank,
      label: 'Объектов для Сбербанка',
      color: 'amber'
    },
    {
      icon: Square,
      value: Math.round(stats.totalArea),
      label: 'м² общая площадь',
      color: 'purple',
      suffix: ' м²'
    },
    {
      icon: Calendar,
      value: new Date().getFullYear() - Math.min(...stats.years) + 1,
      label: 'Лет опыта работы',
      color: 'indigo'
    }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6 items-stretch">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon
        return (
          <div key={index} className="h-full">
            <Card className="h-full p-4 lg:p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col justify-between bg-white">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-${stat.color}-100 rounded-xl flex items-center justify-center mx-auto mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-5 h-5 lg:w-6 lg:h-6 text-${stat.color}-600`} />
                </div>
                <div className={`text-xl lg:text-2xl xl:text-3xl font-bold text-${stat.color}-600 mb-2`}>
                  <AnimatedCounter 
                    value={stat.value} 
                    duration={2}
                    suffix={stat.suffix}
                  />
                </div>
              </div>
              <div className="text-xs lg:text-sm text-slate-600 font-medium mt-auto">
                {stat.label}
              </div>
            </Card>
          </div>
        )
      })}
    </div>
  )
}
