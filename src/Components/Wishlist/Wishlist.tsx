import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { removeFromWish } from '../Redux/Slices/wishSlice';
import emptyWishlistImg from "../Assets/images/empty-wishlist.png";
import "./Wishlist.scss"
import BlankPage from '../BlankPage/BlankPage';

export const Wishlist = () => {

    const {wishItems}= useSelector((state:RootState) => state.wish);
    const dispatch = useDispatch();
    
  return (
    <div className='wishlist'>
        <div className='container'>
            {wishItems.length ?
                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Description</th>
                                <th>Unit Price</th>
                                <th>option</th>
                                <th>remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                wishItems.map(item => {
                                    const {id, smallImgs, name, newPrice} = item;
                                    return(
                                        <tr key={id}>
                                            <td><img src={smallImgs[0].img} /></td>
                                            <td>{name}</td>
                                            <td>{newPrice}</td>
                                            <td className='special'>
                                                <button className='special-btn'>option</button>
                                            </td>
                                            <td>
                                            <button onClick={()=>dispatch(removeFromWish(id))}>X</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                :<BlankPage name='wishlist' img={emptyWishlistImg} />
            }
        </div>
    </div>
  )
}
