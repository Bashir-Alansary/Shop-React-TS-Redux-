import React, { FC } from 'react'
import "./Checkout.scss"
import CheckoutNav from './CheckoutNav/CheckoutNav'
import Forms from './Forms/Forms'
import ItemsList from './ItemsList/ItemsList'

const Checkout:FC = () => {
  return (
    <div className='checkout'>
        <CheckoutNav />
        <div className='container flx'>
          <Forms />
          <ItemsList />
        </div>
    </div>
  )
}

export default Checkout