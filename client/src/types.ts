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
  payment: string;
  date: Date;
  cartItems: CartItem[];
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  adress: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
}

export interface PaymentMethod {
  card: string;
  invoice: string;
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

export interface OrderConfirmation {
  id: number;
  user: User;
  order: Order;
  payment: PaymentMethod;
}
