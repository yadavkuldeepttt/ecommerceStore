import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Home from "./Pages/Main/Home";
import Login from "./Pages/Login/Login";
import { useSelector } from "react-redux";
import Cart from "./Components/Headers/cart/Cart";
import MainProducts from "./Pages/Main/MainProducts";
import { useStateValue } from "./Store/AuthContext/authContext";
import Payment from "./Pages/Payment/Payment";
import Spinner from "./Components/Spinner";
import OrdersDetail from "./Components/Headers/orders/OrdersDetail";
import OrdersShow from "./Components/Headers/orders/OrdersShow";

function App() {
  const productQuantity = useSelector((state) => state.cart.totalQuantity);
  const existSpinner = useSelector((state) => state.ui.spinner);

  const [{ user }] = useStateValue();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={existSpinner ? <Spinner /> : <Home />} />
        <Route path="/products" element={<MainProducts />}></Route>
        <Route path="/login" element={<Login />} />
        <Route
          path="/subtotal"
          element={
            productQuantity === 0 ? (
              <h2 className="App__subtotalMessage">
                Please Add Product to Cart
              </h2>
            ) : (
              <Cart />
            )
          }
        />
        <Route
          path="/subtotal/payment"
          element={
            productQuantity === 0 ? (
              <h2 className="App__subtotalMessage">
                Please Add Product to Cart
              </h2>
            ) : existSpinner ? (
              <Spinner />
            ) : (
              <Payment />
            )
          }
        />
        <Route
          path="/orders"
          element={user ? <OrdersDetail /> : <Navigate to="/login" />}
        />
        <Route
          path="orders/:ordersDetail"
          element={user ? <OrdersShow /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
