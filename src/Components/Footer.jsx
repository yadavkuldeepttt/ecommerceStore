import React from "react";
import "./Footer.css";
const Footer = () => {
  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="footer">
        <div className="backTop" onClick={scroll}>
          Back to Top
        </div>
        <div className="footerContent">
          <div className="socials">
            <ul className="social_links">
              <li>
                <a href="https://wa.me/qr/WTRK5566GSFMO1 ">
                  {" "}
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/kuldeep-yadav-297aa2225/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/yadavkuldeepttt">
                  <i class="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-chrome"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i class="fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
