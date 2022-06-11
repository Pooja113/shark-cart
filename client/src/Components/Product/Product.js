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
    value:product.ratings,
    isHalf:true
  }
  return (
    <div className='product'>
        <Link to={`/product/${product._id}`}>
          <img src={product.images[0].url} alt='' />
          <div className='product__info'>
            <p>{product.name}</p>
            <ReactStars {...options} /><span>({product.numOfReviews} Reviews)</span>
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
