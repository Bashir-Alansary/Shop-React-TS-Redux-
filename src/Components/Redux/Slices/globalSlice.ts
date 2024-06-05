import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StateType {
    showSubcart: boolean,
    searchInputVal: string,
    checkoutPath: string,
}

const initialState: StateType = {
    showSubcart: false,
    searchInputVal: "",
    checkoutPath: "/checkout",
}


export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        
        setShowSubcart: (state, action:PayloadAction<boolean>) => {
            state.showSubcart = action.payload;
        },
        
        setSearchInputVal: (state, action:PayloadAction<string>) => {
             state.searchInputVal = action.payload; 
        },

        // to close subcart and scroll up after click on link
        closeAndGoUp: (state) => {
            state.showSubcart = false;
            window.scroll(0, 0);
        },

    }

})

export const {
    setShowSubcart,
   setSearchInputVal,
   closeAndGoUp,
} = globalSlice.actions;

export default globalSlice.reducer;