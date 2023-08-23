import React from "react";
import "./CartButton.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = () => {
  const navigate = useNavigate();
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const cartButtonHandler = () => {
    navigate("/subtotal");
  };
  return (
    <div>
      <button className="cart_button" onClick={cartButtonHandler}>
        <div className="cartbuttonicon">
          <span className="cartname">Cart &nbsp;{cartQuantity}</span>
        </div>
      </button>
    </div>
  );
};

export default CartButton;
