import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css"; // Assuming you have a CSS file for styling
import { MenuLink } from "./Menulink";
import { StoreContext } from "./context/StorageContext";
import { toast } from "react-toastify";

const Navbar = ({ setShowLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { getTotalAmount, token, setToken } = useContext(StoreContext);

  function handleClick() {
    setIsOpen({ clicked: !isOpen.clicked });
  }

  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
    toast.success("Loggin Out");
  };
  return (
    <div className="container">
      <div className="navbar">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_bejqz9QZgT5isnWTIRjf3ZsNzOn2G5QbqU3ns_ZlxVYatIE_CPsVHCr9-4ZvmbS4f4&usqp=CAU"
            alt=""
          />
        </div>

        <div className="nav">
          <ul className={isOpen.clicked ? "nav-menu active" : "nav-menu"}>
            {MenuLink.map((item, index) => {
              return (
                <li key={index}>
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="signin-btn">
          {!token ? (
            <button className="sign-btn" onClick={() => setShowLogin(true)}>
              Sign in
            </button>
          ) : (
            <div className="Logout">
              <button onClick={() => navigate("/orders")}>My Orders</button>
              <i
                class="fa-solid fa-arrow-right-from-bracket"
                onClick={Logout}
              ></i>
            </div>
          )}
        </div>
        <div className="nav-search-icon">
          <Link to="/shopping">
            <i class="fa-solid fa-bag-shopping" style={{ color: "black" }}></i>
          </Link>

          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>
        <div className="menu" onClick={handleClick}>
          <i
            class={isOpen.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
