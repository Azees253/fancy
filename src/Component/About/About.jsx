import React, { useContext, useState } from "react";
import "./About.css";
import { StoreContext } from "../../context/StorageContext";
import { useNavigate } from "react-router-dom";

const About = () => {
  const { cartItems, electronic_Items, removeToCart, getTotalAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <>
      <div className="Cart">
        <div className="cart-container">
          <h2>Cart Total</h2>
          <div className="cart-item">
            <p>Subtotal</p>
            <p>{getTotalAmount()}</p>
          </div>
          <hr />
          <div className="cart-item">
            <p>Delivery Fees:</p>
            <p>{2}</p>
          </div>
          <hr />
          <div className="cart-item">
            <p>Total</p>
            <p>{getTotalAmount() === 0 ? 0 : getTotalAmount() + 2}</p>
          </div>
          <button onClick={() => navigate("/shopping")}>CHECK SHOPPING</button>
        </div>
      </div>
    </>
  );
};

export default About;
