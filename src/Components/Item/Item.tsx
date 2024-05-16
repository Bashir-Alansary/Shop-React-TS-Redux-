import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart } from '../Redux/Slices/shopSlice';
import { addToWish } from '../Redux/Slices/wishSlice';

interface Props {
    id: number,
    name: string,
    img: string,
    desc: string,
    itemClass: string,
}

export const Item:FC<Props> = ({id, name, img, desc, itemClass}) => {

  const dispatch = useDispatch();

  return (
    <div className={itemClass}>
      <div className='item-div'>
        <div className='content'>
          <Link className='imgbx link' to={"/product/"+ id}>
            <img src={img} />
          </Link>
          <div className='item-details'>
            <div className='text'>
              <Link className='link' to={"/product/"+ id}>
                <h3>{name}</h3>
              </Link>
              <p className='description'>{desc}</p>
            </div>
            <div className='interact'>
              <div className='item-icons compare-btn'>
                <span className='icon-name'>
                    compare
                </span>
                <button className='icon-btn' onClick={()=>dispatch(addToWish(id))}>
                    kk
                </button>
              </div>
              <div className='item-icons wishlist-btn'>
                <span className='icon-name'>
                    Add to wishlist
                </span>
                <button className='icon-btn'>
                    jj
                </button>
              </div>
            </div>

            <div className="main-btn">
              <button className='special-btn'onClick={()=>dispatch(addToCart(id))}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
