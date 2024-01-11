import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "../css/layout.scss";

const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const numArray: number[] = [];
  cartItems.forEach((item) => {
    numArray.push(item.quantity);
  });
  const navigate = useNavigate();

  const sum: number = numArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return (
    <header>
      <h1 onClick={() => navigate("/")}>POSTER STORE</h1>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Help and Faq</li>
          <li>Contact</li>
        </ul>
      </nav>
      <Link to={"/ShoppingBagPage"}>
        <ShoppingCartIcon></ShoppingCartIcon>({sum})
      </Link>
    </header>
  );
};

export default Header;
