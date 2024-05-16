import React from 'react'
import data_product from '../../Assets/data'
import Item from '../../Item/Item'
import "./ProductRelated.css"

export default function ProductRelated() {
  return (
    <div className='product-related'>
        {
            data_product.map(item => <Item key={item.id} {...item} itemClass={'item'}/>)
        }
    </div>
  )
}
