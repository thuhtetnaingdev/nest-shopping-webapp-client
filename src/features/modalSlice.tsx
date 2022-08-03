import { createSlice } from "@reduxjs/toolkit";

type MethodType =
  | "login"
  | "register"
  | "logout"
  | "deleteAddress"
  | "createAddress"
  | "cartRemove"
  | "";

interface InitialState {
  type: MethodType;
  isOpen: boolean;
  selectedDelete?: string[];
}

const initialState: InitialState = { type: "", isOpen: false };

export const ModalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setType: (
      state: InitialState,
      action: { payload: { type: MethodType } }
    ) => {
      state.type = action.payload.type;
    },
    openModal: (state: InitialState) => {
      state.isOpen = true;
    },
    closeModal: (state: InitialState) => {
      state.type = "";
      state.isOpen = false;
    },
  },
});

export const { openModal, closeModal, setType } = ModalSlice.actions;
export default ModalSlice.reducer;
