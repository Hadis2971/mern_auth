import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";


export const auth = (userData, history) => dispatch => {
    axios.post('http://localhost:5000/api/auth/register', userData)
      .then(function (response) {
        history.push("/login");
      })
      .catch(function (error) {
          console.log(error);
        dispatch({
            type: AUTH_FAIL,
            payload: error
        });
      });
};

export const login = (userData, history) => dispatch => {
    axios.post('http://localhost:5000/api/auth/login', userData)
      .then(function (response) {
          
        const { token } = response.data;
        localStorage.setItem("auth_token", token);
        setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch({
            type: AUTH_SUCCESS,
            token: token,
            user: decoded
        });
        history.push("/");
      })
      .catch(function (error) {
          console.log(error);
        dispatch({
            type: AUTH_FAIL,
            payload: error
        });
      });
};

export const logout = () => dispatch => {
    localStorage.removeItem("auth_token");
    setAuthToken(false);
    
    dispatch({
        type: AUTH_LOGOUT
    });
    window.location.href = "/login";
};
