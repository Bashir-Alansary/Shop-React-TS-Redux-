import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Assets/products';
import { ProductImgs } from './ProductImgs/ProductImgs';

export const Product = () => {
    const {id}= useParams();
    const product:any = products.find(item => item.id === Number(id)); 
  return (
    <div className='product'>
        <div className='container'>
         <ProductImgs product = {product}/>
        </div>
    </div>
  )
}
