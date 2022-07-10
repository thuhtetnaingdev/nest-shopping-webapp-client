import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import modelReducer from "../features/auth/authModel";
import SingleItemReducer from "../features/singleItemSlice";
import AddressChangeReducer from "../features/addressSlice";

export const store = configureStore({
  reducer: {
    userCredentials: userReducer,
    authModel: modelReducer,
    singleItemStore: SingleItemReducer,
    addressCredentials: AddressChangeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
