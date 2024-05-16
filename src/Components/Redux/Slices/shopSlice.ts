import { createSlice } from "@reduxjs/toolkit";
import products from "../../Assets/products";
import { ProductType } from "../../Assets/types";

interface Pro {
    id: number,
    name: string,
    category: string,
    img: string,
    newPrice: number,
    oldPrice: number,
    imgs: string[],
    sizes: string[],
    color: string,
    type: string,
    tags: string[],
    info: {style: string, composition: string, weight: string, dimensions: string,}[],
    desc: string,
} 

interface CartItem extends Pro {
    amount: number,
    total: number
}

interface CartState {
    loading: boolean,
    cartItems: CartItem[],
    total: number,
    amount: number,
}

interface ShopState {
    cart: CartState,
}

const initialState: ShopState = {
    cart: {
        loading: false,
        cartItems: [],
        total: 0,
        amount: 0,
    }
}

export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const theItem = state.cart.cartItems.find(item => item.id === action.payload);
            if (theItem !== undefined) {
                state.cart.cartItems.map(item => {
                    if (item.id === action.payload) {
                        item.amount += 1;
                    }
                })
            } else {
                const product:any = products.find((item:any) => item.id === action.payload);
                const finalItem = {...product, amount: 1, total: product.price}
                
                state.cart.cartItems = [...state.cart.cartItems, finalItem];
            }
        },

        removeFromCart: (state, action) => {
            state.cart.cartItems = state.cart.cartItems.filter((item:any) => item.id !== action.payload);
        },

        increaseAmount: (state, action) => {
            state.cart.cartItems.map(item => {
                if (item.id === action.payload) {
                    item.amount += 1;
                }
            })
        },

        decreaseAmount: (state, action) => {
            state.cart.cartItems.map((item, index) => {
                if (item.id === action.payload) {
                    if (item.amount > 1) {
                        item.amount -= 1;
                    } else {
                        state.cart.cartItems.splice(index, 1);
                    }
                }
            })
        },

        getItemTotals: (state) => {
            state.cart.cartItems.map(item => {
                item.total = item.newPrice * item.amount;
            })
            if (state.cart.cartItems.length) {
                const itemsTotal = state.cart.cartItems.map(item => item.total);
                const itemsAmount = state.cart.cartItems.map(item => item.amount);
                
                state.cart.total = itemsTotal.reduce((a, b) => a + b);
                state.cart.amount = itemsAmount.reduce((a, b) => a + b);
            }
        },

        getTotal: (state) => {
            
            
            
        }

    }

})

export const {
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    getItemTotals,
    getTotal,
} = shopSlice.actions;
export default shopSlice.reducer;