import { createSlice } from "@reduxjs/toolkit";
import { RootObject } from "../cors/types/ItemTypes";

const initialState: { item: RootObject | null } = { item: null };

export const SingleItemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {
    setItem: (state: any, action: { payload: RootObject }) => {
      state.item = action.payload;
    },
    cleanStore: (state: any) => {
      state.item = null;
    },
  },
});

export const { setItem, cleanStore } = SingleItemSlice.actions;

export default SingleItemSlice.reducer;
