import React from "react";

import { ReactComponent as CartIcon } from "./../assets/cart.svg";
import { useSelector, useDispatch } from "react-redux";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";
import { logoutUser } from "../redux/action/authAction";
import { useNavigate } from "react-router-dom";
export function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logoutUser());
    navigate("/login");
  };
  return (
    <div className="bg-img">
      <div className="container-nav">
        <div className="topnav">
          <a href="/">الصفحة الرئسية</a>
          {/* <a href="/">الحجز</a> */}
          <a href="/course"> المقررات</a>
          <a href="/teacher">الأساتذة</a>
          <a href="#contact">اتصل بنا</a>
          <a href="#about">من نحن</a>
          {/* <input type="text" placeholder="Search.." className="search" /> */}
        </div>
        <div className="topnav">
          <Link className="cart-container" to="/cart-shop">
            <CartIcon className="cart-icon" />
            <span className="cart-number">{cartItems.length}</span>
          </Link>
          {user ? (
            <span
              onClick={() => logout()}
              style={{ color: "white", cursor: "pointer", marginLeft: "10px" }}
            >
              تسجيل خروج
            </span>
          ) : (
            <Link to="/login" className="letf">
              تسجيل الدخول
            </Link>
          )}
          {!user && (
            <Link to="/register" className="letf">
              تسجيل
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
