import { MoneyRange, Result } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TempState {
  resultList: Result[];
  moneyRange: MoneyRange;
}

const initialState: TempState = {
  resultList: [],
  moneyRange: {
    minMoney: 4800,
    maxMoney: 100000,
  },
};

export const routeSlice = createSlice({
  name: "route",
  initialState,
  reducers: {
    setMoneyRange: (state, action: PayloadAction<MoneyRange>) => {
      state.moneyRange = action.payload;
    },
    setResultList: (state, action: PayloadAction<Result[]>) => {
      state.resultList = action.payload;
    },
  },
});

export const { setResultList, setMoneyRange } = routeSlice.actions;
export default routeSlice.reducer;
