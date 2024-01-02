import "../css/layout.css";
import MediaCard from "../components/card";
import { Product, products } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch } from "react-redux";
const HomePage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="container">
      {products.flatMap((product) => (
        <MediaCard product={product} addToCart={handleAddToCart}></MediaCard>
      ))}
    </div>
  );
};

export default HomePage;
