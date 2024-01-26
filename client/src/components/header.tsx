import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

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
      </div>

      <nav>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/InfoPage"}>About</Link>
          </li>
          <li>
            <Link to={"/InfoPage"}>Faq</Link>
          </li>
          <li>
            <Link to={"/InfoPage"}>Contact</Link>
          </li>

          <li>
            <Link to={"/ShoppingBagPage"}>
              <ShoppingCartIcon></ShoppingCartIcon>({sum})
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
