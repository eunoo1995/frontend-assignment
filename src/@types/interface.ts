export interface Product {
  id?: number;
  title: string;
  price: number;
  color: string[];
  size: string[];
  description: string;
  category: string;
  imageURL: string;
}

export interface CartItem {
  id?: number;
  title: string;
  price: number;
  color: string;
  size: string;
  category: string;
  imageURL: string;
  quantity: number;
}
