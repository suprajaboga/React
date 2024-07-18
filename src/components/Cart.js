import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart-summary">
      <h1 className="cart-title">Cart</h1>
      <div className="cart-items">
        <button className="cart-clear" onClick={handleClearCart}>
          Clear Cart
        </button>
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
