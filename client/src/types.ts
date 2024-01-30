export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  img?: string;
  size?: string;
  tags?: string[];
  category?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: number;
  date: Date;
  cartItems: CartItem[];
  user: User;
  payment: PaymentMethod;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  adress: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
}

export interface PaymentMethod {
  card?: Card;
  invoice?: Invoice;
}

export interface Card {
  cardnumber: number;
  expirationDate: Date;
  name: string;
}

export interface Invoice {
  id: number;
  user: User;
  amount: number;
  orderNumber: number;
}
