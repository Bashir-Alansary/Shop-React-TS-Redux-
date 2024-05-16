import React, { useState } from 'react'
import { IoMdStar} from "react-icons/io";
import { useShopContext } from '../../../../Context/ShopContext';

export default function ReviewInputs() {
    const{clickRate, setClickRate, starColor, setStarColor} = useShopContext();
    const[hoverRate, setHoverRate] = useState(null);
  return (
    <div className='review-inputs'>
        {
            [...Array(5)].map((star, index) => {
                const val = index + 1;
                return(
                    <button
                    key={Math.random()}
                    className='star'
                    onClick={(e)=>{e.preventDefault(); setClickRate(val);}}
                    onMouseEnter={() => {setHoverRate(val); setStarColor(true)}}
                    onMouseLeave={() => setHoverRate(clickRate)}
                    >
                        <IoMdStar
                        className='star'
                        color = {(val <= (hoverRate || clickRate)) && starColor ? "#ffcd00" : "#999"}
                        />
                    </button>
                )
            })
        }
    </div>
  )
}
