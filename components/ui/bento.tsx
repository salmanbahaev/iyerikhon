import { cn } from "@/lib/utils"

interface BentoProps {
  className?: string
  children: React.ReactNode
}

export function BentoGrid({ className, children }: BentoProps) {
  return (
    <div className={cn("grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {children}
    </div>
  )
}

interface BentoItemProps {
  className?: string
  title: string
  description?: string
  icon?: React.ReactNode
}

export function BentoItem({ className, title, description, icon }: BentoItemProps) {
  return (
    <div className={cn("group relative rounded-2xl border border-slate-200/60 bg-white p-6 sm:p-8 transition-colors hover:border-slate-300", className)}>
      {icon && <div className="mb-4 text-slate-700">{icon}</div>}
      <div className="text-lg font-semibold text-slate-900 tracking-tight">{title}</div>
      {description && <p className="mt-2 text-sm text-slate-600 leading-relaxed">{description}</p>}
      <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[0_20px_50px_-20px_rgba(2,6,23,0.2)] transition-shadow" />
    </div>
  )
}



