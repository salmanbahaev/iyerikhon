import { Project } from '@/types/projects'

export const mockProjects: Project[] = [
  {
    id: '1',
    slug: 'dom-tipovoiy-scandinavia',
    title: 'Скандинавия',
    category: 'typical',
    categoryLabel: 'Типовой',
    area: 95,
    floors: 1,
    bedrooms: 2,
    bathrooms: 1,
    price: 2850000,
    pricePerSqm: 30000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    description: 'Уютный одноэтажный дом в скандинавском стиле с современной планировкой и панорамными окнами.',
    features: [
      'Панорамные окна в гостиной',
      'Совмещенная кухня-столовая',
      'Гардеробная в спальне',
      'Терраса 15 м²',
      'Утепленный фундамент',
      'Готовность под отделку'
    ],
    specifications: {
      foundation: 'Монолитная плита 300мм с утеплением',
      walls: 'Газобетон D400 375мм + облицовочный кирпич',
      roof: 'Металлочерепица, утепление 200мм',
      insulation: 'Минеральная вата, пароизоляция',
      finishing: 'Под чистовую отделку',
      heating: 'Газовое отопление, теплые полы',
      electrical: 'Разводка электрики, щиток',
      plumbing: 'Водопровод, канализация, септик'
    },
    layout: [
      {
        floor: 1,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
        rooms: [
          { name: 'Гостиная-кухня', area: 35.2 },
          { name: 'Спальня', area: 16.8 },
          { name: 'Детская', area: 12.4 },
          { name: 'Санузел', area: 4.2 },
          { name: 'Прихожая', area: 8.6 },
          { name: 'Терраса', area: 15.0 }
        ]
      }
    ],
    constructionTime: '4-5 месяцев',
    popularity: 95,
    isPopular: true,
    isNew: false,
    tags: ['ипотека ВТБ', 'скандинавский стиль', 'терраса', 'теплые полы']
  },
  {
    id: '2', 
    slug: 'dom-comfort-family-house',
    title: 'Family House',
    category: 'comfort',
    categoryLabel: 'Комфорт',
    area: 145,
    floors: 2,
    bedrooms: 3,
    bathrooms: 2,
    price: 4350000,
    pricePerSqm: 30000,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
    ],
    description: 'Двухэтажный дом для большой семьи с продуманной планировкой и современными решениями.',
    features: [
      'Просторная гостиная 25 м²',
      'Кабинет на первом этаже',
      'Мастер-спальня с гардеробной',
      'Два санузла',
      'Балкон и терраса',
      'Котельная и кладовая'
    ],
    specifications: {
      foundation: 'Ленточный фундамент с подвалом',
      walls: 'Керамический блок + утеплитель + штукатурка',
      roof: 'Композитная черепица, мансардные окна',
      insulation: 'Базальтовая вата 150мм',
      finishing: 'Под чистовую отделку',
      heating: 'Газовый котел, радиаторы, теплые полы',
      electrical: 'Трехфазный ввод, автоматика',
      plumbing: 'Полная разводка, бойлер 200л'
    },
    layout: [
      {
        floor: 1,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
        rooms: [
          { name: 'Гостиная', area: 25.4 },
          { name: 'Кухня-столовая', area: 18.2 },
          { name: 'Кабинет', area: 10.5 },
          { name: 'Санузел', area: 3.8 },
          { name: 'Прихожая', area: 12.1 },
          { name: 'Котельная', area: 6.0 },
          { name: 'Терраса', area: 12.0 }
        ]
      },
      {
        floor: 2,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop', 
        rooms: [
          { name: 'Мастер-спальня', area: 20.8 },
          { name: 'Детская 1', area: 14.2 },
          { name: 'Детская 2', area: 12.6 },
          { name: 'Санузел', area: 6.4 },
          { name: 'Холл', area: 8.2 },
          { name: 'Гардеробная', area: 4.8 },
          { name: 'Балкон', area: 6.0 }
        ]
      }
    ],
    constructionTime: '6-7 месяцев',
    popularity: 88,
    isPopular: true,
    isNew: true,
    tags: ['ипотека ВТБ', '2 этажа', 'кабинет', 'мастер-спальня', 'балкон']
  },
  {
    id: '3',
    slug: 'dom-premium-modern-villa',
    title: 'Modern Villa',
    category: 'premium',
    categoryLabel: 'Премиум', 
    area: 220,
    floors: 2,
    bedrooms: 4,
    bathrooms: 3,
    price: 6600000,
    pricePerSqm: 30000,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    description: 'Элегантная двухэтажная вилла в современном стиле с панорамным остеклением и террасами.',
    features: [
      'Панорамное остекление',
      'Открытая планировка',
      'Мастер-спальня с ванной',
      'Гостевая спальня',
      'SPA-зона с сауной',
      'Двойной гараж',
      'Терраса на крыше'
    ],
    specifications: {
      foundation: 'УШП с интегрированными коммуникациями',
      walls: 'Газобетон D300 + декоративный фасад',
      roof: 'Плоская эксплуатируемая кровля',
      insulation: 'Пенополистирол XPS 200мм',
      finishing: 'Дизайнерская отделка включена',
      heating: 'Тепловой насос, теплые полы, фанкойлы',
      electrical: 'Умный дом, LED-освещение',
      plumbing: 'Система рекуперации, фильтрация воды'
    },
    layout: [
      {
        floor: 1,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
        rooms: [
          { name: 'Гостиная-кухня', area: 45.6 },
          { name: 'Столовая', area: 18.4 },
          { name: 'Кабинет', area: 15.2 },
          { name: 'Гостевая спальня', area: 16.8 },
          { name: 'Санузел', area: 8.2 },
          { name: 'Прихожая', area: 14.6 },
          { name: 'SPA-зона', area: 12.0 },
          { name: 'Гараж', area: 36.0 }
        ]
      },
      {
        floor: 2,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
        rooms: [
          { name: 'Мастер-спальня', area: 28.4 },
          { name: 'Детская 1', area: 16.8 },
          { name: 'Детская 2', area: 14.2 },
          { name: 'Ванная мастер', area: 12.6 },
          { name: 'Санузел', area: 6.4 },
          { name: 'Холл', area: 12.8 },
          { name: 'Гардеробная', area: 8.2 },
          { name: 'Терраса на крыше', area: 25.0 }
        ]
      }
    ],
    constructionTime: '8-10 месяцев',
    popularity: 75,
    isPopular: false,
    isNew: true,
    tags: ['ипотека ВТБ', 'современный стиль', 'панорамные окна', 'SPA', 'гараж', 'умный дом']
  },
  {
    id: '4',
    slug: 'dom-luxury-royal-estate', 
    title: 'Royal Estate',
    category: 'luxury',
    categoryLabel: 'Люкс',
    area: 320,
    floors: 2,
    bedrooms: 5,
    bathrooms: 4,
    price: 9600000,
    pricePerSqm: 30000,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600563438938-a42226c58e2d?w=800&h=600&fit=crop'
    ],
    description: 'Роскошный особняк для тех, кто ценит простор, комфорт и престиж. Классическая архитектура с современными технологиями.',
    features: [
      'Парадная гостиная 40 м²',
      'Библиотека-кабинет',
      'Винный погреб',
      'Мастер-спальня с балконом',
      'Гостевая зона',
      'Сауна и хамам',
      'Трехместный гараж',
      'Ландшафтная терраса'
    ],
    specifications: {
      foundation: 'Монолитный железобетон с цокольным этажом',
      walls: 'Керамический блок + натуральный камень',
      roof: 'Натуральная черепица, медные водостоки',
      insulation: 'Пенополиуретан 250мм',
      finishing: 'Премиальная отделка под ключ',
      heating: 'Геотермальная система + камин',
      electrical: 'Система умный дом Schneider Electric',
      plumbing: 'Grohe, Hansgrohe, рекуперация, бассейн'
    },
    layout: [
      {
        floor: 1,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
        rooms: [
          { name: 'Парадная гостиная', area: 42.8 },
          { name: 'Кухня-столовая', area: 28.6 },
          { name: 'Библиотека', area: 20.4 },
          { name: 'Гостевая спальня', area: 18.2 },
          { name: 'Санузел гостевой', area: 6.8 },
          { name: 'Холл-прихожая', area: 24.2 },
          { name: 'Котельная', area: 12.0 },
          { name: 'Винный погреб', area: 8.6 },
          { name: 'Гараж', area: 54.0 }
        ]
      },
      {
        floor: 2,
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=400&fit=crop',
        rooms: [
          { name: 'Мастер-спальня', area: 32.4 },
          { name: 'Детская 1', area: 18.8 },
          { name: 'Детская 2', area: 16.4 },
          { name: 'Детская 3', area: 14.2 },
          { name: 'Ванная мастер', area: 16.6 },
          { name: 'Санузел', area: 8.4 },
          { name: 'Холл второго этажа', area: 18.2 },
          { name: 'Гардеробная', area: 12.8 },
          { name: 'SPA-комплекс', area: 24.0 },
          { name: 'Балкон мастер', area: 8.0 },
          { name: 'Терраса', area: 35.0 }
        ]
      }
    ],
    constructionTime: '12-15 месяцев',
    popularity: 60,
    isPopular: false,
    isNew: false,
    tags: ['ипотека ВТБ', 'люкс', 'винный погреб', 'SPA', 'библиотека', 'большой гараж']
  }
]

// Функция для получения всех проектов
export function getAllProjects() {
  return mockProjects
}

// Функция для получения проектов с фильтрацией
export function getFilteredProjects(filters?: Partial<Project>) {
  let filteredProjects = [...mockProjects]

  if (filters?.category) {
    filteredProjects = filteredProjects.filter(p => p.category === filters.category)
  }

  return filteredProjects
}

// Функция для получения проекта по slug
export function getProjectBySlug(slug: string): Project | undefined {
  return mockProjects.find(project => project.slug === slug)
}

// Функция для получения связанных проектов
export function getRelatedProjects(currentProject: Project, limit = 3): Project[] {
  return mockProjects
    .filter(project => 
      project.id !== currentProject.id && 
      project.category === currentProject.category
    )
    .slice(0, limit)
}
