import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../actions/userAction";


const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleAuthentication = () =>{
      dispatch(logout());
      //alert.success("Logout Successfully");
  }
  return (
    <div className='header'>
      <div className='logo'>
        <Link to="/">
            <span className='logo__name'>SharkCart</span>
        </Link>
      </div>
      <div className='header__nav'>
        <Link to="/">
          <div className='header__option'>
            <img className='user__profilepic' src={user?.avatar?.url ? user?.avatar?.url : "/Profile.png"} alt="" />
          </div>
        </Link>
  
        <Link to="/">
        <div className='header__option'>
          <span className='header__optionLineTwo'>Products</span>
        </div>
        </Link>
        <Link to="/cart">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLoneTwo header__basketCount' >
              {cartItems?.length ? cartItems?.length : "0" }
            </span>
          </div>
        </Link>
        {isAuthenticated ? (<div className='logout__button' onClick={handleAuthentication}>LOGOUT</div>) : (
          <Link to="/login"><div className='login__button'>LOGIN</div></Link>
          )}
      </div>
      
  </div>
  )
}

export default Header
