import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  isDeleteOpened: boolean;
  isAddressCreateOpened: boolean;
  isModalOpened: boolean;
}

const initialState: InitialState = {
  isDeleteOpened: false,
  isAddressCreateOpened: false,
  isModalOpened: false,
};

export const AddressChangeSlice = createSlice({
  name: "addressChangeSlice",
  initialState,
  reducers: {
    setDeleteOpened: (state: InitialState, action: { payload: boolean }) => {
      state.isDeleteOpened = action.payload;
    },
    setAddressOpened: (state: InitialState, action: { payload: boolean }) => {
      state.isAddressCreateOpened = action.payload;
    },
    setModalOpened: (state: InitialState, action: { payload: boolean }) => {
      state.isModalOpened = action.payload;
    },
  },
});

export const { setDeleteOpened, setAddressOpened, setModalOpened } =
  AddressChangeSlice.actions;

export default AddressChangeSlice.reducer;
