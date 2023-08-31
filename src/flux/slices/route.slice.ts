import { Info, MoneyRange, Result } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TempState {
  resultList: Result[];
  moneyRange: MoneyRange;
  info?: Info;
}

const initialState: TempState = {
  resultList: [],
  moneyRange: {
    minMoney: 4800,
    maxMoney: 100000,
  },
  info: undefined,
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
    setClickedInfo: (state, action: PayloadAction<Info>) => {
      state.info = action.payload;
    },
  },
});

export const { setResultList, setMoneyRange, setClickedInfo } =
  routeSlice.actions;
export default routeSlice.reducer;
