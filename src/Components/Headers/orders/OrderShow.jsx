import React from "react";
import "./OrderShow.css";

const OrderShow = ({ image, price, quantity, title, totalPrice }) => {
  return (
    <div className="orderShow">
      <div className="orderShow__container">
        <div className="orderShow__details">
          <div className="orderShow__info">
            <img src={image} alt={title} height="150" width="150" />
            <div className="orderShow__detail">
              <h2>{title}</h2>
              <h3>${price.toFixed(2)}</h3>
              <h3>Quantity: {quantity}</h3>
              <h3>Total price: ${totalPrice.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderShow;
