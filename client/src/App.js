import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import React, { useEffect } from 'react';
import ProductDetails from './Components/Product/ProductDetails';
import LoginSignUp from './Components/User/LoginSignUp';
import store from "./store";
import { loadUser } from "./actions/userAction";
import Profile from './Components/User/Profile';
import UpdateProfile from './Components/User/UpdateProfile';
import UpdatePassword from './Components/User/UpdatePassword';
import ForgotPassword from './Components/User/ForgotPassword';
import ResetPassword from './Components/User/ResetPassword';
import Cart from './Components/Cart/Cart';
import Shipping from './Components/Cart/Shipping';
import ConfirmOrder from './Components/Cart/ConfirmOrder';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());

  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <React.Fragment><Header/> <Home /></React.Fragment>}/>
        <Route exact path="/product/:id" element={ <React.Fragment><Header/> <ProductDetails /></React.Fragment>}/>
        <Route exact path="/login" element={ <React.Fragment><Header/> <LoginSignUp /></React.Fragment>}/>
        <Route exact path="/account" element={ <React.Fragment><Header/> <Profile />   </React.Fragment>}/>
        <Route exact path="/me/update" element={ <React.Fragment><Header/><UpdateProfile />   </React.Fragment>}/>
        <Route exact path="/password/update" element={ <React.Fragment><Header/><UpdatePassword />   </React.Fragment>}/>
        <Route exact path="/password/forgot" element={ <React.Fragment><Header/><ForgotPassword />   </React.Fragment>}/>
        <Route exact path="/password/reset/:token" element={ <React.Fragment><Header/><ResetPassword />   </React.Fragment>}/>
        <Route exact path="/cart" element={ <React.Fragment><Header/><Cart />   </React.Fragment>}/>
        <Route exact path="/shipping" element={ <React.Fragment><Header/><Shipping />   </React.Fragment>}/>
        <Route exact path="/order/confirm" element={ <React.Fragment><Header/><ConfirmOrder />   </React.Fragment>}/>


      </Routes>
  </Router>
  );
}

export default App;
