import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() products: Product[] = [];
  @Output() productRemoved = new EventEmitter<number>();

  handleRemove(productId: number){
    this.products = this.products.filter(p => p.id !== productId);

    this.productRemoved.emit(productId);
  }

  reloadPage(){
    window.location.reload();
  }
}