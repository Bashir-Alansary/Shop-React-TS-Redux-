import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Redux/store';
import { RiDeleteBin2Line } from "react-icons/ri";
import emptyCartImg from "../Assets/images/empty-cart.webp"
import cartBanner from "../Assets/images/cart_banner.png"
import "./Cart.scss"
import {
    decreaseAmount,
    increaseAmount,
    removeFromCart
} from '../Redux/Slices/shopSlice';
import BlankPage from '../BlankPage/BlankPage';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const cart = useSelector((state:RootState) => state.shop.cart);
    const {cartItems, amount, total} = cart;
    console.log(cartItems);
    
    
    const dispatch = useDispatch();
    
  return (
    <div className='cart'>
        <Banner title='Your cart' img={cartBanner} num={total} />
        <div className='container'>
            {amount !== 0 ?   
                <div className='content'>
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
                                    const {id, name, newPrice, amount, total, chosenSize, chosenColor} = item;
                                    return(
                                        <tr key={i}>
                                            <td>
                                                <Link 
                                                className="link"
                                                to={'/product' + id}
                                                >
                                                <img src={chosenColor.img} />
                                                </Link>
                                            </td>
                                            <td>
                                                <Link 
                                                className="link"
                                                to={'/product' + id}
                                                >
                                                {name}
                                                </Link>
                                                <span className='size'><b>size:</b> {chosenSize}</span>
                                                <span><b>color:</b> {chosenColor.name}</span>
                                            </td>
                                            <td>{newPrice}</td>
                                            <td className='amount'>
                                                <button onClick={() => dispatch(increaseAmount({id, size: chosenSize, color: chosenColor}))}>+</button> 
                                                <input type='number' value = {amount} onChange={()=>console.log("input")}/>
                                                <button onClick={() => dispatch(decreaseAmount({id, size: chosenSize, color: chosenColor}))}>-</button> 
                                            </td>
                                            <td>{total}</td>
                                            <td>
                                            <button
                                            className='remove' 
                                            onClick={() => dispatch(removeFromCart({id, size: chosenSize, color: chosenColor}))}
                                            >
                                                <RiDeleteBin2Line />
                                            </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className='final-details flx'>
                        <div className='promocode'>
                        <input type="text" placeholder="promo code" />
                        <button className='hide-mobile'>Apply</button>
                        </div>
                        <div className='total'>
                        <b>Total: </b><span>{total}$</span>
                        </div>
                        <div className='update-cart'>
                        <button>Update<span className='hide-mobile'> Cart</span></button>
                        </div>
                    </div>
                </div>
                :<BlankPage name='cart' img = {emptyCartImg} />
            }
        </div>
    </div>
  )
}