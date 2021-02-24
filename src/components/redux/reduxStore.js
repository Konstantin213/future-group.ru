import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import primaryPageReducer from "./PrimaryPageReducer";

let reducers = combineReducers({
    primaryPage: primaryPageReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;