import React from "react";
import googleLogo from "../../assets/google.png";
// import logo from "../../assets/crown.png";
import "./Login.css";
import { useStateValue } from "../../Store/AuthContext/authContext";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../Store/AuthContext/reducer";

const Login = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const loginButtonHandler = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        navigate("/", { replace: true });
      })
      .catch((error) => console.log(error));
  };
  const logoMainHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div className="login_container">
      <button onClick={logoMainHandler} className="yadav_logo">
        Yadav
      </button>
      <button onClick={loginButtonHandler}>
        Login with Google
        <span>
          &nbsp;
          <img
            className="login__googleLogo"
            src={googleLogo}
            alt="Google Logo"
            height="30"
            width="30"
          />
        </span>
      </button>
    </div>
  );
};

export default Login;
