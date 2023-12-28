import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../css/header.css";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/CheckoutPage"}>
        <ShoppingCartIcon></ShoppingCartIcon>
      </Link>

      <p>({cartItems.length})</p>
    </header>
  );
};

export default Header;
