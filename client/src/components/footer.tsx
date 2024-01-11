import { Link, useNavigate } from "react-router-dom";
import "../css/layout.scss";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer>
      <p>Poster Store</p>
      <Link to="/InfoPage#contact">Contact</Link>
      <Link to="/InfoPage#payment">Payment</Link>
      <Link to="/InfoPage#shipping">Shipping</Link>
      <Link to="/InfoPage#faq">Faq</Link>
    </footer>
  );
};

export default Footer;
