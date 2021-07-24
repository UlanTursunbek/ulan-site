import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import { routes } from "../constants";

export interface RouteState {
  route: string
}

const initialState: RouteState = {
  route: routes.ABOUT,
}
export const routeReducerSlice = createSlice({
  name: "routeSlice",
  initialState,
  reducers: {
    setRoute: (state, action: PayloadAction<string>) => {
      state.route = action.payload;
    }
  },
});

export const { setRoute } = routeReducerSlice.actions

export const selectCount = (state: RootState) => state.route.route;

export default routeReducerSlice.reducer