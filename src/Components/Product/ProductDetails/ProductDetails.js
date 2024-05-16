import React, {useState} from 'react'
import "./ProductDetails.css"
import { IoMdStar, IoMdStarHalf } from "react-icons/io";
import { Link } from 'react-router-dom'
import { DiGitCompare } from "react-icons/di";
import { FiHeart, FiShare2 } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { MdDoneOutline } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { useShopContext } from '../../../Context/ShopContext';
import {paymentMethods} from "./ProductDetailsData"

export default function ProductDetails({product}) {
  
  const {id, name, category, desc, newPrice, oldPrice, sizes} = product;

  const {
    addedAmount, 
    setAddedAmount, 
    addAddedAmount, 
    addedMsg, 
    setAddedMsg, 
    disabledBtn, 
    setDisabledBtn, 
    wishlist, 
    addToWishlist,
    compareList,
    addToCompareList,
  } = useShopContext();

  const [size, setSize] = useState(sizes[0]);

  const[wishLoad, setWishLoad] = useState(false);
  const[compareLoad, setCompareLoad] = useState(false);
  const[addLoad, setAddLoad] = useState(false);

  const addToWishBtn = (id) => {
    setWishLoad(true);
    setTimeout(function() {
      addToWishlist(id);
      setWishLoad(false);
    }, 1000);
  }

  const addToCompareBtn = (id) => {
    setCompareLoad(true);
    setTimeout(function() {
      addToCompareList(id);
      setCompareLoad(false);
    }, 1000);
  }

  const addAddedAmountBtn = (id) => {
    setAddLoad(true);
    setTimeout(function() {
      addAddedAmount(id);
      setAddLoad(false);
    }, 1000);
  }

  const decreaseAddedAmount = () => {
    if (addedAmount > 1) {
      setAddedAmount(addedAmount - 1)
    } else {
      setAddedAmount(1);
    }
  }

  const checkAvailableSize = (index, item) => {
    if (index === 0 || index === 1) {
      setAddedMsg({text: "10 in stock", class: "msg done", availablity: true});
      setDisabledBtn(false);
    } else {
      setAddedMsg({text: "sold Out", class: "msg warning", availablity: true});
      setDisabledBtn(true);
    }
    setSize(item);
  }

  const shareOnFacebook = () =>{
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
                onClick={()=>checkAvailableSize(index, item)} >
                {item} 
                </button>
            )
          })
        }
      </ul>
      <div className="add-to-cart">
        <div className='inputs-content'>
          <div className={disabledBtn? 'amount disabled' : 'amount'}>
            <div className='num'>
              <input type="number" min={0} value={addedAmount} onChange={(e)=>setAddedAmount(e.target.value)} />
            </div>
            <div className='control'>
              <button onClick={()=>setAddedAmount(addedAmount + 1)}>+</button>
              <button onClick={decreaseAddedAmount}>-</button>
            </div>
          </div>
          <button 
          className={disabledBtn? 'add disabled' : 'add'} 
          disabled={disabledBtn ? true : false} 
          onClick={()=>addAddedAmountBtn(id)}
          >
          {disabledBtn ? "sold out" : addLoad ? <AiOutlineReload className='load'/>  : 'add'}
          </button>
        </div>
        <p className={addedMsg.class}>
          {addedMsg.availablity && <b>Availabilty: </b>}<span>{addedMsg.text}</span>
        </p>
      </div>
      <hr />
      <div className='interact'>
        <div className='box'>
          {wishlist[id] === "favorite"?
          <Link to="/wishlist" className="link icon-btn">
            <FaHeart /> <span className='title'>View wishlist</span>
          </Link>
          :<button onClick={()=>{addToWishBtn(id)}} className='icon-btn'>
            {wishLoad ? <AiOutlineReload className='load'/> : <FiHeart />}
            <span className='title'>Add to wishlist</span>
          </button>}
        </div>
        <div className='box'>
          {compareList[id] === "compare"? 
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
