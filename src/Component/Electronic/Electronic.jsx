import { useContext, useState } from "react";
import Collection from "../Collection/Collection";
import { Latest } from "../../MenuItems";
import "./Electronic.css";
import { StoreContext } from "../../context/StorageContext";

const Electronic = ({ category, setCatgory }) => {
  const { electronic_Items } = useContext(StoreContext);

  function handleClick(e) {
    const list = document.querySelectorAll("#row > div");
    const searchVal = e.target.value.toUpperCase();
    list.forEach((el) => {
      el.style.display = el
        .querySelector("h4")
        .textContent.toUpperCase()
        .includes(searchVal)
        ? "block"
        : "none";
    });
  }
  return (
    <div className="small-container">
      <div className="row row-2">
        <h2>All Products</h2>
        <div className="input">
          <input
            type="text"
            id="search"
            onKeyUp={handleClick}
            placeholder="Filter"
          />
          <i class="fa-solid fa-search"></i>
        </div>
      </div>

      <div className="row" id="row">
        {electronic_Items.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <div className="col-4" key={index}>
                <Collection
                  image={item.image}
                  title={item.name}
                  price={item.price}
                  rating={item.rating1}
                  desc={item.description}
                  id={item._id}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Electronic;
