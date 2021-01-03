/** @format */

import * as actionTypes from "./actionsTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData,
  };
};

export const authFaild = (error) => {
  return {
    type: actionTypes.AUTH_FAILD,
    error: error,
  };
};

export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBB35TOn4Vs_ydgBjLIFGYSSmIZFEqmhz4",
        authData
      )
      .then((respnse) => {
        console.log(respnse);
        dispatch(authSucess(respnse.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFaild(err));
      });
  };
};
