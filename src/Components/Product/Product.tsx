import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Assets/products';
import { ProductImgs } from './ProductImgs/ProductImgs';
import { ProductDetails } from './ProductDetails/ProductDetails';

export const Product = () => {
    const {id}= useParams();
    const product:any = products.find(item => item.id === Number(id)); 
  return (
    <div className='product'>
        <div className='container'>
        <div className='content flx'>
          <ProductImgs product = {product} />
          <ProductDetails product = {product} />
        </div>
        </div>
    </div>
  )
}
