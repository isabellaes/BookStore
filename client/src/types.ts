export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  img?: string;
  size?: string;
  tags?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  firstName: string;
  lastName: string;
  adress: string;
  zipCode: string;
  city: string;
  phoneNumber: string;
  email: string;
  cardNumber: string;
  date: Date;
  cartItems: CartItem[];
}
//move all interface to one page for cleaner code
