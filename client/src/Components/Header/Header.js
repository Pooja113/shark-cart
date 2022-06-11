import React from 'react'
import './Header.css'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
// import { auth } from './firebase';

const Header = () => {

  const [{basket,user},dispatch] = useStateValue();
  const handleAuthentication = () =>{
    // if(user){
    //   auth.signOut();
    // }
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
            <span className='header__optionLineTwo'>Hello {user ? (user?.email) : 'Guest'}</span>
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
              {basket.length}
            </span>
          </div>
        </Link>
        <Link to="/">
        <div className='header__option' onClick={handleAuthentication}>
          <span className='header__optionLineTwo'>
            <span className='header__optionLineTwo'>
              {user ? 'Sign Out': 'Sign In'}
            </span>
          </span>
        </div>
      </Link>
      </div>
      
  </div>
  )
}

export default Header
