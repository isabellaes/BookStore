import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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
      <div className="title">
        <h1 onClick={() => navigate("/")}>POSTER STORE</h1>
        <p>For all your creative needs.</p>
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <HomeIcon></HomeIcon>
            </Link>
          </li>
          <li>
            <Link to={"/InfoPage"}>
              <HelpOutlineIcon></HelpOutlineIcon>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to={"/ShoppingBagPage"}>
              <ShoppingCartIcon></ShoppingCartIcon>({sum})
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-messages">
        <p>30% off your order RIGHT NOW! </p>
      </div>
    </header>
  );
};

export default Header;
