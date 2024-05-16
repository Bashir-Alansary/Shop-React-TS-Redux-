import { createSlice } from "@reduxjs/toolkit";
import products from "../../Assets/products";
import { ProductType } from "../../Assets/types";

interface WishState {
    wishItems: ProductType[],
}
const initialState: WishState = {
    wishItems: [],
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToWish: (state, action) => {
            const theItem:any = state.wishItems.find((item:any) => item.id === action.payload);
            if (theItem === undefined) {
                const item:any = products.find((item:any) => item.id === action.payload)
                state.wishItems = [...state.wishItems, item];
            }
            
        },

        removeFromWish: (state, action) => {
            state.wishItems = state.wishItems.filter(item => item.id !== action.payload);
        },

    }

})

export const {
    addToWish,
    removeFromWish
} = shopSlice.actions;
export default shopSlice.reducer;