import React from "react";
import "./Orders.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../Store/AuthContext/authContext";
const Orders = () => {
  const [{ user }] = useStateValue();

  return (
    <Link className="orders_link" to={!user ? "/login" : "/orders"}>
      Orders
    </Link>
  );
};

export default Orders;
