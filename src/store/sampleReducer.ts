import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

export interface RouteState {
  theme: string;
}

const initialState: RouteState = {
  theme: "light"
}
export const sampleReducerSlice = createSlice({
  name: "sampleSlice",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    }
  },
});

export const { setTheme } = sampleReducerSlice.actions;

export const selectTheme = (state: RootState) => state.sample.theme;

export default sampleReducerSlice.reducer