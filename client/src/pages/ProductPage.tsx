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

const ProductPage = () => {
  const [value, setValue] = useState<number | null>(4);
  const params = useParams<{ Id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  const products = useSelector((state: RootState) => state.product.products);
  const product = products.find((product) => product.id === params.Id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container-checkout">
      <a
        onClick={() => {
          navigate("/");
        }}
      >
        <ArrowBackIcon></ArrowBackIcon>
      </a>

      <h1>Product {params.Id}</h1>
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
      <img src={product.img} alt="product-image" />
      <button onClick={() => handleAddToCart(product)}>
        Add to cart
        <AddShoppingCartIcon></AddShoppingCartIcon>
      </button>
    </div>
  );
};

export default ProductPage;
