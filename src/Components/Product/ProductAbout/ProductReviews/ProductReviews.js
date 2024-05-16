import React, { useState } from 'react'
import { useShopContext } from '../../../../Context/ShopContext';
import "./ProductReviews.css"
import ReviewInputs from './ReviewInputs';
import { IoMdStar} from "react-icons/io";

export default function ProductReviews() {

    const{reviewsList, setReviewsList, clickRate, setClickRate, setStarColor} = useShopContext();
    const[content, setContent] = useState();
    const[name, setName] = useState();
    const[email, setEmail] = useState();

    const handleChange = (e) => {
        if(e.target.id === "content") {
            setContent(e.target.value);
        }
        if(e.target.id === "name") {
            setName(e.target.value);
        }
        if(e.target.id === "email") {
            setEmail(e.target.value);
        }
    }

    const addNewReview = (e) => {
        e.preventDefault();
        const date = new Date();
        const fullDate = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
        const newReview = {id: Math.random(), name: name, img: "../../../images/user1.jpg", date: fullDate, rate: clickRate, content: content};
        setReviewsList([...reviewsList,newReview]);
        setContent("");
        setEmail("");
        setName("");
        setClickRate(null);
        setStarColor(false);
    }

  return (
    <div className='product-reviews'>
        <div className='reviews-content'>
            {
                reviewsList.map(review => {
                    const {id, name, img, content, rate, date} = review;
                    return(
                        <div key={id} className='review'>
                            <div className='imgbx'>
                                <img src={img} />
                            </div>
                            <div className='details'>
                                <ul className='rate'>
                                    {
                                        [...Array(5)].map((star, index) => {
                                            return(
                                                <li key={Math.random()} className='star'>
                                                    <IoMdStar color={index <= rate - 1 ? "#ffcd00" : "#999"} />
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <h4>{name}</h4>
                                <span className='date'>{date}</span>
                                <p>{content}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        <form>
            <ReviewInputs />
            <textarea id='content' placeholder='write review' onChange={handleChange} value={content}></textarea>
            <input type="text" id="name" placeholder='write name' onChange={handleChange} value={name}/>
            <input type="email" id="email" placeholder='write email'  onChange={handleChange} value={email}/>
            <button className='submit' onClick={addNewReview}>submit</button>
        </form>
    </div>
  )
}
