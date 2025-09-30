"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()

  // Закрываем мобильное меню при клике вне его
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen &&
          !target.closest('.mobile-menu-container') &&
          !target.closest('.mobile-menu-button')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'hidden' // Предотвращаем прокрутку при открытом меню
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  // Закрываем меню при изменении маршрута
  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

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
                  "text-sm font-medium transition-colors duration-300 relative group",
                  "hover:text-emerald-600",
                  shouldShowBackground ? "text-slate-700" : "text-white/90",
                  pathname === item.href && shouldShowBackground && "text-blue-600 font-semibold",
                  pathname === item.href && !shouldShowBackground && "text-white font-semibold"
                )}
              >
                {item.name}
                {/* Активная подчеркивание */}
                {pathname === item.href && (
                  <div className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-colors",
                    shouldShowBackground ? "bg-blue-600" : "bg-white"
                  )} />
                )}
                {/* Hover подчеркивание */}
                <div className={cn(
                  "absolute -bottom-1 left-0 right-0 h-0.5 rounded-full transition-all duration-300 transform scale-x-0 group-hover:scale-x-100",
                  "bg-emerald-600"
                )} />
              </Link>
            ))}
          </nav>

          {/* Контакты */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+79388888859"
              className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-all duration-300 relative group",
                "hover:text-blue-600",
                shouldShowBackground ? "text-slate-900" : "text-white"
              )}
            >
              <Phone
                className={cn(
                  "w-4 h-4 transition-all duration-300 group-hover:animate-pulse",
                  shouldShowBackground ? "text-slate-600" : "text-blue-200"
                )}
              />
              <span>+7 938 888 88 59</span>
            </a>
          </div>

          {/* Мобильное меню кнопка */}
          <button
            className={cn(
              "mobile-menu-button lg:hidden p-3 rounded-xl transition-all duration-300 relative z-50",
              "hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-emerald-500/10",
              "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2",
              "active:scale-95 shadow-lg",
              isMobileMenuOpen && "bg-gradient-to-br from-blue-500/10 to-emerald-500/10 shadow-blue-500/20"
            )}
            onClick={(e) => {
              e.stopPropagation()
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }}
            aria-label={isMobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center relative">
              {/* Фон с градиентом */}
              <div className={cn(
                "absolute inset-0 rounded-lg transition-all duration-300",
                isMobileMenuOpen && "bg-gradient-to-br from-blue-500/20 to-emerald-500/20"
              )}></div>

              {/* Иконка бургера */}
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className={cn(
                  "block h-0.5 bg-black rounded-full transition-all duration-300 origin-center",
                  "w-6",
                  isMobileMenuOpen && "rotate-45 translate-y-[0.5rem]"
                )}></span>
                <span className={cn(
                  "block h-0.5 bg-black rounded-full transition-all duration-300",
                  "w-6",
                  isMobileMenuOpen && "opacity-0"
                )}></span>
                <span className={cn(
                  "block h-0.5 bg-black rounded-full transition-all duration-300 origin-center",
                  "w-6",
                  isMobileMenuOpen && "-rotate-45 -translate-y-[0.5rem]"
                )}></span>
              </div>
            </div>
          </button>
        </div>

        {/* Мобильное меню */}
        <div
          className={cn(
            "mobile-menu-container lg:hidden absolute top-full left-0 right-0 z-40",
            "transition-all duration-300 ease-in-out",
            isMobileMenuOpen
              ? "opacity-100 visible max-h-screen shadow-xl"
              : "opacity-0 invisible max-h-0"
          )}
          style={{
            transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)'
          }}
        >
          <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 max-h-screen overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <nav className="flex flex-col space-y-2">
                {navigation.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "font-medium transition-all duration-300 px-4 py-3 rounded-lg text-left",
                      "hover:bg-gradient-to-r hover:from-blue-50 hover:to-emerald-50 hover:text-blue-700",
                      "active:bg-blue-100 transform hover:scale-[1.02]",
                      pathname === item.href
                        ? "text-blue-600 bg-gradient-to-r from-blue-50 to-emerald-50 font-semibold border-l-4 border-blue-600 shadow-sm"
                        : "text-slate-700"
                    )}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                      transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                      opacity: isMobileMenuOpen ? 1 : 0
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="relative">
                      {item.name}
                      {pathname === item.href && (
                        <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-blue-500 rounded-full animate-pulse"></span>
                      )}
                    </span>
                  </Link>
                ))}
              </nav>
              <div
                className="mt-6 pt-6 border-t border-slate-200"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${navigation.length * 50}ms` : '0ms',
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
              >
                <div className="text-center">
                  <a
                    href="tel:+79388888859"
                    className="inline-flex items-center justify-center gap-3 font-semibold text-slate-900 hover:text-blue-600 transition-all duration-300 bg-gradient-to-r from-slate-50 to-blue-50 hover:from-blue-50 hover:to-emerald-50 px-4 py-3 rounded-lg w-full shadow-sm hover:shadow-md transform hover:scale-[1.02] active:scale-95"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="relative">
                      <Phone className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition-colors" />
                      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                    <span>+7 938 888 88 59</span>
                    <div className="ml-auto opacity-60">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
