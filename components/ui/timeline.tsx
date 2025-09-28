import { cn } from "@/lib/utils"

interface TimelineItem {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative border-l border-slate-200 pl-6 space-y-10", className)}>
      {items.map((item, idx) => (
        <li key={idx} className="relative">
          <div className="absolute -left-[9px] top-1.5 h-2.5 w-2.5 rounded-full bg-blue-600" />
          <div className="text-xs uppercase tracking-wider text-slate-500">{item.year}</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">{item.title}</div>
          <p className="mt-2 text-slate-600 leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ol>
  )
}


