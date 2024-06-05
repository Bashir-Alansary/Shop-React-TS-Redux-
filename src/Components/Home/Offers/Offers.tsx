import React, { FC } from 'react'
import offersImg from "../../Assets/images/offers.png"
import waveImg from "../../Assets/images/wave.png"
import "./Offers.css"

const Offers:FC = () => {
  return (
    <div className='offers'>
        <div className='container'>
            <div className='content'>
                <div className='text'>
                    <h1>Exclusive<br />offers for you</h1>
                    <span>only on best sellers products</span>
                    <button className='offers-btn'>check now</button>
                </div>
                <div className='imgbx'>
                    <img src={offersImg} />
                </div>
            </div>
        </div>
        <img className='wave top' src={waveImg}/>
        <div className='gradient'></div>
    </div>
  )
}

export default Offers;