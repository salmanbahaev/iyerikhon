import * as React from "react"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    company: [
      { name: "О компании", href: "/about" },
      { name: "Партнеры", href: "/partners" },
      { name: "Документы", href: "/documents" },
      { name: "Новости", href: "/news" },
    ],
    services: [
      { name: "Строительство домов", href: "/services" },
      { name: "Проекты домов", href: "/projects" },
      { name: "Ипотека ВТБ", href: "/mortgage" },
      { name: "Портфолио", href: "/portfolio" },
    ],
    contacts: [
      { name: "+7 938 888 88 59", href: "tel:+79388888859" },
      { name: "iyerikhon89@mail.ru", href: "mailto:iyerikhon89@mail.ru" },
    ],
  }

  return (
    <footer className="bg-secondary-900 text-white">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Логотип и описание */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="logo-placeholder w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">И</span>
                </div>
                <div>
                  <div className="font-bold text-lg text-white">
                    ООО «Иерихон»
                  </div>
                  <div className="text-sm text-secondary-300">
                    Строительная компания
                  </div>
                </div>
              </Link>
              
              <p className="text-secondary-300 text-sm mb-6 leading-relaxed">
                Аккредитованный застройщик ВТБ и подрядчик Сбербанка. 
                Строим дома под ключ, выполняем капитальный ремонт и благоустройство территорий.
              </p>

              <div className="flex space-x-4">
                <div className="bg-primary-600 text-white px-3 py-1 rounded text-xs font-medium">
                  Застройщик ВТБ
                </div>
                <div className="bg-success-600 text-white px-3 py-1 rounded text-xs font-medium">
                  Подрядчик Сбербанка
                </div>
              </div>
            </div>

            {/* О компании */}
            <div>
              <h3 className="font-semibold text-white mb-6">О компании</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Услуги */}
            <div>
              <h3 className="font-semibold text-white mb-6">Услуги</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Контакты и CTA */}
            <div>
              <h3 className="font-semibold text-white mb-6">Контакты</h3>
              <ul className="space-y-3 mb-6">
                {navigation.contacts.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-secondary-300 hover:text-white transition-colors text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="space-y-3">
                <Button className="w-full" size="sm">
                  Заказать звонок
                </Button>
                <Button variant="outline" className="w-full border-secondary-600 text-secondary-300 hover:bg-secondary-800" size="sm">
                  Рассчитать стоимость
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя часть футера */}
        <div className="border-t border-secondary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-400 text-sm">
              © {currentYear} ООО «Иерихон». Все права защищены.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-secondary-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Политика конфиденциальности
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
