import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import "./BlankPage.scss"

interface Props {
  name: string,
  img: string,
}

const BlankPage:FC<Props> = ({name, img}) => {
  return (
    <div className='blank'>
        <img src={img} />
        <h2>Your {name} is empty</h2>
        <Link className='link special-btn' to="/shop" onClick={()=>window.scroll(0,0)}>continue shopping</Link>
        <h2>Have an account?</h2>
        <div className='blank-login'>
            <Link to="/login" onClick={()=>window.scroll(0,0)}>login</Link>
            <span> to check out faster.</span>
        </div>
    </div>
  )
}

export default BlankPage;
