import { AUTH_START, AUTH_SUCCESS, AUTH_FAIL } from "../actions/actionTypes";

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
        return state = {
            ...state,
            token: action.token,
            loading: false,
            isAuthenticated: this.token !== null
        };

        case(AUTH_FAIL):
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