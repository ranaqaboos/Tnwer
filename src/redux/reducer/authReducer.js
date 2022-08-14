import {
  LOGIN_USER,
  SIGNUP_USER,
  WRONG_USER,
  CLEAR_ERROR,
  WRONG_PASSWORD,
  LOGOUT_USER,
  USER_ALREADY_EXIST,
} from "../constant/authConst";
import { users } from "../../data/user";

const initailState = {
  users: users,
  error: null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

export const authReducer = (state = initailState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };

    case WRONG_USER:
      return {
        ...state,
        user: null,
        error: "لقد قمت بادخال بريد الكتروني خاطئ",
      };

    case WRONG_PASSWORD:
      return {
        ...state,
        user: null,
        error: "لقد قمت بادخال كلمة سر خاطئة",
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };

    case USER_ALREADY_EXIST:
      return {
        ...state,
        error: "المستخدم مسجل مسبقا",
      };

    case SIGNUP_USER:
      return {
        ...state,
        users: [...users, action.payload],
        user: null,
      };

    default:
      return state;
  }
};
