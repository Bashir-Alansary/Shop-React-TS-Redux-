import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../Redux/store'
import { removeFromWish } from '../Redux/Slices/wishSlice';

import "./Wishlist.scss"

export const Wishlist = () => {

    const {wishItems}= useSelector((state:RootState) => state.wish);
    const dispatch = useDispatch();
    
  return (
    <div className='wishlist'>
        <div className='container'>
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
    </div>
  )
}
