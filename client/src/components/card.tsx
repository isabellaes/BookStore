import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
interface props {
  product: Product;
  addToCart: (product: Product, quantity: number) => void;
}

export default function Card(props: props) {
  const [quantity, setQuantity] = useState<number>(1);
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="img">
        <img
          src={props.product.img}
          alt="product-img"
          onClick={() => navigate(`/ProductPage/${props.product.id}`)}
        />
      </div>

      <div className="product-info">
        <h3>{props.product.name}</h3>
        <p>${props.product.price.toFixed(2)}</p>
      </div>

      <div className="add-to-cart-container">
        <input
          type="number"
          value={quantity}
          className="input-number"
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button
          className="add-button"
          onClick={() => props.addToCart(props.product, quantity)}
        >
          <AddShoppingCartIcon></AddShoppingCartIcon>
        </button>
      </div>
    </div>
  );
}
