import React, { useState } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import Account from "./Headers/Account/Account";
import CartButton from "./Headers/cart/CartButton";
import Orders from "./Headers/orders/Orders";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="header">
        <div className="header_logo_wrapper">
          <span onClick={() => navigate("/")}>Yadav</span>
        </div>

        <div className="nav_links">
          <ul className={`menulink ${isMenuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>

            <li className="header_account">
              <Account />
            </li>

            <li className="header_orders">
              <Orders />
            </li>

            <li className="header-cart">
              <CartButton />
            </li>
          </ul>
          <div className="menu-toggle" onClick={handleMenu}>
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}
              id="bars"></i>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
