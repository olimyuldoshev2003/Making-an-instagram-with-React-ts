import { configureStore } from "@reduxjs/toolkit";
import values from "../reducers/values";
import homeState from "../reducers/homeState/homeState";
import layoutState from "../reducers/layoutState/layoutState";
import profileState from "../reducers/profileState/profileState";
// ...

export const store = configureStore({
  reducer: {
    values,
    homeState,
    layoutState,
    profileState
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
