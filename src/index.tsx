import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loginpage } from "./Pages/Login";
import { Homepage } from "./Pages/home";
import { Registerpage } from "./Pages/register";
import { Coursepage } from "./Pages/course";
// import GgComponents from './pages/notfound';
import { Teacherpage } from "./Pages/teacher";
import { Studentpage } from "./Pages/View-video";
import { Profilepage } from "./Pages/profile";
import "./Styles/index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Cart from "./Pages/Cart";
import ViewVideo from "./Pages/ViewVideo";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/teacher" element={<Teacherpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/profile" element={<Profilepage />} />
        <Route path="/course" element={<Coursepage />} />
        <Route path="/student" element={<Studentpage />} />
        <Route path="/cart-shop" element={<Cart />} />
        <Route path="/view-video" element={<ViewVideo />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
