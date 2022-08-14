import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { signup, cleanError } from "../redux/action/authAction";
import { useNavigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
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

  //*register
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setAlert("كلمة المرور غير متشابهة");

      setTimeout(() => {
        setAlert("");
      }, 2000);
    } else {
      dispatch(signup(email, password));
    }
  };
  //*register
  return (
    <div className="register">
      <form onSubmit={handleSignUp}>
        <div className="container-register">
          <h1>إنشاء حساب </h1>
          <p>يرجئ ملء هذا النموذج لإنشاء حساب</p>
          <hr />
          {alert && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert variant="filled" severity="error">
                {alert}
              </Alert>
            </Stack>
          )}
          <label htmlFor="email">
            <b>البريد الالكتروني </b>
          </label>
          <input
            type="email"
            placeholder="ادخل البريد الالكتروني"
            name="username"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="psw">
            <b>كلمة المرور</b>
          </label>
          <input
            type="password"
            placeholder="ادخل كلمة المرور"
            name="psw"
            id="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="psw-repeat">
            <b>إعادة كلمة المرور</b>
          </label>
          <input
            type="password"
            placeholder="إعادة كلمة المرور"
            name="psw-repeat"
            id="psw-repeat"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            required
          />
          <hr />
          <p>
            من خلال إنشاء حساب فإنك توافق على <a href="#">الشروط & والخصوصية</a>
            .
          </p>
          <button type="submit" className="registerbtn">
            تسجيل
          </button>
        </div>

        <div className="container-signin">
          <p>
            هل لديك حساب؟ <Link to="/login">تسجيل دخول </Link>.
          </p>
        </div>
      </form>
    </div>
  );
}
