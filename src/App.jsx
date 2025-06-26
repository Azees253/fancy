import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Product from "./Component/Product/Product";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Account from "./Component/Account/Account";
import Footer from "./Footer";
import LoginPoup from "./Component/LoginPopup/LoginPoup";
import ProductDetail from "./Component/ProductDetail/ProductDetail";
import { Latest } from "./MenuItems";
import Shopping from "./Component/Shopping/Shopping";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPoup setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />
        <Route path="/detail" element={<ProductDetail Latest={Latest} />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
