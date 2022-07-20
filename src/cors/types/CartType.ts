export interface Product {
  productId: number;
  quantity: number;
  description?: string;
  img?: string;
  price?: number;
  title?: string;
  total?: number;
}

export interface CartData {
  id: number;
  userId: number;
  date: Date;
  products: Product[];
  total?: number;
  __v: number;
}

export interface UpdateTotal {
  productId: number;
  quantity: number;
}
