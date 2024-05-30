import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiPlus, FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from 'react-redux'
import { RootState } from '../Redux/store'

import logo from "../Assets/images/logo.png"
import cart from "../Assets/images/cart.png"
import wishlist from "../Assets/images/wishlist.png"

import "./Navbar.scss"
import Subcart from '../Subcart/Subcart';

export const Navbar:FC = () => {
    const {amount} = useSelector((state:RootState) => state.shop.cart);
    const [showSubcart, setShowSubcart] = useState<boolean>(false);
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='content flx'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <ul className='links flx'>
                <li><NavLink className='link' to="/" >home</NavLink></li>
                <li><NavLink className='link' to="/men">Men</NavLink></li>
                <li><NavLink className='link' to="/women">Wemon</NavLink></li>
                <li><NavLink className='link' to="/kids">Kids</NavLink></li>
                <li><NavLink className='link' to="/shop">shop</NavLink></li>
                <li><NavLink className='link' to="/cart">cart</NavLink></li>
            </ul>
            <div className='options flx'>
                <div className='login-search flx'>
                    <button className="search op-btn">
                        <FiSearch className='icon' />
                    </button>
                    <NavLink className="link wish" to="/wishlist"><img src={wishlist} /></NavLink>
                    <NavLink className="link login" to="/login"><AiOutlineUser className='icon' /></NavLink>
                </div>
                <button className='cart-btn op-btn' onClick={()=> setShowSubcart(true)}>
                    <span className='num'>{amount}</span>
                    <img src={cart} />
                </button>
                <Subcart showSubcart = {showSubcart} setShowSubcart = {setShowSubcart} />
            </div>
            </div>
        </div>
    </div>
  )
}
