import React, { useState } from "react";
import "./Product.css";
import Navbar from "../../Navbar";
import { Latest, MenuItems } from "../../MenuItems";
import { Link, useNavigate } from "react-router-dom";
import Collection from "../Collection/Collection";
import { electronic } from "../../assets/assets";
import Header from "../Header/Header";
import Electronic from "../Electronic/Electronic";

const Product = () => {
  const [category, setCatgory] = useState("All");

  return (
    <>
      <div className="Heading">
        <Header category={category} setCatgory={setCatgory} />
        <Electronic category={category} setCatgory={setCatgory} />
      </div>
    </>
  );
};

export default Product;
