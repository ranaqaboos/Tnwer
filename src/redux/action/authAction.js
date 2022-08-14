import {
  LOGIN_USER,
  SIGNUP_USER,
  WRONG_USER,
  CLEAR_ERROR,
  WRONG_PASSWORD,
  LOGOUT_USER,
  USER_ALREADY_EXIST,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from "../constant/authConst";
// import { users } from "../../data/user";

import axios from "axios";

export const login = (email, password) => (dispatch, getState) => {
  const { users } = getState().auth;
  const userExist = users.find((user) => user.email === email);
  if (userExist) {
    if (userExist.password === password) {
      localStorage.setItem("user", JSON.stringify(userExist));
      dispatch({ type: LOGIN_USER, payload: userExist });
    } else {
      dispatch({ type: WRONG_PASSWORD });
    }
  } else {
    dispatch({ type: WRONG_USER });
  }
};

export const signup = (email, password) => (dispatch, getState) => {
  const { users } = getState().auth;
  const userExist = users.find((user) => user.email === email);
  if (userExist) {
    dispatch({ type: USER_ALREADY_EXIST });
  } else {
    const neeUser = {
      id: users.length + 1,
      username: `user-${users.length + 1}`,
      email: email,
      password: password,
      role: "student",
    };

    dispatch({ type: SIGNUP_USER, payload: neeUser });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT_USER });
};

export const cleanError = () => (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};

//*with database (api request) for login
export const loginRequest = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post("/user/login", { email, password });

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGIN_FAIL, payload: error });
  }
};

//*with database (api request) for login
