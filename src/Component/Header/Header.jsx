import React from "react";
import { electronic } from "../../assets/assets";
import "./Header.css";
const Header = ({ category, setCatgory }) => {
  return (
    <div className="header-container">
      {electronic.map((item, index) => {
        return (
          <div
            key={index}
            className="header-contain"
            onClick={() =>
              setCatgory((e) => (e === item.name ? "All" : item.name))
            }
          >
            <img
              src={item.Image}
              alt=""
              className={category === item.name ? "active" : ""}
            />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Header;
