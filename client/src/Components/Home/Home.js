import React, { useEffect } from 'react'
import Product from '../Product/Product'
import './Home.css'
import banner from '../../images/banner.jpg'
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from "react-alert";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
 const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);


  return (
    <React.Fragment>
    {loading ? (
      <Loader />
    ) : (
    <div className='home'>
      <div className='home__container'>
        <img className='home__image' src={banner} alt='' />
        <div className='home__row'>
          {products &&
            products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          
      </div>    
    </div>
    </div>
    )}
    </React.Fragment>
  )
}

export default Home
