import { PortfolioProject } from '@/types/portfolio'

export const mockPortfolio: PortfolioProject[] = [
  // ШКОЛЫ 2022
  {
    id: '1',
    slug: 'school-borzoy-2022',
    title: 'МБОУ «СОШ с. Борзой»',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Капитальный ремонт школы в селе Борзой с полным обновлением инфраструктуры и созданием современной образовательной среды.',
    year: 2022,
    area: 1324.4,
    capacity: 310,
    location: 'с. Борзой, Чеченская Республика',
    duration: '6 месяцев',
    client: 'Министерство образования ЧР',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
    ],
    features: [
      'Полная замена кровли',
      'Утепление фасада',
      'Новая система отопления',
      'Современные учебные кабинеты',
      'Спортивный зал',
      'Столовая на 100 мест'
    ],
    specifications: {
      'Общая площадь': '1 324,4 м²',
      'Количество мест': '310 учащихся',
      'Этажность': '2 этажа',
      'Материал стен': 'Железобетон с утеплением',
      'Кровля': 'Металлочерепица'
    },
    achievements: [
      'Работы выполнены точно в срок',
      'Качество работ одобрено Рособрнадзором',
      'Школа получила современное оборудование'
    ],
    tags: ['образование', 'капремонт', 'госзаказ', '2022']
  },
  {
    id: '2', 
    slug: 'school-sary-suy-2022',
    title: 'МБОУ «Сары-Суйская СОШ»',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Комплексный капитальный ремонт сельской школы с модернизацией учебных кабинетов и спортивных сооружений.',
    year: 2022,
    area: 1371.3,
    capacity: 280,
    location: 'с. Сары-Сую, Чеченская Республика',
    duration: '5 месяцев',
    client: 'Министерство образования ЧР',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800&h=600&fit=crop'
    ],
    features: [
      'Замена инженерных сетей',
      'Новые окна и двери',
      'Современное освещение LED',
      'Ремонт спортивного зала',
      'Обновление библиотеки'
    ],
    specifications: {
      'Общая площадь': '1 371,3 м²',
      'Количество мест': '280 учащихся',
      'Этажность': '2 этажа'
    },
    tags: ['образование', 'капремонт', 'сельская школа', '2022']
  },

  // ШКОЛЫ 2023 (самые крупные проекты)
  {
    id: '3',
    slug: 'school-37-grozny-2023',
    title: 'МБОУ СОШ №37 г. Грозного',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Капитальный ремонт одной из крупнейших школ Грозного. Полная модернизация здания с созданием современных условий для 680 учащихся.',
    year: 2023,
    area: 2281.5,
    capacity: 680,
    location: 'г. Грозный, Чеченская Республика',
    duration: '8 месяцев',
    client: 'Управление образования г. Грозного',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop'
    ],
    features: [
      'Полная реконструкция фасада',
      'Новая система вентиляции',
      'Компьютерные классы',
      'Актовый зал на 200 мест',
      'Современная столовая',
      'Медицинский кабинет',
      'Спортивный комплекс'
    ],
    specifications: {
      'Общая площадь': '2 281,5 м²',
      'Количество мест': '680 учащихся',
      'Этажность': '3 этажа',
      'Актовый зал': '200 мест',
      'Столовая': '150 мест'
    },
    achievements: [
      'Крупнейший проект 2023 года',
      'Внедрены современные технологии',
      'Получена высокая оценка от Минобразования'
    ],
    tags: ['образование', 'капремонт', 'крупный проект', '2023', 'грозный']
  },

  // БЛАГОУСТРОЙСТВО 2024-2025
  {
    id: '4',
    slug: 'landscaping-gudermes-2024',
    title: 'Благоустройство Гудермеса',
    category: 'landscaping',
    categoryLabel: 'Благоустройство',
    description: 'Комплексное благоустройство улиц города Гудермес: ремонт дорожного покрытия, установка освещения, озеленение.',
    year: 2024,
    length: 930, // общая длина: 390 + 380 + 160
    location: 'г. Гудермес, Чеченская Республика',
    duration: '4 месяца',
    client: 'Администрация г. Гудермес',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop'
    ],
    features: [
      'Асфальтирование дорог',
      'Установка LED-освещения',
      'Тротуарная плитка',
      'Дренажные системы',
      'Озеленение территорий',
      'Детские площадки'
    ],
    specifications: {
      'пер. Хатаева': '390 м',
      'ул. Дудаева': '380 м', 
      'ул. Абдурахманова': '160 м',
      'Общая длина': '930 м'
    },
    tags: ['благоустройство', 'дороги', 'муниципальный заказ', '2024', 'гудермес']
  },

  {
    id: '5',
    slug: 'landscaping-sernovodsk-2024',
    title: 'Благоустройство Серноводского района',
    category: 'landscaping',
    categoryLabel: 'Благоустройство',
    description: 'Масштабные работы по благоустройству сельских территорий Серноводского района с общей протяженностью более 4 км.',
    year: 2024,
    length: 4300, // 2050 + 1050 + 450 + 300 + 450
    location: 'Серноводский район, Чеченская Республика',
    duration: '6 месяцев',
    client: 'Администрация Серноводского района',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574263867128-a0d67053fce7?w=800&h=600&fit=crop'
    ],
    features: [
      'Ремонт сельских дорог',
      'Водоотводные канавы',
      'Автобусные остановки',
      'Пешеходные дорожки',
      'Парковые зоны'
    ],
    specifications: {
      'ул. Н. Асуева': '2 050 м',
      'ул. Чилаевых': '1 050 м',
      'ул. Зурабова': '450 м',
      'ул. Арсамакова': '300 м',
      '2-й переулок Советский': '450 м',
      'Общая длина': '4 300 м'
    },
    tags: ['благоустройство', 'сельские территории', '2024', 'серноводск']
  },

  // СБЕРБАНК ПРОЕКТЫ
  {
    id: '6',
    slug: 'sberbank-vsp-reconstruction-chr',
    title: 'Реконструкция ВСП №8643/0003 (ЧР)',
    category: 'sberbank',
    categoryLabel: 'Сбербанк',
    description: 'Реконструкция и капитальный ремонт внутреннего структурного подразделения ПАО Сбербанк в Чеченской Республике.',
    year: 2023,
    area: 392.8, // 196.4 * 2 (реконструкция + капремонт)
    location: 'Чеченская Республика',
    duration: '3 месяца',
    client: 'ПАО Сбербанк',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    ],
    features: [
      'Полная реконструкция интерьера',
      'Современные системы безопасности',
      'Энергоэффективное освещение',
      'Новые инженерные сети',
      'Соответствие корпоративным стандартам'
    ],
    specifications: {
      'Реконструкция': '196,4 м²',
      'Капитальный ремонт': '196,4 м²',
      'Общая площадь': '392,8 м²'
    },
    achievements: [
      'Работы выполнены с опережением графика',
      'Полное соответствие стандартам Сбербанка',
      'Сертификация по требованиям банка'
    ],
    tags: ['корпоративный заказ', 'сбербанк', 'реконструкция', '2023']
  },

  {
    id: '7',
    slug: 'sberbank-admin-building-ri',
    title: 'Административное здание Сбербанка (РИ)',
    category: 'sberbank',
    categoryLabel: 'Сбербанк',
    description: 'Текущий ремонт крупного административного здания ПАО Сбербанк в Республике Ингушетия.',
    year: 2023,
    area: 1120,
    location: 'Республика Ингушетия',
    duration: '4 месяца',
    client: 'ПАО Сбербанк',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
    ],
    features: [
      'Обновление фасада',
      'Ремонт кровли',
      'Новые офисные помещения',
      'Модернизация входной группы',
      'Парковочная зона'
    ],
    specifications: {
      'Общая площадь': '1 120 м²',
      'Этажность': '3 этажа',
      'Офисные помещения': '25 кабинетов'
    },
    tags: ['корпоративный заказ', 'сбербанк', 'текущий ремонт', 'ингушетия', '2023']
  },

  // ДОПОЛНИТЕЛЬНЫЕ ШКОЛЫ
  {
    id: '8',
    slug: 'school-chechen-village-2023',
    title: 'МБОУ «СОШ с. Чечен-Аул»',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Капитальный ремонт сельской школы с полным обновлением учебных кабинетов.',
    year: 2023,
    area: 1850,
    capacity: 320,
    location: 'с. Чечен-Аул, Чеченская Республика',
    duration: '6 месяцев',
    client: 'Министерство образования ЧР',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop'
    ],
    features: [
      'Современные учебные кабинеты',
      'Спортивный зал',
      'Новая столовая'
    ],
    specifications: {
      'Общая площадь': '1 850 м²',
      'Количество мест': '320 учащихся'
    },
    tags: ['образование', 'капремонт', '2023']
  },
  {
    id: '9',
    slug: 'school-urus-martan-2023',
    title: 'МБОУ СОШ №4 Урус-Мартан',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Модернизация школы в городе Урус-Мартан.',
    year: 2023,
    area: 2100,
    capacity: 450,
    location: 'г. Урус-Мартан, Чеченская Республика',
    duration: '7 месяцев',
    client: 'Управление образования Урус-Мартановского района',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop'
    ],
    features: [
      'Полная реконструкция',
      'Новое оборудование',
      'Современные технологии'
    ],
    specifications: {
      'Общая площадь': '2 100 м²',
      'Количество мест': '450 учащихся'
    },
    tags: ['образование', 'капремонт', '2023']
  },
  {
    id: '10',
    slug: 'school-shali-2022',
    title: 'МБОУ СОШ №2 г. Шали',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Капитальный ремонт школы в Шали.',
    year: 2022,
    area: 1750,
    capacity: 380,
    location: 'г. Шали, Чеченская Республика',
    duration: '6 месяцев',
    client: 'Управление образования г. Шали',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop'
    ],
    features: [
      'Обновление фасада',
      'Новые инженерные сети'
    ],
    specifications: {
      'Общая площадь': '1 750 м²',
      'Количество мест': '380 учащихся'
    },
    tags: ['образование', 'капремонт', '2022']
  },
  {
    id: '11',
    slug: 'school-achkhoy-martan-2022',
    title: 'МБОУ СОШ Ачхой-Мартан',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Комплексный ремонт школы в Ачхой-Мартане.',
    year: 2022,
    area: 1650,
    capacity: 350,
    location: 'г. Ачхой-Мартан, Чеченская Республика',
    duration: '5 месяцев',
    client: 'Управление образования Ачхой-Мартановского района',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop'
    ],
    features: [
      'Утепление здания',
      'Новые окна'
    ],
    specifications: {
      'Общая площадь': '1 650 м²',
      'Количество мест': '350 учащихся'
    },
    tags: ['образование', 'капремонт', '2022']
  },
  {
    id: '12',
    slug: 'school-argun-2023',
    title: 'МБОУ СОШ №5 г. Аргун',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Модернизация школы в Аргуне.',
    year: 2023,
    area: 1950,
    capacity: 420,
    location: 'г. Аргун, Чеченская Республика',
    duration: '6 месяцев',
    client: 'Управление образования г. Аргун',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=800&h=600&fit=crop'
    ],
    features: [
      'Современное оборудование',
      'Новая кровля'
    ],
    specifications: {
      'Общая площадь': '1 950 м²',
      'Количество мест': '420 учащихся'
    },
    tags: ['образование', 'капремонт', '2023']
  },
  {
    id: '13',
    slug: 'school-kurchaloy-2024',
    title: 'МБОУ СОШ Курчалой',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Капитальный ремонт школы в Курчалое.',
    year: 2024,
    area: 1800,
    capacity: 390,
    location: 'г. Курчалой, Чеченская Республика',
    duration: '6 месяцев',
    client: 'Управление образования Курчалойского района',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop'
    ],
    features: [
      'Энергоэффективность',
      'Современные технологии'
    ],
    specifications: {
      'Общая площадь': '1 800 м²',
      'Количество мест': '390 учащихся'
    },
    tags: ['образование', 'капремонт', '2024']
  },
  {
    id: '14',
    slug: 'school-vedeno-2024',
    title: 'МБОУ СОШ с. Ведено',
    category: 'schools',
    categoryLabel: 'Школы',
    description: 'Ремонт сельской школы в Ведено.',
    year: 2024,
    area: 1400,
    capacity: 280,
    location: 'с. Ведено, Чеченская Республика',
    duration: '5 месяцев',
    client: 'Управление образования Веденского района',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop'
    ],
    features: [
      'Ремонт фасада',
      'Новые коммуникации'
    ],
    specifications: {
      'Общая площадь': '1 400 м²',
      'Количество мест': '280 учащихся'
    },
    tags: ['образование', 'капремонт', '2024']
  },

  // ДОПОЛНИТЕЛЬНЫЕ СБЕРБАНК ПРОЕКТЫ
  {
    id: '15',
    slug: 'sberbank-office-khasavyurt',
    title: 'Офис Сбербанка Хасавюрт',
    category: 'sberbank',
    categoryLabel: 'Сбербанк',
    description: 'Ремонт офиса Сбербанка в Хасавюрте.',
    year: 2024,
    area: 180,
    location: 'г. Хасавюрт, Республика Дагестан',
    duration: '2 месяца',
    client: 'ПАО Сбербанк',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop'
    ],
    features: [
      'Современный дизайн',
      'Новое оборудование'
    ],
    specifications: {
      'Общая площадь': '180 м²'
    },
    tags: ['корпоративный заказ', 'сбербанк', '2024']
  },
  {
    id: '16',
    slug: 'sberbank-branch-nazran',
    title: 'Отделение Сбербанка Назрань',
    category: 'sberbank',
    categoryLabel: 'Сбербанк',
    description: 'Реконструкция отделения в Назрани.',
    year: 2023,
    area: 220,
    location: 'г. Назрань, Республика Ингушетия',
    duration: '3 месяца',
    client: 'ПАО Сбербанк',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop'
    ],
    features: [
      'Полная реконструкция',
      'Современные стандарты'
    ],
    specifications: {
      'Общая площадь': '220 м²'
    },
    tags: ['корпоративный заказ', 'сбербанк', '2023']
  },
  {
    id: '17',
    slug: 'sberbank-office-magas',
    title: 'Офис Сбербанка Магас',
    category: 'sberbank',
    categoryLabel: 'Сбербанк',
    description: 'Текущий ремонт офиса в Магасе.',
    year: 2024,
    area: 150,
    location: 'г. Магас, Республика Ингушетия',
    duration: '2 месяца',
    client: 'ПАО Сбербанк',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop'
    ],
    features: [
      'Обновление интерьера',
      'Новые системы'
    ],
    specifications: {
      'Общая площадь': '150 м²'
    },
    tags: ['корпоративный заказ', 'сбербанк', '2024']
  },

  // ДОПОЛНИТЕЛЬНОЕ БЛАГОУСТРОЙСТВО для 6 км
  {
    id: '18',
    slug: 'landscaping-zushistep-2025',
    title: 'Благоустройство с. Зуши-Степ',
    category: 'landscaping',
    categoryLabel: 'Благоустройство',
    description: 'Дорожные работы в селе Зуши-Степ.',
    year: 2025,
    length: 1000,
    location: 'с. Зуши-Степ, Чеченская Республика',
    duration: '3 месяца',
    client: 'Администрация Грозненского района',
    status: 'in-progress',
    mainImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop'
    ],
    features: [
      'Асфальтирование',
      'Дренаж'
    ],
    specifications: {
      'Общая длина': '1 000 м'
    },
    tags: ['благоустройство', 'дороги', '2025']
  },

  // ЧАСТНЫЕ ДОМА (10+ домов)
  {
    id: '19',
    slug: 'house-scandinavian-style',
    title: 'Дом в скандинавском стиле',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Современный одноэтажный дом в скандинавском стиле с панорамными окнами и террасой.',
    year: 2024,
    area: 120,
    location: 'пос. Горный, Чеченская Республика',
    duration: '5 месяцев',
    client: 'Семья Алиевых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
    ],
    features: [
      'Газобетонные стены',
      'Теплые полы',
      'Панорамные окна',
      'Терраса 20 м²',
      'Автономное отопление',
      'Ландшафтный дизайн'
    ],
    specifications: {
      'Общая площадь': '120 м²',
      'Этажность': '1 этаж',
      'Спальни': '3',
      'Санузлы': '2',
      'Фундамент': 'Монолитная плита',
      'Стены': 'Газобетон D400',
      'Кровля': 'Металлочерепица'
    },
    tags: ['частный дом', 'скандинавский стиль', 'под ключ', '2024']
  },
  {
    id: '20',
    slug: 'house-modern-style',
    title: 'Современный дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Двухэтажный дом в современном стиле.',
    year: 2023,
    area: 180,
    location: 'г. Грозный',
    duration: '6 месяцев',
    client: 'Семья Ахмадовых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'
    ],
    features: [
      'Современный дизайн',
      'Просторные комнаты'
    ],
    specifications: {
      'Общая площадь': '180 м²',
      'Этажность': '2 этажа'
    },
    tags: ['частный дом', 'современный стиль', '2023']
  },
  {
    id: '21',
    slug: 'house-cottage-style',
    title: 'Загородный коттедж',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Коттедж для большой семьи.',
    year: 2023,
    area: 220,
    location: 'пос. Лесной',
    duration: '8 месяцев',
    client: 'Семья Магомедовых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&h=600&fit=crop'
    ],
    features: [
      'Большая терраса',
      'Камин'
    ],
    specifications: {
      'Общая площадь': '220 м²',
      'Этажность': '2 этажа'
    },
    tags: ['частный дом', 'коттедж', '2023']
  },
  {
    id: '22',
    slug: 'house-family-home',
    title: 'Семейный дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Просторный дом для большой семьи.',
    year: 2022,
    area: 160,
    location: 'г. Шали',
    duration: '6 месяцев',
    client: 'Семья Исаевых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop'
    ],
    features: [
      'Просторная кухня',
      'Детские комнаты'
    ],
    specifications: {
      'Общая площадь': '160 м²',
      'Этажность': '2 этажа'
    },
    tags: ['частный дом', 'семейный', '2022']
  },
  {
    id: '23',
    slug: 'house-eco-style',
    title: 'Эко-дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Экологичный дом с энергосберегающими технологиями.',
    year: 2024,
    area: 140,
    location: 'пос. Зеленый',
    duration: '5 месяцев',
    client: 'Семья Хасановых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop'
    ],
    features: [
      'Солнечные панели',
      'Энергосбережение'
    ],
    specifications: {
      'Общая площадь': '140 м²',
      'Этажность': '1 этаж'
    },
    tags: ['частный дом', 'эко', '2024']
  },
  {
    id: '24',
    slug: 'house-classic-style',
    title: 'Классический дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Дом в классическом стиле.',
    year: 2023,
    area: 200,
    location: 'г. Урус-Мартан',
    duration: '7 месяцев',
    client: 'Семья Кадыровых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'
    ],
    features: [
      'Классический фасад',
      'Высокие потолки'
    ],
    specifications: {
      'Общая площадь': '200 м²',
      'Этажность': '2 этажа'
    },
    tags: ['частный дом', 'классический', '2023']
  },
  {
    id: '25',
    slug: 'house-mini-villa',
    title: 'Мини-вилла',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Компактная вилла с бассейном.',
    year: 2024,
    area: 150,
    location: 'г. Аргун',
    duration: '6 месяцев',
    client: 'Семья Дудаевых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
    ],
    features: [
      'Бассейн',
      'Терраса для отдыха'
    ],
    specifications: {
      'Общая площадь': '150 м²',
      'Этажность': '1 этаж'
    },
    tags: ['частный дом', 'вилла', '2024']
  },
  {
    id: '26',
    slug: 'house-luxury-home',
    title: 'Роскошный дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Роскошный дом премиум класса.',
    year: 2022,
    area: 280,
    location: 'г. Грозный',
    duration: '10 месяцев',
    client: 'Семья Джабраиловых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&h=600&fit=crop'
    ],
    features: [
      'Премиум отделка',
      'Мраморные полы'
    ],
    specifications: {
      'Общая площадь': '280 м²',
      'Этажность': '2 этажа'
    },
    tags: ['частный дом', 'люкс', '2022']
  },
  {
    id: '27',
    slug: 'house-country-house',
    title: 'Загородный дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Уютный загородный дом.',
    year: 2023,
    area: 130,
    location: 'с. Центорой',
    duration: '5 месяцев',
    client: 'Семья Эльджуркаевых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop'
    ],
    features: [
      'Уютная атмосфера',
      'Сад'
    ],
    specifications: {
      'Общая площадь': '130 м²',
      'Этажность': '1 этаж'
    },
    tags: ['частный дом', 'загородный', '2023']
  },
  {
    id: '28',
    slug: 'house-smart-home',
    title: 'Умный дом',
    category: 'houses',
    categoryLabel: 'Частные дома',
    description: 'Дом с системой умный дом.',
    year: 2024,
    area: 170,
    location: 'г. Грозный',
    duration: '6 месяцев',
    client: 'Семья Муртазалиевых',
    status: 'completed',
    mainImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop'
    ],
    features: [
      'Система умный дом',
      'Автоматизация'
    ],
    specifications: {
      'Общая площадь': '170 м²',
      'Этажность': '2 этажа'
    },
    tags: ['частный дом', 'умный дом', '2024']
  }
]

