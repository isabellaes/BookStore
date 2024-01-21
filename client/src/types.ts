export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
  img?: string;
  size?: string;
  tags?: string[];
}

//move all interface to one page for cleaner code
