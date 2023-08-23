import React from "react";

import img1 from "../../assets/carousel4.jpg";
import img2 from "../../assets/carousel5.jpg";
import img3 from "../../assets/carosel1.jpg";
import img4 from "../../assets/carousel6.png";
import img5 from "../../assets/carousel7.jpg";
import img6 from "../../assets/carousel8.jpg";

import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const Carousel = () => {
  const style = {
    textAlign: "center",
    fontSize: "30px",
    height: "27.4rem",
    width: "100%",
    borderRadius: "40px 40px 0 0",
    marginTop: "3rem",
  };
  return (
    <div>
      <div>
        <Slide autoplay={true}>
          <img src={img4} alt="img4" style={style} />

          <img src={img1} alt="img1" style={style} />
          <img src={img5} alt="img5" style={style} />
          <img src={img6} alt="img6" style={style} />
          <img src={img2} alt="img2" style={style} />
          <img src={img3} alt="img3" style={style} />
        </Slide>
      </div>
    </div>
  );
};

export default Carousel;
