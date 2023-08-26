import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TempState {
  temp: boolean;
}

const initialState: TempState = {
  temp: false,
};

export const tempSlice = createSlice({
  name: "temp",
  initialState,
  reducers: {
    setTemp: (state, action: PayloadAction<boolean>) => {
      state.temp = action.payload;
    },
  },
});

export const { setTemp } = tempSlice.actions;
export default tempSlice.reducer;
