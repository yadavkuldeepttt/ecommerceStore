import React from "react";
import "./Home.css";
import Carousel from "./Carousel";
import MainProducts from "./MainProducts";
import PopularData from "./PopularData";
import TopBrands from "./TopBrands";
import Footer from "../../Components/Footer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { uiActions } from "../../Store/uiSlice";
const Home = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  if (location.pathname === "/") {
    dispatch(uiActions.closePayment());
  }
  return (
    <>
      <div className="home">
        <div className="home_container">
          <Carousel />
          <MainProducts />
          <TopBrands />
          <PopularData />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
