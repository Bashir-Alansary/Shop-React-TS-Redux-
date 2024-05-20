import React from 'react'
import { IoArrowForwardSharp } from "react-icons/io5";
import { newsLetterData } from '../Assets/newsletterData'
import "./NewsLetter.css"

export default function NewsLatter() {
  return (
    <div className='newsletter'>
        <div className='container'>
            <div className='content'>
                <div className='imgbx'>
                    <img src='images/newsletter.png' />
                </div>
                <div className='text'>
                    <h1>Don't miss out on<br />special offers</h1>
                    <p>Register to receive news about the latest, savings combos, discount codes...</p>
                    <ul className='features'>
                        {
                            newsLetterData.map(item=>{
                                const {id, name, num} = item;
                                return(
                                    <li className={`feature${id}`} key={id}>
                                        <span className='num'>{num}</span>
                                        <span className='title'>{name}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className='subscribe'>
                        <input type="email" placeholder='Enter your email' />
                        <button><IoArrowForwardSharp /></button>
                    </div>
                </div>
            </div>
        </div>
        {
            //<div className='blur-color'></div>
        }
    </div>
  )
}
