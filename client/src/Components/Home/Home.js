import React, { useState, useEffect } from 'react'
import Product from '../Product/Product'
import './Home.css'
import banner from '../../images/banner.jpg'
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../Loader/Loader';
import { useAlert } from "react-alert";
import Pagination from  'react-js-pagination'

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

 const { loading, error, products, productsCount,resultPerPage,filteredProductsCount } = useSelector((state) => state.products);
 const setCurrentPageNo = (e) => {
  setCurrentPage(e);
};

 let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(currentPage));
  }, [dispatch, error, alert,currentPage]);


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
        {resultPerPage < count && (
          <div className="paginationBox">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={productsCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              firstPageText="1st"
              lastPageText="Last"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
        )}
      </div>
    </div>
    )}
    </React.Fragment>
  )
}

export default Home