// Функции для работы с портфолио
export function getAllPortfolioProjects() {
  return mockPortfolio
}

export function getPortfolioByCategory(category?: string) {
  if (!category) return mockPortfolio
  return mockPortfolio.filter(project => project.category === category)
}

export function getPortfolioBySlug(slug: string) {
  return mockPortfolio.find(project => project.slug === slug)
}

export function getPortfolioYears() {
  const years = [...new Set(mockPortfolio.map(project => project.year))]
  return years.sort((a, b) => b - a)
}

export function getPortfolioStats() {
  const categories = {
    houses: mockPortfolio.filter(p => p.category === 'houses').length,
    schools: mockPortfolio.filter(p => p.category === 'schools').length,
    landscaping: mockPortfolio.filter(p => p.category === 'landscaping').length,
    sberbank: mockPortfolio.filter(p => p.category === 'sberbank').length
  }

  const totalArea = mockPortfolio
    .filter(p => p.area)
    .reduce((sum, p) => sum + (p.area || 0), 0)

  const totalLength = mockPortfolio
    .filter(p => p.length)
    .reduce((sum, p) => sum + (p.length || 0), 0)

  return {
    total: mockPortfolio.length,
    categories,
    totalArea,
    totalLength,
    years: getPortfolioYears()
  }
}
