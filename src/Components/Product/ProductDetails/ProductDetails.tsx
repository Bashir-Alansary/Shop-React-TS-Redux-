import React, {FC, useState} from 'react'
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Link } from 'react-router-dom'
import { DiGitCompare } from "react-icons/di";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import {paymentMethods} from "./ProductDetailsData"
import { ProductType, isItemExist } from '../../Assets/types';

import "./ProductDetails.css"
import { useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../../Redux/Slices/wishSlice';
import { RootState } from '../../Redux/store';
import { addToCompare } from '../../Redux/Slices/compareSlice';
import { addAmountToItem } from '../../Redux/Slices/shopSlice';
import { Value } from 'sass';

interface Props {
  product: ProductType,
}

export const ProductDetails:FC<Props> = ({product}) => {
  
  const {id, name, category, desc, newPrice, oldPrice, sizes} = product;
  const {wishItems} = useSelector((state:RootState) => state.wish)
  const {compareItems} = useSelector((state:RootState) => state.compare)
  const dispatch = useDispatch();

  const [amount, setAmount] = useState<number>(1);
  const [size, setSize] = useState<string>(product.sizes[0]);

  const[wishLoad, setWishLoad] = useState<boolean>(false);
  const[compareLoad, setCompareLoad] = useState<boolean>(false);
  const[addLoad, setAddLoad] = useState<boolean>(false);

  const addToWishBtn = (id:number): void => {
    setWishLoad(true);
    setTimeout(function() {
      dispatch(addToWish(id));
      setWishLoad(false);
    }, 1000);
  }

  const addToCompareBtn = (id:number): void => {
    setCompareLoad(true);
    setTimeout(function() {
      dispatch(addToCompare(id));
      setCompareLoad(false);
    }, 1000);
  }

  const handleAddAmount = (id:number): void => {
    setAddLoad(true);
    setTimeout(function() {
      dispatch(addAmountToItem({id, size, amount}));
      setAmount(1);
      setAddLoad(false);
    }, 1000);
  }

  const chooseSize = (val: string): void => {
    setSize(val);
  }

  const handleChange = (e:any): void => {
    if (e.target.value >= 0) {
      setAmount(1);
    } else {
      setAmount(e.target.value);
    }
  }

  const decreaseVal = (): void => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }

  // const decreaseAddedAmount = () => {
  //   if (addedAmount > 1) {
  //     setAddedAmount(addedAmount - 1)
  //   } else {
  //     setAddedAmount(1);
  //   }
  // }

  // const checkAvailableSize = (index, item) => {
  //   if (index === 0 || index === 1) {
  //     setAddedMsg({text: "10 in stock", class: "msg done", availablity: true});
  //     setDisabledBtn(false);
  //   } else {
  //     setAddedMsg({text: "sold Out", class: "msg warning", availablity: true});
  //     setDisabledBtn(true);
  //   }
  //   setSize(item);
  // }


  const shareOnFacebook = (): void =>{
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=' +
     'https://github.com/knoldus/angular-facebook-twitter.git';
    window.open(navUrl , '_blank');
  }

  return (
    <div className='product-details'>
      <div className='stars'>
        <span><IoMdStar /></span>
        <span><IoMdStar /></span>
        <span><IoMdStar /></span>
        <span><IoMdStar /></span>
        <span><IoMdStarHalf /></span>
        <span className='num'>(4.5)</span>
      </div>
      <h1>{name}</h1>
      <span className='category'>{category}</span>
      <hr />
      <div className='price'>
        <span className='new-price price'>{newPrice}$</span>
        <span className='old-price price'>{oldPrice}$</span>
      </div>
      <div className='info'>
        <p>{desc}</p>
      </div>
      
      <ul className='sizes'>
        {
          sizes.map((item, index) => {
            return(
                <button 
                key={index}
                className = {item === size ? "size active" : "size"}
                onClick={()=>chooseSize(item)} >
                {item} 
                </button>
            )
          })
        }
      </ul>
      <div className="add-to-cart">
        <div className='inputs-content'>
          <div className='amount'>
            <div className='num'>
              <input type="number" min={0} value={amount} onChange={(e:any) =>setAmount(parseInt(e.target.value))} />
            </div>
            <div className='control'>
              <button onClick={()=> setAmount(amount + 1)}>+</button>
              <button onClick={decreaseVal}>-</button>
            </div>
          </div>
          <button 
          className='add'
          onClick={() => handleAddAmount(id)}
          >
          {addLoad ? <AiOutlineReload className='load'/>  : 'add'}
          </button>
        </div>
        <p>
          massage
        </p>
      </div>
      <hr />
      <div className='interact'>
        <div className='box'>
          {isItemExist(id, wishItems) ? 
          <Link to="/wishlist" className="link icon-btn">
            <FaHeart /> <span className='title'>View wishlist</span>
          </Link>
          :<button onClick={()=>{addToWishBtn(id)}} className='icon-btn'>
            {wishLoad ? <AiOutlineReload className='load'/> : <FiHeart />}
            <span className='title'>Add to wishlist</span>
          </button>}
        </div>
        <div className='box'>
          {isItemExist(id, compareItems) ?
          <Link to="/compare" className="link icon-btn">
            <MdDoneOutline /> <span className='title'>View compare list</span>
          </Link>
          :<button onClick={()=>{addToCompareBtn(id)}} className='icon-btn'>
            {compareLoad ? <AiOutlineReload className='load'/> : <DiGitCompare />}
            <span className='title'>Add to compare</span>
          </button>}
        </div>
        <div className='box'>
          <button onClick={shareOnFacebook} className='icon-btn'>
            <FiShare2 /> 
            <span className='title'>Share</span>
          </button>
        </div>
      </div>
      <hr />
      <ul className='payment-methods'>
        {
          paymentMethods.map(method => {
            const {id, name, img} = method;
            return (
              <li key={id} className="method">
                <img src={img} alt={name} />
              </li>
            )
          }) 
        }
      </ul>
    </div>
  )
}