import "../css/layout.css";
import MediaCard from "../components/card";
import { Product } from "../types";
import { addToCart } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.product.products);
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
