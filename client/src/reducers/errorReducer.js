import { AUTH_ERROR } from "../actions/actionTypes";
const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch(action.type){
        case(AUTH_ERROR):
        return action.payload;
        default: return state;
    }
};

export default errorReducer;