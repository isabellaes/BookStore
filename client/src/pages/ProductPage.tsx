import { useParams } from "react-router-dom";
import "../css/layout.css";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const ProductPage = () => {
  const params = useParams<{ Id: string }>();

  const products = useSelector((state: RootState) => state.product.products);
  const product = products.find((product) => product.id === params.Id);

  console.log(product);

  return (
    <div className="container-checkout">
      <h1>Product {params.Id}</h1>
      <p>{product?.name}</p>
      <p>{product?.price}</p>
    </div>
  );
};

export default ProductPage;
