import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import store from "../store";
import routeReducer from "./route.slice";

export default combineReducers({
  route: routeReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export * from "./route.slice";
