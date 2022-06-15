import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom';
import { Rating } from "@mui/material";



const Product = ({product}) => {

const options = {
    size: "medium",
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <div className='product'>
        <Link to={`/product/${product._id}`}>
          <img src={product.images[0].url} alt='' />
          <div className='product__info'>
            <p>{product.name}</p>
            <Rating {...options} /><span>({product.numOfReviews} Reviews)</span>
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
