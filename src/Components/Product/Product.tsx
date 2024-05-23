import React from 'react'
import { useParams } from 'react-router-dom'
import products from '../Assets/products';
import { ProductImgs } from './ProductImgs/ProductImgs';
import ProductAbout from './ProductAbout/ProductAbout';
import Related from './Related/Related';
import "./Product.scss"
import Details from './Details/Details';

export const Product = () => {
    const {id}= useParams();
    const product:any = products.find(item => item.id === Number(id)); 
  return (
    <div className='product'>
        <div className='container'>
        <div className='content flx'>
          <ProductImgs product = {product} />
          <Details product = {product} />
        </div>
        <ProductAbout product = {product} />
        <Related id={product.id} category={product.category}/>
        </div>
    </div>
  )
}
