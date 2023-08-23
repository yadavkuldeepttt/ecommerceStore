import React from "react";
import "./PaymentRight.css";

const PaymentRight = ({
  totalItem,
  allItemsPrice,
  shipping,
  previousPrice,
  totalPriceAfterAddedShippingCost,
  paymentOrderSubmitHandler,
  promotionComponentShow,
}) => {
  return (
    <div className="payment_right">
      <div className="payment_right_info">
        <h3>Order Summary</h3>
        <div>
          <p>Items ({totalItem}):</p>
          <p>${allItemsPrice}</p>
        </div>
        <div>
          <p>Shipping:</p>
          <p>{shipping ? " $0.00" : " $15.75"}</p>
        </div>
        {promotionComponentShow && (
          <div className="payment_right_info_discount">
            <p>Discount:</p>
            <p> $15</p>
          </div>
        )}
        <div className="payment_right_totalPrice  ">
          {promotionComponentShow && (
            <div>
              {" "}
              <h6>Price</h6> <h6>${previousPrice}</h6>
            </div>
          )}
          <div className="payment__right__finalPrice">
            <h5 className="payment__right__finalPrice__p">Order total:</h5>
            <h5 className="payment__right__finalPrice__p">
              USD ${totalPriceAfterAddedShippingCost.toFixed(2)}
            </h5>
          </div>
        </div>
      </div>
      <div className="payment_right_order">
        <button onClick={paymentOrderSubmitHandler}>Place your order</button>
      </div>
    </div>
  );
};

export default PaymentRight;
