import React from "react";
import "./Contact.css";
import Navbar from "../../Navbar";

const Contact = () => {
  return (
    <>
      <div>
        <form action="" className="place-order">
          <div className="place-order-left">
            <p>Delivery Information</p>
            <div className="multi-field">
              <input type="text" placeholder="First name" required />
              <input type="text" placeholder="Last name" required />
            </div>
            <input type="text" placeholder="Email Address" required />
            <input type="text" placeholder="Address" required />
            <div className="multi-field">
              <input type="text" placeholder="city" required />
              <input type="text" placeholder="state" required />
            </div>
            <div className="multi-field">
              <input type="text" placeholder="Zip code" required />
              <input type="text" placeholder="contry" required />
            </div>
            <input type="text" placeholder="Phone" />
            <button>Place Order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
