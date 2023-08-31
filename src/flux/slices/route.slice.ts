import { Info, MoneyRange } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TempState {
  moneyRange: MoneyRange;
  info?: Info;
}

const initialState: TempState = {
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
    setClickedInfo: (state, action: PayloadAction<Info>) => {
      state.info = action.payload;
    },
  },
});

export const { setMoneyRange, setClickedInfo } = routeSlice.actions;
export default routeSlice.reducer;
