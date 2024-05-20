import React, { FC, SetStateAction } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import emptyCart from "../Assets/images/empty-cart.webp"
import { RootState } from '../Redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAmount, increaseAmount, removeFromCart } from '../Redux/Slices/shopSlice';
import "./SubCart.scss"

interface Props {
    showSubcart: boolean,
    setShowSubcart: React.Dispatch<SetStateAction<boolean>>,
}

export const SubCart:FC<Props> = ({showSubcart, setShowSubcart}) => {

    const cart = useSelector((state:RootState) => state.shop.cart);
    const {cartItems, amount, total} = cart;
    const dispatch = useDispatch();

  return (
    <div className={showSubcart? "subcart show" : "subcart hide"}>
        <div className='title flx'>
            <div>
                <h6>Shopping Cart</h6>
                {amount > 0 && <span>{amount} items</span>}
            </div>
            <button 
            className='close'
            onClick={()=>setShowSubcart(false)}
            >
            <IoCloseSharp />
            </button>
        </div>
        {amount > 0 ? <div>
            <div className='subcart-items'>
                {
                    cartItems.map((item, i)=> {
                        const{id, smallImgs, name, newPrice, amount, chosenSize, chosenColor} = item;
                        return(
                            <div key={i} className='subcart-item flx'>
                                <Link className='link' to={"/product/"+ id}>
                                    <img src={smallImgs[0].img} />
                                </Link>
                                <div className='details'>
                                    <Link className='link' to={"/product/"+ id}><h5>{name}</h5></Link>
                                    <p className='item-price'>{amount} {chosenSize} <span> x </span>{newPrice} $</p>
                                    <div className='control'>
                                        <button onClick={()=>dispatch(increaseAmount({id, size: chosenSize, color: chosenColor}))}>+</button>
                                        <input type="number" min={0} value={amount} />
                                        <button onClick={()=>dispatch(decreaseAmount({id, size: chosenSize, color: chosenColor}))}>-</button>
                                    </div>
                                </div>
                                <div className='remove'>
                                    <button onClick={()=>dispatch(removeFromCart({id, size: chosenSize, color: chosenColor}))}><IoCloseSharp /></button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="subcart-total title flx">
                <h6>Subtotal:</h6>
                <span>{total} $</span>
            </div>
            <div className="subcart-btns flx">
                <Link className="link" to="/cart">view cart</Link>
                <button>check out</button>
            </div>
        </div>
        : <div className='blank-content'>
            {/* <BlankPage name='cart' img={emptyCart}/> */}
        </div>
        }
    </div>
  )
}
