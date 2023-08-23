import React from "react";
import "./Cart.css";
import CartInfo from "./CartInfo";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStateValue } from "../../../Store/AuthContext/authContext";
import { uiActions } from "../../../Store/uiSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [{ user }, dispatchContext] = useStateValue();

  if (location.pathname === "/subtotal") {
    dispatch(uiActions.closePayment());
  }

  const formedTotalPrice = totalPrice.toFixed(2);

  const checkoutButtonHandler = () => {
    if (!user) {
      navigate("/login");
    } else if (cartQuantity === 0) {
      alert("Cart is Empty! Add Items to cart");
    } else {
      navigate("/subtotal/payment");
    }
  };

  return (
    <div className="cart">
      <div className="cart__container">
        <div className="cart__left">
          {cartItems.length > 0 && (
            <p className="cart__left__title">Your Products</p>
          )}
          {cartItems.length == 0 && <p>Your cart is empty</p>}
          {cartItems.map((item) => (
            <CartInfo
              key={item.id}
              item={{
                id: item.id,
                title: item.title,
                quantity: item.quantity,
                total: item.totalPrice,
                price: item.price,
                image: item.image,
              }}
            />
          ))}
          <h2 className="cart__subtotal">
            Subtotal ({cartQuantity} items):${+formedTotalPrice}
          </h2>
        </div>
        <div className="cart__check">
          <h3>
            Subtotal ({cartQuantity} items) :${+formedTotalPrice}
          </h3>
          <button onClick={checkoutButtonHandler} className="checkout__btn">
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
