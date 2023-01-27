export interface CartState {
  items: any[],
  isLoginByPurchase: boolean
}

export interface OrderDto {
  first_name: string;
  last_name: string;
  address: string;
  country: string;
  city: string;
  zip: string;
  phone: string;
  products: OrderProducts[];
}

export interface OrderProducts {
  product_id: number;
  quantity: number;
  options: string;
}