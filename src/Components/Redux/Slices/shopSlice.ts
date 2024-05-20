import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "../../Assets/products";
import { ProductType, SmallImgType } from "../../Assets/types";

interface Pro {
    id: number,
    name: string,
    category: string,
    smallImgs: SmallImgType[],
    newPrice: number,
    oldPrice: number,
    bigImgs: string[],
    sizes: string[],
    color: string,
    type: string,
    tags: string[],
    info: {style: string, composition: string, weight: string, dimensions: string,}[],
    desc: string,
} 

interface CartItems extends Pro {
    amount: number,
    total: number,
    chosenSize: string,
    chosenColor: SmallImgType,
}

interface CartState {
    loading: boolean,
    cartItems: CartItems[],
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

interface IDColor {
    id: number,
    color: SmallImgType,
}

interface IDSizeColor extends IDColor {
    size: string,
}

interface AddAmount extends IDSizeColor {
    amount: number,
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<IDColor>) => {
            const {id, color} = action.payload;
            console.log(color);
            
            const theItem =
            state.cart.cartItems.find(item =>
                item.id === id
                && item.chosenSize === item.sizes[0]
                && item.chosenColor.id === color.id
            );

            if (theItem !== undefined) {
                state.cart.cartItems.map(item => {
                    if (item.id === id) {
                        item.amount += 1;
                    }
                })
            } else {
                const product:any = products.find((item:any) => item.id === id);
                const finalItem = {
                    ...product, amount: 1,
                    total: product.price,
                    chosenSize: product.sizes[0],
                    chosenColor: color
                }
                
                state.cart.cartItems = [...state.cart.cartItems, finalItem];
            }
        },

        removeFromCart: (state, action:PayloadAction<IDSizeColor>) => {
            const {id, size, color} = action.payload;
            state.cart.cartItems = 
            state.cart.cartItems.filter((item:any) => 
                (item.id !== id)
                || (item.id === id && item.chosenColor.id !== color.id)
                || (item.id === id && item.chosenSize !== size)
            );
            
        },

        increaseAmount: (state, action:PayloadAction<IDSizeColor>) => {
            const {id, size, color} = action.payload;
            state.cart.cartItems.map(item => {
                if (item.id === id && item.chosenSize === size && item.chosenColor.id === color.id) {
                    item.amount += 1;
                }
            })
        },

        decreaseAmount: (state, action:PayloadAction<IDSizeColor>) => {
            const {id, size, color} = action.payload;
            state.cart.cartItems.map((item, index) => {
                if (item.id === id && item.chosenSize === size && item.chosenColor.id === color.id) {
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
            } else {
                state.cart.total = 0
                state.cart.amount = 0
            }
        },

        addAmountToItem: (state, action:PayloadAction<AddAmount>) => {
            const {id, size, color, amount} = action.payload;
            const theItem =
                state.cart.cartItems.find(item =>
                    item.id === id
                    && item.chosenSize === size
                    && item.chosenColor.id === color.id
                );
                
            if (theItem === undefined) {
                const product:any = products.find((item:any) => item.id === id);
                const finalItem = {
                    ...product,
                    amount,
                    total: product.price,
                    chosenSize: size,
                    chosenColor: color
                };
                
                state.cart.cartItems = [...state.cart.cartItems, finalItem];
            } else {
                state.cart.cartItems.map(item => {
                    if (item.id === id && item.chosenSize === size && item.chosenColor.id === color.id) {
                        item.amount = item.amount + amount;
                        item.chosenSize = size;
                        item.chosenColor = color;
                    }
                })
            }
        }

    }

})

export const {
    addToCart,
    removeFromCart,
    increaseAmount,
    decreaseAmount,
    getItemTotals,
    addAmountToItem,
} = shopSlice.actions;
export default shopSlice.reducer;