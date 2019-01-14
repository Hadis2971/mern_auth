import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL, AUTH_LOGOUT } from "../actions/actionTypes";

const initialState = {
    token: null,
    user: null,
    isAuthenticated: false,
    loading: true
};


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case(AUTH_START):
        return state = {
            ...state
        };

        case(AUTH_SUCCESS):
        console.log(action);
        return state = {
            ...state,
            token: action.token,
            user: action.user,
            loading: false,
            isAuthenticated: true
        };

        case(AUTH_FAIL):
        return state = {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            loading: false
        };

        case(AUTH_LOGOUT):
        return state = {
            ...state,
            token: null,
            user: null,
            isAuthenticated: false,
            loading: false
        };

        default:
        return state;
    }
};

export default authReducer;