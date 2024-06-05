import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { FiLock } from "react-icons/fi";
import bogus from "../../Assets/images/bogus.svg"
import "./Forms.scss"

const Forms:FC = () => {

    const optional: string = " (optional)";

  return (
    <div className='forms'>
        <form>
            <div className='contact box'>
                <div className='title flx'>
                    <h3>Contact</h3>
                    <Link className='login-link' to="/login">Log in</Link>
                </div>
                <div className='inputs'>
                    <div className='input-content'>
                        <input type='text' placeholder='Email or mobile phone number'></input>
                    </div>
                    <div className='input-content'>
                        <input type= "checkbox" id='emailme'></input>
                        <label htmlFor='emailme'>Email me with news and offers</label>
                    </div>
                </div>
            </div>
            <div className='delivery box'>
                <h3>Delivery</h3>
                <div className='inputs'>
                    <div className='input-content'>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                    </div>
                    <div className='input-content flx flx2'>
                        <input type='text' placeholder={'First name' + optional}></input>
                        <input type='text' placeholder='Last name'></input>
                    </div>
                    <div className='input-content'>
                        <input type='text' placeholder='Adress'></input>
                    </div>
                    <div className='input-content'>
                        <input type='text' placeholder={'Apartment, suite, etc.' + optional}></input>
                    </div>
                    <div className='input-content flx flx3'>
                        <input type='text' placeholder='city'></input>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </select>
                        <input type='text' placeholder='city'></input>
                    </div>
                    <div className='input-content'>
                        <input type= "checkbox" id='emailme'></input>
                        <label htmlFor='emailme'>Save this information for next time</label>
                    </div>
                    <div className='shipping box'>
                        <h4>Shipping method</h4>
                        <div className='method'>
                            <span>Enter your shipping address to view available shipping methods.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='payment box'>
                <h3>Payment</h3>
                <span>All transactions are secure and encrypted.</span>
                <div className='inputs'>
                    <div className='credit flx'>
                        <span>Credit card</span>
                        <img src={bogus}/>
                    </div>
                    <div className='content'>
                        <div className='input-content'>
                            <input type='text' placeholder='Adress'></input>
                            <div className='input-icon'><FiLock /></div>
                        </div>
                        <div className='input-content flx flx2'>
                            <input type='text' placeholder='Adress'></input>
                            <input type='text' placeholder='Adress'></input>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Forms