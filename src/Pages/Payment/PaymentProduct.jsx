import React from "react";
import "./PaymentProduct.css";
const PaymentProduct = ({ image, title, price, quantity }) => {
  return (
    <div className="payment_product">
      <div className="payment_product_container">
        <img src={image} alt={title} height="150" width="150" />
        <div className="payment_product_info">
          <h3 className="payment_product_title">{title}</h3>
          <h4>${price}</h4>
          <h3>Quantity:{quantity}</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentProduct;
