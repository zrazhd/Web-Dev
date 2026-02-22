import { Injectable } from '@angular/core';
import { Category, Product } from '../models/product.model'; 

@Injectable({ providedIn: 'root' })
export class ProductService {
  private categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Accessories' },
    { id: 4, name: 'Gaming Consoles' }
  ];

  private products: Product[] = [
    // Категория 1: Смартфоны
    { 
      id: 1, 
      categoryId: 1, 
      likes: 0, 
      name: 'iPhone 17 Pro', 
      price: 797374, 
      rating: 5, 
      description: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000' 
    },
    {
      id: 2,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 15',
      price: 399863,
      rating: 5,
      description: 'Смартфон Apple iPhone 15 128Gb черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 3,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 13',
      price: 295002,
      rating: 4,
      description: 'Смартфон Apple iPhone 13 128Gb черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
    },
    {
      id: 4,
      categoryId: 1,
      likes: 0,
      name: 'Samsung Galaxy A07',
      price: 68666,
      rating: 4,
      description: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p3d/pda/61291251.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pd7/61291246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pd7/61291247.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000'
    },
    {
      id: 5,
      categoryId: 1,
      likes: 0,
      name: 'iPhone 17 Pro Max',
      price: 893438,
      rating: 5,
      description: 'Смартфон Apple iPhone 17 Pro Max 256Gb серебристый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p72/p55/64169948.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/pb0/64475614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8e/p55/64169949.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p16/p58/64169951.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-serebristyi-145468150/?c=750000000'
    },
    // Категория 2: Ноутбуки
    { 
      id: 6, 
      categoryId: 2, 
      likes: 0, 
      name: 'MacBook Air 13 2025', 
      price: 524993, 
      rating: 4.9, 
      description: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS / MW123', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium'
      ], 
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000' 
    },
    {
      id: 7,
      categoryId: 2,
      likes: 0,
      name: 'MacBook Pro 16 2024',
      price: 1324274,
      rating: 4,
      description: 'Ноутбук Apple MacBook Pro 16 2024 16.2" / 24 Гб / SSD 512 Гб / macOS / MX2X3',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p92/pa0/17666425.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2x3-137245155/?c=750000000'
    },
    {
      id: 8,
      categoryId: 2,
      likes: 0,
      name: 'Huawei MateBook X Pro',
      price: 1328888,
      rating: 4,
      description: 'Ноутбук Huawei MateBook X Pro VGHH-X 14.2" / 16 Гб / SSD 1000 Гб / Win 11 / 53014AUX',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p83/p7b/1385490.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p83/p7b/1385490.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/p7b/1385491.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pf3/p7b/1385494.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matebook-x-pro-vghh-x-14-2-16-gb-ssd-1000-gb-win-11-53014aux-128092311/?c=750000000'
    },
    {
      id: 9,
      categoryId: 2,
      likes: 0,
      name: 'Huawei MateBook 14',
      price: 728888,
      rating: 5,
      description: 'Ноутбук Huawei MateBook 14 FlemingH-W7611T 14.2" / 16 Гб / SSD 1000 Гб / Win 11 / 53014ARK',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p93/p22/21715704.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p93/p22/21715704.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pcc/p22/21715706.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p22/21715707.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matebook-14-flemingh-w7611t-14-2-16-gb-ssd-1000-gb-win-11-53014ark-133844984/?c=750000000'
    },
    {
      id: 10,
      categoryId: 2,
      likes: 0,
      name: 'ASUS ProArt P16',
      price: 3190000,
      rating: 0,
      description: 'Ноутбук ASUS ProArt P16 16" / 64 Гб / SSD 2000 Гб / Win 11 Pro / 90NB15K1‑M00180',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pec/p77/56630243.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pec/p77/56630243.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p75/56630239.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p78/56630245.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p5c/p78/56630247.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/asus-proart-p16-16-64-gb-ssd-2000-gb-win-11-pro-90nb15k1-m00180-143543577/?c=750000000'
    },

    // Категория 3: Аксессуары
    {
      id: 11,
      categoryId: 3,
      likes: 0,
      name: 'Apple 20W',
      price: 2864,
      rating: 4.8,
      description: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000'
    },
    {
      id: 12,
      categoryId: 3,
      likes: 0,
      name: 'Xiaomi Power Bank',
      price: 4098,
      rating: 4.2,
      description: 'Внешний аккумулятор Xiaomi Redmi Power Bank 20000 мАч 18 Вт черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h34/h07/63928978014238.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h88/h5b/63928980275230.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h51/63928983191582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hf9/h9f/63929117278238.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/vneshnii-akkumuljator-xiaomi-redmi-power-bank-20000-mach-18-vt-chernyi-100322086/?c=750000000'
    },
    {
      id: 13,
      categoryId: 3,
      likes: 0,
      name: 'Чехол для Apple iPhone 11',
      price: 314,
      rating: 5,
      description: 'Чехол для Apple iPhone 11 рисунок',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p33/pdc/92240573.bin?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p33/pdc/92240573.bin?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p77/p20/8199400.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-11-risunok-130003996/?c=750000000'
    },
    {
      id: 14,
      categoryId: 3,
      likes: 0,
      name: 'Чехол для Apple iPhone 15 Pro',
      price: 596,
      rating: 5,
      description: 'Чехол для Apple iPhone 15 Pro c рисунком',
      image: 'https://basket-16.wbbasket.ru/vol2545/part254534/254534173/images/c516x688/1.webp',
      images: ['https://basket-16.wbbasket.ru/vol2545/part254534/254534173/images/c516x688/1.webp'],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-pro-chernyi-117327113/?c=750000000'
    },
    {
      id: 15,
      categoryId: 3,
      likes: 0,
      name: 'Чехол для Apple iPhone 16 Pro',
      price: 765,
      rating: 4.9,
      description: 'Чехол для Apple iPhone 16 Pro с рисунком',
      image: 'https://basket-17.wbbasket.ru/vol2693/part269352/269352805/images/big/1.webp',
      images: ['https://basket-17.wbbasket.ru/vol2693/part269352/269352805/images/big/1.webp'],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-pro-chernyi-117327113/?c=750000000'
    },
    // Категория 4: Игровые консоли
    {
      id: 16,
      categoryId: 4,
      likes: 0,
      name: 'Sony PlayStation 5 Slim',
      price: 300496,
      rating: 5,
      description: 'Игровая приставка Sony PlayStation 5 Slim',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 17,
      categoryId: 4,
      likes: 0,
      name: 'Valve Steam Deck',
      price: 354816,
      rating: 5,
      description: 'Игровая приставка Valve Steam Deck OLED 512 Гб',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p16/15844428.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pa0/p16/15844428.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p16/15844429.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p19/15844430.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000'
    },
    {
      id: 18,
      categoryId: 4,
      likes: 0,
      name: 'Nintendo Switch 2',
      price: 270000,
      rating: 5,
      description: 'Игровая приставка Nintendo Switch 2',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pf1/p4a/46635546.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pf1/p4a/46635546.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/p4a/46635547.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb9/p4a/46635548.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-2-140718258/?c=750000000'
    },
    {
      id: 19,
      categoryId: 4,
      likes: 0,
      name: 'Nintendo Switch Lite',
      price: 109898,
      rating: 5,
      description: 'Игровая приставка Nintendo Switch Lite серый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he8/hd2/63833068044318.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he8/hd2/63833068044318.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h98/h0b/63833071747102.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/nintendo-switch-lite-seryi-4100377/?c=750000000'
    },
    {
      id: 20,
      categoryId: 4,
      likes: 0,
      name: 'Xbox Series X',
      price: 415022,
      rating: 5,
      description: 'Игровая приставка Xbox Series X 1TB черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/h77/63982144585758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/hce/63982150615070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h02/h0e/63982148255774.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000'
    }






  ];

  getCategories(): Category[] { return this.categories; }
  getProducts(): Product[] { return this.products; }
}