import {Product, Filter, Match, Event} from '../types';

export const products: Product[] = [
  // Напитки
  {
    id: '1',
    name: 'Апельсиновый сок',
    price: 5,
    image:
      'https://anjeny.host.webasyst.com/wa-data/public/shop/products/70/04/470/images/899/899.750x0.jpg',
    category: 'Напитки',
    description: 'Свежевыжатый апельсиновый сок, богатый витаминами C и D.',
  },
  {
    id: '2',
    name: 'Кофе латте',
    price: 4,
    image: 'https://coffeedon.ru/wp-content/uploads/latte-kofe.jpg',
    category: 'Напитки',
    description: 'Ароматный латте с нежной молочной пеной.',
  },
  {
    id: '3',
    name: 'Мохито',
    price: 6,
    image:
      'https://s3.smartofood.ru/pizzasun38_ru/menu/2c7e7470-a742-51e5-8b84-0d6db431bc84.jpg',
    category: 'Напитки',
    description: 'Освежающий мохито с мятой и лаймом.',
  },
  {
    id: '4',
    name: 'Зеленый чай',
    price: 3,
    image:
      'https://avatars.mds.yandex.net/i?id=05ffed9278f587a4f72ee6eb75513e76_l-5246033-images-thumbs&n=13',
    category: 'Напитки',
    description: 'Органический зеленый чай с нежным ароматом.',
  },

  // Закуска
  {
    id: '5',
    name: 'Чесночный багет',
    price: 7,
    image:
      'https://avatars.mds.yandex.net/i?id=731c86f726aa9bd51771990b751d0773_l-5869150-images-thumbs&n=13',
    category: 'Закуска',
    description: 'Хрустящий багет с ароматом свежего чеснока.',
  },
  {
    id: '6',
    name: 'Картофель фри',
    price: 5,
    image:
      'https://distfood.ru/upload/medialibrary/f50/f503b6be98654c6aa35e2e6b904a1a46.jpg',
    category: 'Закуска',
    description: 'Золотистый картофель фри с соусом на выбор.',
  },
  {
    id: '7',
    name: 'Сырные палочки',
    price: 6,
    image: 'https://amenu.ru/images/e.c463d173f101749ec8402d9ee9d84ab7.jpg',
    category: 'Закуска',
    description: 'Тянущиеся сырные палочки с хрустящей корочкой.',
  },
  {
    id: '8',
    name: 'Начос с соусом',
    price: 8,
    image:
      'https://www.edimdoma.ru/data/ckeditor_pictures/19623/content_fotolia_69559624_subscription_xxl.jpg',
    category: 'Закуска',
    description: 'Традиционные начос с пикантным соусом.',
  },

  // Морепродукты
  {
    id: '9',
    name: 'Креветки гриль',
    price: 12,
    image:
      'https://gfgril.ru/upload/iblock/c4d/w2gyuxuhl77dj6tv2n3a1yqkyfaq9s46.jpeg',
    category: 'Морепродукты',
    description: 'Сочные креветки, приготовленные на гриле с чесночным маслом.',
  },
  {
    id: '10',
    name: 'Устрицы',
    price: 15,
    image:
      'https://avatars.mds.yandex.net/i?id=85934e58480c7cb9bfa1ef907d89b4bf_l-5382326-images-thumbs&n=13',
    category: 'Морепродукты',
    description: 'Свежие устрицы с лимонным соком.',
  },
  {
    id: '11',
    name: 'Суши лосось',
    price: 10,
    image:
      'https://yakudza26.ru/wp-content/uploads/2020/11/sushi-s-lososem70-rublej.jpg',
    category: 'Морепродукты',
    description: 'Классические суши с ломтиками свежего лосося.',
  },
  {
    id: '12',
    name: 'Крабовые палочки',
    price: 7,
    image:
      'https://avatars.mds.yandex.net/i?id=1facee5239d71f1a3613ce5519a54e7d_l-10505565-images-thumbs&n=13',
    category: 'Морепродукты',
    description: 'Хрустящие крабовые палочки с соусом тартар.',
  },

  // Десерт
  {
    id: '13',
    name: 'Шоколадный торт',
    price: 9,
    image:
      'https://img.freepik.com/premium-photo/classic-chocolate-cake-recipe_198067-676.jpg',
    category: 'Десерт',
    description: 'Нежный шоколадный торт с кремовой начинкой.',
  },
  {
    id: '14',
    name: 'Тирамису',
    price: 8,
    image:
      'https://i.pinimg.com/736x/47/8c/a9/478ca90c6024f37324bd37225954f69a.jpg',
    category: 'Десерт',
    description: 'Итальянский десерт с сыром маскарпоне и кофейной пропиткой.',
  },
  {
    id: '15',
    name: 'Панкейки с сиропом',
    price: 7,
    image:
      'https://www.chefmarket.ru/blog/wp-content/uploads/2019/01/hotcakes-e1547882786103.jpg',
    category: 'Десерт',
    description: 'Пышные панкейки с кленовым сиропом и ягодами.',
  },
  {
    id: '16',
    name: 'Яблочный пирог',
    price: 6,
    image:
      'https://avatars.mds.yandex.net/i?id=eab4a6887a7f6cfb5e2a6d3a631d0d42_l-5309995-images-thumbs&n=13',
    category: 'Десерт',
    description: 'Традиционный яблочный пирог с корицей.',
  },
];

