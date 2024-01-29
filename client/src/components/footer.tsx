import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h3>Poster Store</h3>
      <Link to="/InfoPage#contact">Contact</Link>
      <Link to="/InfoPage#payment">Payment</Link>
      <Link to="/InfoPage#shipping">Shipping</Link>
      <Link to="/InfoPage#faq">Faq</Link>
    </footer>
  );
};

export default Footer;
