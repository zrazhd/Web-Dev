import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом',
      price: 451900,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 256GB',
      description: 'Флагманский смартфон Samsung с AI-функциями и процессором Snapdragon 8 Gen 3. AMOLED дисплей 6.2" и тройная камера.',
      price: 289990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=111810000'
    },
    {
      id: 3,
      name: 'MacBook Air M2 256GB',
      description: 'Представляем Apple MacBook Air 13 2022 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность.',
      price: 589990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=111810000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'Иммерсивный игровой опыт в тонком форм-фактореПриготовьтесь встречать новую PlayStation 5 Slim. Она станет улучшей.',
      price: 259990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=111810000'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники с активным шумоподавлением H2 и Adaptive Audio. До 30 часов с зарядным футляром.',
      price: 119990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=111810000'
    },
    {
      id: 6,
      name: 'Samsung 55" QLED 4K Smart TV',
      description: 'Телевизор Samsung QLED с разрешением 4K UHD и процессором Quantum 4K. Smart TV на платформе Tizen.',
      price: 219990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pe9/73690520.jpeg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qled-qe55ls03fauxce-140-sm-chernyi-145890835/?c=111810000'
    },
    {
      id: 7,
      name: 'Apple iPhone 17 Pro 256Gb',
      description: 'это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность. ',
      price: 715017,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 8,
      name: 'Apple Watch Series 9 45mm',
      description: 'Смарт-часы Apple Watch Series 9 с чипом S9 и функцией Double Tap. Always-On дисплей и мониторинг здоровья.',
      price: 159990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/pd7/3360618.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-cherno-sinii-128578467/?c=111810000'
    },
    {
      id: 9,
      name: 'Dyson V15 Detect',
      description: 'Беспроводной пылесос Dyson с лазерным обнаружением пыли и мощностью 240 Вт.',
      price: 249990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=111810000'
    },
    {
      id: 10,
      name: 'Lenovo IdeaPad 5 Pro 16" i5',
      description: 'Ноутбук Lenovo с процессором Intel Core i5-12500H и IPS-дисплеем 2.5K 120Hz. 16 ГБ ОЗУ и SSD 512 ГБ.',
      price: 199990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p11/p2c/13052980.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15irh8-15-6-16-gb-ssd-512-gb-win-11-pro-83em0607rk-131384254/?c=111810000'
    }
  ];
}