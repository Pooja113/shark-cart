import React, { useState, useEffect } from 'react'
import Pagination from  'react-js-pagination'
import Product from '../Product/Product'
import { useAlert } from "react-alert";
import { useParams } from 'react-router-dom';
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../Loader/Loader';
import {Typography, Slider} from "@mui/material";
import './Products.css'


const categories = [
  "Electronics",
  "Footwear",
  "Bottom",
  "Tops",
];

const Products = () => {
  const alert = useAlert();
  const params = useParams();
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);

  const keyword = params.keyword;

  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
 const { loading, error, products, productsCount,resultPerPage,filteredProductsCount } = useSelector((state) => state.products);
 const setCurrentPageNo = (e) => {
  setCurrentPage(e);
};

const priceHandler = (event, newPrice) => {
  setPrice(newPrice);
};


 let count = filteredProductsCount;
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);
  return (
    <React.Fragment>
      {loading ? (
        <Loader />
      ) : ( 
        <React.Fragment>
        <div className='home__row'>
       
        <div className="filterBox">
          <Typography>Price</Typography>
          <Slider
            value={price}
            onChange={priceHandler}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            min={0}
            max={5000}
          />

          <Typography>Categories</Typography>
          <ul className="categoryBox">
            {categories.map((category) => (
              <li
                className="category-link"
                key={category}
                onClick={() => setCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>

          <fieldset>
            <Typography component="legend">Ratings Above</Typography>
            <Slider
              value={ratings}
              onChange={(e, newRating) => {
                setRatings(newRating);
              }}
              aria-labelledby="continuous-slider"
              valueLabelDisplay="auto"
              min={0}
              max={5}
            />
          </fieldset>
      </div>
      <div className='products__section'>
      {products &&
        products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
    </div>
      </div>
        { resultPerPage < count && (
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
         </React.Fragment> 
        )}
    </React.Fragment>
  )
}

export default Products
