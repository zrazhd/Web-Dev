import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';
import { ProductService } from './services/services'; 
import { Category , Product } from './models/product.model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductList, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: Category[];
  allProducts: Product[];
  selectedCategoryId: number | null = null;

  constructor(private productService: ProductService){
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  get filteredProducts() {
    if(this.selectedCategoryId === null){
      return this.allProducts;
    }

    return this.allProducts.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number | null) {
    this.selectedCategoryId = id;
  }

  deleteFromGlobal(productId: number){
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }

  title = 'online-store';
}