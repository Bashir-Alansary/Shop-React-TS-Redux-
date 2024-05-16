import React, { FC } from 'react'
import products from '../Assets/products'
import { Item } from '../Item/Item'
import "./Shop.scss"

export const Shop:FC = () => {
  return (
    <div>
        <h1>Shop</h1>
        <div className='container'>
            <div className='products'>
                <div className='content flx'>
                    {
                        products.map(item => {
                            return (
                                <Item key={item.id} {...item} itemClass = {'item'}/>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
