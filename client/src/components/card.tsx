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
      <img
        src={product.product.img}
        alt="product-img"
        onClick={() => navigate(`/ProductPage/${product.product.id}`)}
      />
      <p>{product.product.name}</p>
      <p>${product.product.price.toFixed(2)}</p>

      <button onClick={() => product.addToCart(product.product)}>
        <AddShoppingCartIcon></AddShoppingCartIcon>
      </button>
    </div>
  );
}
