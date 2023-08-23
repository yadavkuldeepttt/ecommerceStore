import React from "react";
import { useDispatch } from "react-redux";
import { apiActions } from "../../Store/productApiSlice";
import "./TopBrands.css";

const TopBrands = () => {
  const dispatch = useDispatch();

  const topBrands = [
    {
      id: 0,
      title: "Adidas",
      image:
        "https://img.freepik.com/free-photo/shoes_1203-8153.jpg?w=740&t=st=1691740236~exp=1691740836~hmac=c474da150fcd1204ee4068823e47ed4a90554e77942b31a5d82c61b052084708",
    },
    {
      id: 1,
      title: "Calvin Klein",
      image:
        "https://img.freepik.com/free-photo/young-man-with-hand-pocket_23-2148248492.jpg?size=626&ext=jpg&uid=R82160027&ga=GA1.2.349612747.1665762195&semt=ais",
    },
    {
      id: 2,
      title: "Dell",
      image:
        "https://img.freepik.com/free-psd/elegant-computer-mockup_1310-736.jpg?size=626&ext=jpg&uid=R82160027&ga=GA1.2.349612747.1665762195&semt=sph",
    },
    {
      id: 3,
      title: "Apple",
      image:
        "https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437108.jpg?size=626&ext=jpg&uid=R82160027&ga=GA1.2.349612747.1665762195&semt=sph",
    },
  ];

  // dispatch(apiActions.apiData({ items: topBrands }));
  return (
    <div>
      <div className="topBrands">
        <h2>Top Brands</h2>
        <div className="topBrands_items">
          {topBrands.map((data) => (
            <div className="brands_items" key={data.id}>
              <img src={data.image} alt="" height="200" width="200" />

              <p className="title">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;
