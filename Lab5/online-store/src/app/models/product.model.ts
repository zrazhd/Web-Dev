export interface Category {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  categoryId: number; 
  likes: number;      
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}