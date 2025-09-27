"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Определяем, нужно ли показывать фон хедера по умолчанию на этой странице
  const isLightPage = pathname === '/projects' || pathname?.startsWith('/projects/') || pathname === '/portfolio' || pathname?.startsWith('/portfolio/')
  
  // Для светлых страниц хедер всегда имеет фон, для темных - только при скролле
  const shouldShowBackground = isLightPage || isScrolled

  const navigation = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Проекты", href: "/projects" },
    { name: "Ипотека ВТБ", href: "/mortgage" },
    { name: "Портфолио", href: "/portfolio" },
    { name: "О компании", href: "/about" },
    { name: "Контакты", href: "/contacts" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md",
        shouldShowBackground
          ? "bg-white/95 shadow-lg border-b border-slate-200/50"
          : "bg-black/10 shadow-sm"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Логотип */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="logo-placeholder w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">И</span>
            </div>
            <div className="hidden sm:block">
              <div className={cn(
                "font-bold text-lg transition-colors",
                shouldShowBackground ? "text-slate-900" : "text-white"
              )}>
                ООО «Иерихон»
              </div>
              <div className={cn(
                "text-xs transition-colors",
                shouldShowBackground ? "text-slate-600" : "text-white/80"
              )}>
                Аккредитованный застройщик ВТБ
              </div>
            </div>
          </Link>

          {/* Навигация для десктопа */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-blue-600 relative",
                  shouldShowBackground ? "text-slate-700" : "text-white/90",
                  pathname === item.href && shouldShowBackground && "text-blue-600 font-semibold",
                  pathname === item.href && !shouldShowBackground && "text-white font-semibold"
                )}
              >
                {item.name}
                {pathname === item.href && (
                  <div className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors",
                    shouldShowBackground ? "bg-blue-600" : "bg-white"
                  )} />
                )}
              </Link>
            ))}
          </nav>

          {/* Контакты */}
          <div className="hidden md:flex items-center">
            <div className={cn(
              "text-sm font-semibold transition-colors",
              shouldShowBackground ? "text-slate-900" : "text-white"
            )}>
              +7 938 888 88 59
            </div>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={cn(
                "block w-6 h-0.5 transition-all",
                shouldShowBackground ? "bg-slate-900" : "bg-white",
                isMobileMenuOpen && "rotate-45 translate-y-1.5"
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 transition-all",
                shouldShowBackground ? "bg-slate-900" : "bg-white",
                isMobileMenuOpen && "opacity-0"
              )}></span>
              <span className={cn(
                "block w-6 h-0.5 transition-all",
                shouldShowBackground ? "bg-slate-900" : "bg-white",
                isMobileMenuOpen && "-rotate-45 -translate-y-1.5"
              )}></span>
            </div>
          </button>
        </div>

        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "font-medium transition-colors px-4 py-2 rounded-lg",
                    pathname === item.href 
                      ? "text-blue-600 bg-blue-50 font-semibold" 
                      : "text-slate-700 hover:text-blue-600 hover:bg-slate-50"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <div className="text-center">
                <div className="font-semibold text-slate-900">
                  +7 938 888 88 59
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
