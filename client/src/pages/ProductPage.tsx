import { useNavigate, useParams } from "react-router-dom";
import "../css/layout.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ProductPage = () => {
  const params = useParams<{ Id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  const products = useSelector((state: RootState) => state.product.products);
  const product = products.find((product) => product.id === params.Id);

  console.log(product);

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
      <p>Product: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <p>Size: {product.size}</p>
      <p>Tags: {product.tags}</p>
      <img src={product.img} alt="product-image" />
      <button onClick={() => handleAddToCart(product)}>
        Add to cart
        <AddShoppingCartIcon></AddShoppingCartIcon>
      </button>
    </div>
  );
};

export default ProductPage;
