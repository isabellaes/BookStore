import { Product } from "../types";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
interface props {
  product: Product;
  addToCart: (product: Product) => void;
}

export default function MediaCard(product: props) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="img">
        <img
          src={product.product.img}
          alt="product-img"
          onClick={() => navigate(`/ProductPage/${product.product.id}`)}
        />
      </div>
      <div className="product-info">
        <h3>{product.product.name}</h3>
        <p>${product.product.price.toFixed(2)}</p>
      </div>

      <button onClick={() => product.addToCart(product.product)}>
        <AddShoppingCartIcon></AddShoppingCartIcon>
      </button>
    </div>
  );
}
