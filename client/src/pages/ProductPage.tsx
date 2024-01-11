import { useNavigate, useParams } from "react-router-dom";
import "../css/layout.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Rating from "@mui/material/Rating";
import { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

interface CartItem {
  product: Product;
  quantity: number;
}

const ProductPage = () => {
  const [value, setValue] = useState<number | null>(4);
  const [quantity, setQuantity] = useState<number>(1);
  const params = useParams<{ Id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      product: product,
      quantity: quantity,
    };
    dispatch(addToCart(cartItem));
  };
  const products = useSelector((state: RootState) => state.product.products);
  const product = products.find((product) => product.id === params.Id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container-product">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit">
          Product
        </Link>
      </Breadcrumbs>
      <div className="container">
        <div className="product">
          <img className="img-product" src={product.img} alt="product-image" />
        </div>
        <div className="product">
          <h1>{product.name}</h1>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <p>Product: {product.name}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>Description: {product.description}</p>
          <p>Size: {product.size}</p>
          <p>Tags: {product.tags?.join(", ")}</p>
          <div className="add-to-cart-container">
            <input
              type="number"
              value={quantity}
              className="input-number"
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button
              className="add-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to cart <AddShoppingCartIcon></AddShoppingCartIcon>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
