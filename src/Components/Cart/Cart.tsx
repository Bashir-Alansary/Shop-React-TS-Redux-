import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import "./Cart.scss"
import {
    decreaseAmount,
    increaseAmount,
    removeFromCart
} from '../Redux/Slices/shopSlice';

export const Cart = () => {
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
                        cartItems.map((item, i) => {
                            const {id, img, name, newPrice, amount, total, chosenSize} = item;
                            return(
                                <tr key={i}>
                                    <td><img src={img} /></td>
                                    <td>
                                        <h3>{name}</h3>
                                        <span>{chosenSize}</span>
                                    </td>
                                    <td>{newPrice}</td>
                                    <td className='amount'>
                                        <button onClick={() => dispatch(increaseAmount({id, size: chosenSize}))}>+</button> 
                                        <input type='number' value = {amount} onChange={()=>console.log("input")}/>
                                        <button onClick={() => dispatch(decreaseAmount({id, size: chosenSize}))}>-</button> 
                                    </td>
                                    <td>{total}</td>
                                    <td>
                                    <button onClick={() => dispatch(removeFromCart({id, size: chosenSize}))}>X</button>
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