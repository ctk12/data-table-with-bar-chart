export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
}

export interface ApiResponse {
  limit: number;
  products: Product[];
  skip: number;
  total: number;
}