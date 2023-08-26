import { combineReducers } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import store from "../store";
import tempReducer from "./temp.slice";

export default combineReducers({
  temp: tempReducer,
});

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export * from "./temp.slice";
