import React from 'react'
import Product from '../Product/Product'
import './Home.css'
import banner from '../../images/banner.jpg'

const product ={
  _id:'1235413',
  title:"DressBerry", 
  price:19.99,
  rating:5,
  images:[{url: 'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/15561624/2021/12/2/e3fd2ba7-1f1c-4eb5-90f4-124ab104c7a61638424225455-DressBerry-Women-Sweaters-2251638424224950-1.jpg'}]
}
const Home = () => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={banner} alt='' />
        <div className='home__row'>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
      </div>    
    </div>
    </div>
  )
}

export default Home
