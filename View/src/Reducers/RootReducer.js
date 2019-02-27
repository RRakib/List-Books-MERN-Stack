import { combineReducers } from "redux";
import bookReducer from "./bookReducer";

const RootReducer = combineReducers({
    bookReducer : bookReducer
})

export default RootReducer;