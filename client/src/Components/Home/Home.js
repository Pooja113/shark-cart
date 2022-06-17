import React from 'react'
import './Home.css'
import banner from '../../images/banner.jpg'

import Products from '../Product/Products';

const Home = () => {
  return (
    <React.Fragment>
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={banner} alt='' />
        <Products />
      </div>
    </div>

    </React.Fragment>
  )
}

export default Home
