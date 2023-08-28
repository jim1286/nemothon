import { Result } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TempState {
  resultList: Result[];
}

const initialState: TempState = {
  resultList: [],
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setResultList: (state, action: PayloadAction<Result[]>) => {
      state.resultList = action.payload;
    },
  },
});

export const { setResultList } = routeSlice.actions;
export default routeSlice.reducer;
