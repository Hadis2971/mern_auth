import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    authError: errorReducer
});

export default rootReducer;