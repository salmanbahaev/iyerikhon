import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: {
    default: 'ООО «Иерихон» - Строительная компания',
    template: '%s | ООО «Иерихон»'
  },
  description: 'Строительная компания ООО «Иерихон» - аккредитованный застройщик ВТБ. Строительство частных домов под ключ, капитальный ремонт, благоустройство территорий.',
  keywords: ['строительство', 'дома под ключ', 'ипотека ВТБ', 'капитальный ремонт', 'благоустройство', 'Иерихон'],
  authors: [{ name: 'Бахаев Салман' }],
  creator: 'ООО «Иерихон»',
  publisher: 'ООО «Иерихон»',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://iyerikhon.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://iyerikhon.ru',
    siteName: 'ООО «Иерихон»',
    title: 'ООО «Иерихон» - Строительная компания',
    description: 'Аккредитованный застройщик ВТБ. Строительство частных домов под ключ, капитальный ремонт, благоустройство территорий.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ООО «Иерихон» - Строительная компания',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ООО «Иерихон» - Строительная компания',
    description: 'Аккредитованный застройщик ВТБ. Строительство частных домов под ключ.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className={inter.className}>
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  )
}
