import React from 'react'
import './Product.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const Product = ({product}) => {

  const options = {
    edit:false,
    color:"rgba(20,20,20,0.1)",
    activeColor:"tomato",
    size:window.innerWidth < 600 ? 20 : 25,
    value:2.5,
    isHalf:true
  }
  return (
    <div className='product'>
        <Link to={product._id}>
          <img src={product.images[0].url} alt='' />
          <div className='product__info'>
            <p>{product.title}</p>
            <ReactStars {...options} /><span>(23 Reviews)</span>
            <p className='product__price'>
              <small>₹</small>
              <strong>{product.price}</strong>
            </p>
          </div>
         
        </Link>
       
    </div>
  )
}

export default Product
