import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
  @Input() product!: Product;

  currentImageIndex = 0;

 nextImage() {
  const images = this.getImages();

  if (images.length > 1) {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % images.length;
    }
  }

  prevImage() {
    const images = this.getImages();

    if (images.length > 1) {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + images.length) % images.length;
    }
  }

  getImages() : string[] {
    if (!this.product.images || this.product.images.length === 0) {
      return [this.product.image];
    }

    return this.product.images;
  }

  getStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.floor(rating)).fill(0);
  }

  shareOnWhatsApp() {
    const url = `https://wa.me/?text=${encodeURIComponent('Чекай этот продукт бро: ' + this.product.link)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram() {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }
}