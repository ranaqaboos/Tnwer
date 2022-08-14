import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { login, cleanError } from "../redux/action/authAction";

import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

import { useNavigate } from "react-router-dom";
export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");
  const { error, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      setAlert(error);

      setTimeout(() => {
        dispatch(cleanError());
        setAlert("");
      }, 2000);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (user !== null) {
      navigate("/");
      console.log("Yes there is a user");
    }
  }, [user, dispatch]);

  //*login functions

  const handleLoginuser = (e) => {
    e.preventDefault();

    console.log("email", email);
    console.log("password", password);
    dispatch(login(email, password));
  };
  //*login functions

  //*logout

  //*logout
  return (
    <div className="login">
      <form onSubmit={handleLoginuser}>
        <div className="imgcontainer">
          <img src="/user.png" alt="Avatar" className="avatar-login" />
        </div>

        <div className="container-login">
          <label htmlFor="uname">
            <b>البريد الالكتروني </b>
          </label>
          <input
            //  className="uname"
            name="uname"
            type="email"
            placeholder="ادخل البريد الالكتروني"
            min="6"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "15px",
              margin: "5px 0 22px 0",
              display: "inline-block",
              border: "none",
              background: "#f1f1f1",
            }}
          />

          <label htmlFor="psw">
            <b>كلمة المرور</b>
          </label>
          <input
            type="password"
            placeholder="ادخل كلمة المرور "
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="flask-container">
            <label>
              <input type="checkbox" name="remember" /> ذكرني
            </label>
            <div className="row-btn">
              <button type="submit">تسجيل دخول </button>

              {/* <div className="container" > */}
              <button type="button" className="cancelbtn">
                إلغاء
              </button>
              {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
              {/* </div> */}
            </div>
          </div>
        </div>
        {alert && (
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              {alert}
            </Alert>
          </Stack>
        )}
      </form>
    </div>
  );
}
