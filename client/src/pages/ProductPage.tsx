import { useParams } from "react-router-dom";
import "../css/layout.css";
const ProductPage = () => {
  const params = useParams<{ Id: string }>();
  return (
    <div className="container">
      <h1>Product </h1>
    </div>
  );
};

export default ProductPage;
