import { useContext, useState } from "react";
import { StoreContext } from "../../context/StorageContext";
import "./Collection.css";
const Collection = ({ id, image, title, price, rating, half, desc }) => {
  const { cartItems, setCartItems, addToCart, removeToCart } =
    useContext(StoreContext);

  return (
    <div className="collection-item">
      <div className=" collection">
        <img src={image} alt="" />
        <div className="headers">
          <h4>{title}</h4>
          <p>₹{price}</p>
          <div className="rating">
            <i className={rating}></i>
          </div>
          <p>{desc}</p>
          <div className="Qty-container">
            {!cartItems[id] ? (
              <>
                <div className="Qty">
                  <button onClick={() => addToCart(id)}>Qty</button>
                </div>
              </>
            ) : (
              <>
                <div className="total">
                  {cartItems[id]}

                  <div className="total-container">
                    <i
                      className="fa-solid fa-angle-up"
                      onClick={() => addToCart(id)}
                    ></i>
                    <i
                      className="fa-solid fa-angle-down"
                      onClick={() => removeToCart(id)}
                    ></i>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
