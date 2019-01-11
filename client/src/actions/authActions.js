import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";


export const auth = (userData, history) => dispatch => {
    axios.post('/api/auth/register', userData)
      .then(function (response) {
        history.push("/login");
      })
      .catch(function (error) {
        dispatch({
            type: AUTH_FAIL,
            payload: error.response.data
        });
      });
};

export const login = (userData) => dispatch => {
    axios.post('/api/auth/login', userData)
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
      })
      .catch(function (error) {
        dispatch({
            type: AUTH_FAIL,
            payload: error.response.data
        });
      });
};

export const logout = () => dispatch => {
    localStorage.removeItem("auth_token");
    setAuthToken(false);
    dispatch({
        type: AUTH_LOGOUT
    })
};
