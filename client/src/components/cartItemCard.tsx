import { CartItem } from "../types";

interface Props {
  item: CartItem;
}

const CartItemCard = (props: Props) => {
  return (
    <div className="cart-item">
      <div className="left">
        <img src={props.item.product.img} alt="" />
      </div>
      <div className="rigth">
        <div>
          <h3>{props.item.product.name}</h3>
          <p>Price: ${props.item.product.price.toFixed(2)}</p>
          <p>Quantity: {props.item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
