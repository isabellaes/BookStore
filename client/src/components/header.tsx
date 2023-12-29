import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../css/header.css";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const numArray: number[] = [];
  cartItems.forEach((item) => {
    numArray.push(item.quantity);
  });

  const sum: number = numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <header>
      <Link to={"/"}>Home</Link>
      <Link to={"/ShoppingBagPage"}>
        <ShoppingCartIcon></ShoppingCartIcon>
      </Link>

      <p>({sum})</p>
    </header>
  );
};

export default Header;
