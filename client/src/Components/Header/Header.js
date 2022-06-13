import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../../actions/userAction";


const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleAuthentication = () =>{
    if(isAuthenticated){
      dispatch(logout());
      alert.success("Logout Successfully");
    }
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
  
        <Link to="/orders">
        <div className='header__option'>
          <span className='header__optionLineTwo'>Orders</span>
        </div>
        </Link>
        <Link to="/checkout">
          <div className='header__optionBasket'>
            <ShoppingBasketIcon />
            <span className='header__optionLoneTwo header__basketCount' >
              0
            </span>
          </div>
        </Link>
        <Link to="/login">
        <div className='header__option' onClick={handleAuthentication}>
          <span className='header__optionLineTwo'>
            <span className='header__optionLineTwo'>
              {isAuthenticated ? "Log Out" : "Log In"}
              
            </span>
          </span>
        </div>
      </Link>
      </div>
      
  </div>
  )
}

export default Header
