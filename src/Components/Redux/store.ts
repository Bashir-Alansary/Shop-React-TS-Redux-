import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./Slices/shopSlice";
import wishSlice from "./Slices/wishSlice";



export const store = configureStore({
    reducer: {
        shop: shopSlice,
        wish: wishSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch