import React, { useContext, useState } from "react";
import "./Contact.css";
import { StoreContext } from "../../context/StorageContext";
import axios from "axios";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zipcode: "",
    contry: "",
    phone: "",
  });
  const { cartItems, getTotalAmount, token, url, electronic_Items } =
    useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    electronic_Items.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });

    try {
      let orderData = {
        items: orderItems,
        amount: getTotalAmount() + 2,
        address: data,
        userId: token,
      };

      let response = await axios.post(url + "/api/order/place", orderData, {
        headers: { token },
      });

      if (response.data.success) {
        alert("Order placed Succesfully");
        window.location.replace("/fancy/orders");
      } else {
        alert("Error" + response.data.message);
      }
    } catch (error) {
      console.log("Error", error);
      alert("Error placing order");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={placeOrder} className="place-order">
          <div className="place-order-left">
            <p className="titles">Delivery Information</p>
            <div className="multi-field">
              <input
                name="firstName"
                onChange={onChangeHandler}
                value={data.firstName}
                type="text"
                placeholder="First name"
                required
              />
              <input
                name="lastName"
                onChange={onChangeHandler}
                value={data.lastName}
                type="text"
                placeholder="Last name"
                required
              />
            </div>
            <input
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="text"
              placeholder="Email Address"
              required
            />
            <input
              onChange={onChangeHandler}
              value={data.address}
              name="address"
              type="text"
              placeholder="Address"
              required
            />
            <div className="multi-field">
              <input
                onChange={onChangeHandler}
                value={data.city}
                name="city"
                type="text"
                placeholder="city"
                required
              />
              <input
                onChange={onChangeHandler}
                value={data.state}
                name="state"
                type="text"
                placeholder="state"
                required
              />
            </div>
            <div className="multi-field">
              <input
                onChange={onChangeHandler}
                value={data.zipcode}
                name="zipcode"
                type="text"
                placeholder="Zip code"
                required
              />
              <input
                onChange={onChangeHandler}
                value={data.contry}
                name="contry"
                type="text"
                placeholder="contry"
                required
              />
            </div>
            <input
              onChange={onChangeHandler}
              value={data.phone}
              name="phone"
              type="text"
              placeholder="Phone"
              required
            />
            <button type="submit">Place Order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
