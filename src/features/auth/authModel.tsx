import { createSlice } from "@reduxjs/toolkit";

export interface ModelState {
  isModelOpen: boolean;
}

const initialState: ModelState = {
  isModelOpen: false,
};

const modelSlice = createSlice({
  name: "modelSlice",
  initialState,
  reducers: {
    openModel(state: ModelState) {
      state.isModelOpen = true;
    },
    closeModel(state: ModelState) {
      state.isModelOpen = false;
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;

export default modelSlice.reducer;
