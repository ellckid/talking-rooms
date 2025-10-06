import { configureStore } from "@reduxjs/toolkit";
import { meetingsSlice } from "./meetingsSlice.ts";
import { useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: meetingsSlice.reducer,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
