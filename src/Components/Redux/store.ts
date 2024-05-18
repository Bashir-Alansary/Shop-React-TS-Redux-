import { configureStore } from "@reduxjs/toolkit";
import shopSlice from "./Slices/shopSlice";
import wishSlice from "./Slices/wishSlice";
import compareSlice from "./Slices/compareSlice";



export const store = configureStore({
    reducer: {
        shop: shopSlice,
        wish: wishSlice,
        compare: compareSlice,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch