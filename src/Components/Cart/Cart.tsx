import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import "./Cart.scss"
import { addToCart,
    decreaseAmount,
    getItemTotals,
    getTotal,
    increaseAmount,
    removeFromCart
} from '../Redux/Slices/shopSlice';

const Cart:FC = () => {
    const cart = useSelector((state:RootState) => state.shop.cart);
    const {cartItems, amount, total} = cart;
    const dispatch = useDispatch();
    
  return (
    <div className='cart'>
        <div className='container'>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Description</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartItems.map(item => {
                            const {id, img, name, newPrice, amount, total} = item;
                            return(
                                <tr key={id}>
                                    <td><img src={img} /></td>
                                    <td>{name}</td>
                                    <td>{newPrice}</td>
                                    <td className='amount'>
                                        <button onClick={() => dispatch(increaseAmount(id))}>+</button> 
                                        <input type='number' value = {amount} onChange={()=>console.log("input")}/>
                                        <button onClick={() => dispatch(decreaseAmount(id))}>-</button> 
                                    </td>
                                    <td>{total}</td>
                                    <td>
                                    <button onClick={() => dispatch(removeFromCart(id))}>X</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <b>{amount}</b><br />
            <b>{total}</b>
        </div>
    </div>
  )
}

export default Cart;
