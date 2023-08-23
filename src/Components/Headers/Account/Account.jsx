import React from "react";
import "./Account.css";
import { useNavigate } from "react-router-dom";
import { actionTypes } from "../../../Store/AuthContext/reducer";
import { useStateValue } from "../../../Store/AuthContext/authContext";

const Account = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const buttonHandler = () => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch({
        type: actionTypes.DROP_USER,
      });
    }
  };
  return (
    <div className="account_login">
      <button to="/login" onClick={buttonHandler} className="account">
        {!user ? (
          <p className="account_login">Login</p>
        ) : (
          <p className="account_username">{user.displayName}</p>
        )}
      </button>
    </div>
  );
};

export default Account;
