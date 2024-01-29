import { Product } from "../types";

interface Props {
  item: CartItem;
  handleUpdateQuantity: (productId: string, quantity: number) => void;
  handleRemoveFromCart: (productId: string) => void;
}

interface CartItem {
  product: Product;
  quantity: number;
}
const CartItemCard = (props: Props) => {
  return (
    <div className="cart-item">
      <div className="left">
        <img src={props.item.product.img} alt="" />
      </div>
      <div className="rigth">
        <div className="product">
          <h3>{props.item.product.name}</h3>
          <p>{props.item.product.price.toFixed(2)}</p>
          <p>{props.item.quantity}</p>
        </div>
        <div className="btn">
          <input
            className="input-number"
            type="number"
            value={props.item.quantity}
            onChange={(e) =>
              props.handleUpdateQuantity(
                props.item.product.id,
                parseInt(e.target.value)
              )
            }
          />
          <button
            className="remove-button"
            onClick={() => props.handleRemoveFromCart(props.item.product.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