export const filterData: Filter[] = [
  {
    id: 1,
    name: 'Напитки',
    imgUrl: require('../assets/filter1.png'),
  },
  {
    id: 2,
    name: 'Закуска',
    imgUrl: require('../assets/filter2.png'),
  },
  {
    id: 3,
    name: 'Морепродукты',
    imgUrl: require('../assets/filter3.png'),
  },
  {
    id: 4,
    name: 'Десерт',
    imgUrl: require('../assets/filter4.png'),
  },
];

export const broadcastData: Match[] = [
  {
    league: 'NFL',
    date: '13.06',
    time: '00:50',
    team1: 'Dallas Cowboys',
    team2: 'New York Giants',
  },
  {
    league: 'NBA',
    date: '19.06',
    time: '00:45',
    team1: 'Los Angeles Lakers',
    team2: 'Chicago Bulls',
  },
  {
    league: 'NHL',
    date: '25.06',
    time: '00:00',
    team1: 'Toronto Maple Leafs',
    team2: 'Boston Bruins',
  },
  {
    league: 'MLB',
    date: '30.06',
    time: '00:30',
    team1: 'New York Yankees',
    team2: 'Boston Red Sox',
  },
];

export const eventData: Event[] = [
  {
    id: 1,
    menu: 'Итальянская ночь',
    title: 'Итальянская ночь',
    date: '18 января, 19:00',
    description:
      'Погрузитесь в атмосферу Италии с изысканным ужином и специальным меню от шефа.',
    imageUrl: 'path_to_event1_image',
  },
  {
    id: 2,
    menu: 'Мастер-класс',
    title: 'Кулинарный мастер-класс',
    date: '30 января, 17:00',
    description:
      'Мастер-класс по приготовлению авторских блюд от наших лучших поваров.',
    imageUrl: 'path_to_event2_image',
  },
  {
    id: 3,
    menu: 'Секреты',
    title: 'Секреты морепродуктов',
    date: '5 марта, 18:00',
    description:
      'Узнайте все о свежих морепродуктах и секретах их приготовления.',
    imageUrl: 'path_to_event3_image',
  },
  {
    id: 4,
    menu: 'Футбольный вечер',
    title: 'Футбольный вечер с трансляцией',
    date: '19 июня, 17:00',
    description:
      'Ужин в честь международного футбольного турнира с трансляцией игр.',
    imageUrl: 'path_to_event4_image',
  },
  {
    id: 5,
    menu: 'Счастливые часы',
    title: 'Рекламное сообщение',
    date: 'Рекламное объявление',
    description:
      'Рады пригласить вас в наши рестораны! Узнайте больше о новых акциях и предложениях.',
    imageUrl: 'path_to_advertisement_image',
  },
  {
    id: 6,
    menu: 'Гастрономический тур',
    title: 'Гастрономический тур по Азии',
    date: '25 июня, 17:00',
    description:
      'Путешествуйте по вкусам Азии с нашим эксклюзивным меню и презентацией от шефа.',
    imageUrl: 'path_to_event5_image',
  },
];
