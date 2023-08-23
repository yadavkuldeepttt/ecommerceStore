import React, { useState } from "react";
import "./Payment.css";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useStateValue } from "../../Store/AuthContext/authContext";
import { uiActions } from "../../Store/uiSlice";
import { cartActions } from "../../Store/cartSlice";
import PaymentProduct from "./PaymentProduct";
import PaymentRight from "./PaymentRight";
import { db } from "../../firebase";
// const Firebase_Domain = "https://yadavcart-c8410.firebaseio.com";

const Payment = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItem = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const [promotion, setPromotion] = useState("");
  const [promotionOnce, setPromotionOnce] = useState(true);
  const [promotionComponentShow, setPromotionComponentShow] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [postalCodeInput, setPostalCodeInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const [shipping, setShipping] = useState("standard");
  const [formValidity, setFormValidity] = useState({
    name: true,
    address: true,
    phone: true,
    postalCode: true,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [{ user }] = useStateValue();

  let shippingCount;
  if (shipping === "standard") {
    shippingCount = 0;
  } else {
    shippingCount = 15.79;
  }

  let promotionDiscount;
  if (promotionComponentShow === false) {
    promotionDiscount = 0;
  } else {
    promotionDiscount = 20;
  }

  if (location.pathname === "/subtotal/payment") {
    dispatch(uiActions.openPayment());
  }

  const promotionPaymentHandler = (event) => {
    event.preventDefault();

    if (promotionOnce && promotion === "discount15") {
      dispatch(cartActions.promotionDiscount());
      setPromotionComponentShow(true);
      setPromotionOnce(false);
    }

    setPromotion("");
  };

  const currentDate = new Date();
  let cargoDate = +currentDate.getDate() + 5;
  const earlyCargoDate = +currentDate.getDate() + 3;

  const productPostDate = currentDate.toLocaleString("default", {
    month: "2-digit",
    year: "numeric",
    day: "numeric",
  });

  let month = currentDate.toLocaleString("default", { month: "long" });
  if (cargoDate === 32) {
    cargoDate = 1;
    month = "January";
  } else if (cargoDate === 33) {
    cargoDate = 2;
    month = "January";
  } else if (cargoDate === 34) {
    cargoDate = 3;
    month = "January";
  } else if (cargoDate === 35) {
    cargoDate = 4;
    month = "January";
  } else if (cargoDate === 36) {
    cargoDate = 5;
    month = "January";
  }

  const getCargoTime = month + " " + cargoDate;
  const getEarlyCargoDate = month + " " + earlyCargoDate;

  let previousPrice;
  let getSelectedTime;
  let totalPriceAfterAddedShippingCost = +totalPrice.toFixed(2);

  if (shipping === "standard") {
    getSelectedTime = getCargoTime;
    previousPrice = (totalPrice + 15).toFixed(2);
  } else if (shipping === "priority") {
    getSelectedTime = getEarlyCargoDate;
    previousPrice = (totalPrice + 30.75).toFixed(2);
    totalPriceAfterAddedShippingCost = +totalPrice.toFixed(2) + 15.75;
  }
  let allItemsPrice;
  if (promotionComponentShow === true) {
    allItemsPrice = (totalPrice + 15).toFixed(2);
  } else {
    allItemsPrice = totalPrice.toFixed(2);
  }

  const isEmpty = (value) => value.trim() === "";

  const paymentOrderSubmitHandler = async (event) => {
    event.preventDefault();

    const enteredName = !isEmpty(nameInput);
    const enteredAddress = !isEmpty(addressInput);
    const enteredPhone = !isEmpty(phoneInput);
    const enteredPostalCode = !isEmpty(postalCodeInput);

    const formIsValid =
      enteredName && enteredAddress && enteredPhone && enteredPostalCode;

    setFormValidity({
      name: enteredName,
      address: enteredAddress,
      phone: enteredPhone,
      postalCode: enteredPostalCode,
    });

    if (formIsValid) {
      if (shipping === "priority") {
        dispatch(cartActions.addShippingCost());
      }
      dispatch(uiActions.openSpinner());

      try {
        const docRef = await db.collection("orders").add(information);
        console.log("Order successfully added with ID: ", docRef.id);

        dispatch(cartActions.cleanData());
        dispatch(uiActions.closeSpinner());
        navigate("/", { replace: true });
      } catch (error) {
        console.error("Error adding order: ", error);
        // Handle error as needed
      }
    }
  };

  const information = {
    email: user.email,
    items: cartItems,
    totalItem: totalItem,
    subtotal: totalPrice,
    totalPrice: totalPriceAfterAddedShippingCost,
    productPostDate: productPostDate,
    shippingInfo: {
      name: nameInput,
      address: addressInput,
      postalCode: postalCodeInput,
      phone: phoneInput,
      shippingType: shipping,
      shippingCount: shippingCount,
    },
    promotion: promotionDiscount,
  };

  return (
    <div>
      <form className="payment" onSubmit={paymentOrderSubmitHandler}>
        <div className="payment_container">
          <div className="payment_left">
            <h3 className="payment_left_title">Review Your Order</h3>
            <div className="payment_left_info">
              <div className="payment_shipping_address">
                <h4>Shipping address</h4>
                <section className="payment_form">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={formValidity.name ? "" : "payment__invalid"}
                      required
                      value={nameInput}
                      onChange={(event) => setNameInput(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="address">Address</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className={formValidity.address ? "" : "payment__invalid"}
                      required
                      value={addressInput}
                      onChange={(event) => setAddressInput(event.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="postal">Postal Code</label>
                    <input
                      type="number"
                      id="postal"
                      name="postal"
                      className={`payment__form__hiddenArrow  ${
                        formValidity.postalCode ? "" : "payment__invalid"
                      }`}
                      required
                      value={postalCodeInput}
                      onChange={(event) =>
                        setPostalCodeInput(event.target.value)
                      }
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      className={`payment__form__hiddenArrow  ${
                        formValidity.phone ? "" : "payment__invalid"
                      }`}
                      required
                      value={phoneInput}
                      onChange={(event) => setPhoneInput(event.target.value)}
                    />
                  </div>
                </section>
              </div>
              <div className="payment_promotion">
                <div className="payment_promotion_info">
                  <p>promotion code</p>
                  <input
                    type="text"
                    name="promotion"
                    id="promotion"
                    value={promotion}
                    onChange={(event) => setPromotion(event.target.value)}
                  />
                  <button
                    className="addpromotion"
                    onClick={promotionPaymentHandler}>
                    Add Promotion
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="payment_product">
            <div>
              <h4 className="payment_product_delivery">
                Delivery {getSelectedTime}
              </h4>
              <div>
                {cartItems.map((item) => (
                  <PaymentProduct
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
              </div>
            </div>
            <div className="payment_delivery_option">
              <h4>Choose a Delivery Option:</h4>
              <div className="payment_delivery_form">
                <div>
                  <input
                    type="radio"
                    id="standard"
                    name="shippingType"
                    value="standard"
                    checked={shipping === "standard"}
                    onChange={(event) => setShipping(event.target.value)}
                  />
                  <label htmlFor="standard">
                    Monday,{getCargoTime} <span>$0.00 Standard Shipping</span>
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="priority"
                    name="shippingType"
                    value="priority"
                    checked={shipping === "priority"}
                    onChange={(event) => setShipping(event.target.value)}
                  />
                  <label htmlFor="priority">
                    Friday,{getEarlyCargoDate}{" "}
                    <span>$15.75 Priority Shipping</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* payment right */}

        <PaymentRight
          paymentOrderSubmitHandler={paymentOrderSubmitHandler}
          totalItem={totalItem}
          allItemsPrice={allItemsPrice}
          previousPrice={previousPrice}
          shipping={shipping}
          totalPriceAfterAddedShippingCost={totalPriceAfterAddedShippingCost}
          promotionComponentShow={promotionComponentShow}
        />
      </form>
    </div>
  );
};

export default Payment;
