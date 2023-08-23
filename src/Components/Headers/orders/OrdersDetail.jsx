import React, { useEffect } from "react";
import "./OrdersDetail.css";
import { useStateValue } from "../../../Store/AuthContext/authContext";
import { useDispatch, useSelector } from "react-redux";
import { orderActions } from "../../../Store/orderSlice";
import OrderDetail from "./OrderDetail";
import { db } from "../../../firebase";

const OrdersDetail = () => {
  const [{ user }] = useStateValue();
  const dispatch = useDispatch();
  const ordersDetail = useSelector((state) => state.order.orders);
  console.log("Fetching orders for user:", user.uid);

  useEffect(() => {
    const fetchProductDate = async () => {
      const querySnapshot = await db.collection("orders").get();
      console.log("Query Snapshot:", querySnapshot);
      const transformedProduct = querySnapshot.docs
        .map((doc) => ({
          productId: doc.id,
          ...doc.data(),
        }))
        .filter((order) => order.email === user.email) // Filter orders for the current user
        .sort((a, b) => {
          const dateA = new Date(a.productPostDate);
          const dateB = new Date(b.productPostDate);
          return dateB - dateA; // Sort in descending order
        });

      dispatch(orderActions.replaceOrder(transformedProduct));
    };
    fetchProductDate();
  }, [user.uid, dispatch]);

  return (
    <div>
      <div className="orders__detail">
        <div className="orders__container">
          <div className="orders__container__wrapper">
            <h2 className="orders__container__title">Your Orders</h2>
            <div className="orders__detail">
              {ordersDetail.map((item) => (
                <OrderDetail
                  productId={item.productId}
                  totalItem={item.totalItem}
                  productPostDate={item.productPostDate}
                  totalPrice={item.totalPrice}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetail;
