import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { routes } from "../constants";

export interface RouteState {
  route: string;
  theme: string;
}

const initialState: RouteState = {
  route: routes.ABOUT,
  theme: "light"
}
export const routeReducerSlice = createSlice({
  name: "routeSlice",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload;
    },
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    }
  },
});

export const { setRoute, setTheme } = routeReducerSlice.actions;

export const selectRoute = (state: RootState) => state.route.route;
export const selectTheme = (state: RootState) => state.route.theme;


export default routeReducerSlice.reducer