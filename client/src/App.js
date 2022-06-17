import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import React, { useEffect, useState } from 'react';
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
import axios from "axios";
import Payment from './Components/Cart/Payment';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from './Components/Cart/OrderSuccess';
import MyOrders from './Components/Order/MyOrders';
import OrderDetails from './Components/Order/OrderDetails';
import Dashboard from './Components/Admin/Dashboard';
import ProtectedRoute from './Components/Route/ProtectedRoute';
import ProductList from './Components/Admin/ProductList';
import NewProduct from './Components/Admin/NewProduct';
import UpdateProduct from './Components/Admin/UpdateProduct';
import OrderList from './Components/Admin/OrderList';
import ProcessOrder from './Components/Admin/ProcessOrder';
import UpdateUser from './Components/Admin/UpdateUser';
import UsersList from './Components/Admin/UsersList';
import ProductReviews from './Components/Admin/ProductReviews';
import Search from './Components/Search/Search';
import Products from './Components/Product/Products';


function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();

  }, []);
 // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <React.Fragment><Header/> <Home /></React.Fragment>}/>
        <Route exact path="/products" element={ <React.Fragment><Header/> <Products /></React.Fragment>}/>
        <Route path="/products/:keyword" element={ <React.Fragment><Header/> <Products /></React.Fragment>}/>
        <Route exact path="/product/:id" element={ <React.Fragment><Header/> <ProductDetails /></React.Fragment>}/>
        <Route exact path="/login" element={ <React.Fragment><Header/> <LoginSignUp /></React.Fragment>}/>
        <Route exact path="/account" element={ <React.Fragment><Header/> <Profile />   </React.Fragment>}/>
        <Route exact path="/me/update" element={ <React.Fragment><Header/><UpdateProfile />   </React.Fragment>}/>
        <Route exact path="/password/update" element={ <React.Fragment><Header/><UpdatePassword />   </React.Fragment>}/>
        <Route exact path="/password/forgot" element={ <React.Fragment><Header/><ForgotPassword />   </React.Fragment>}/>
        <Route exact path="/password/reset/:token" element={ <React.Fragment><Header/><ResetPassword />   </React.Fragment>}/>
        <Route exact path="/cart" element={ <React.Fragment><Header/><Cart /></React.Fragment>}/>
      
        {stripeApiKey && (
            <Route exact path="/process/payment" element={ <Elements stripe={loadStripe(stripeApiKey)}><Header/><Payment /></Elements >} />
        )}
        <Route exact path='/' element={<ProtectedRoute />}>
            <Route exact path="/shipping" element={ <React.Fragment><Header/><Shipping /></React.Fragment>}/>
            <Route exact path="/order/confirm" element={ <React.Fragment><Header/><ConfirmOrder /></React.Fragment>}/>
            <Route exact path="/success" element={ <React.Fragment><Header/><OrderSuccess /></React.Fragment>}/>
            <Route exact path="/orders" element={ <React.Fragment><Header/><MyOrders /></React.Fragment>}/>
            <Route exact path="/order/:id" element={ <React.Fragment><Header/><OrderDetails /></React.Fragment>}/>
        </Route>
        <Route exact path='/' element={<ProtectedRoute isAdmin={true}/>}>
          <Route exact path='/admin/dashboard' element={<React.Fragment ><Header/><Dashboard /></React.Fragment>}/>
          <Route exact path="/admin/products" element={<React.Fragment><Header/><ProductList /></React.Fragment>
        }/>
        <Route exact path="/admin/product" element={<React.Fragment><Header/><NewProduct /> </React.Fragment>}/>
        <Route exact path="/admin/product/:id" element={<React.Fragment><Header/><UpdateProduct /> </React.Fragment>}/>
        <Route exact path="/admin/orders" element={<React.Fragment><Header/><OrderList /> </React.Fragment>}/>
        <Route exact path="/admin/order/:id" element={<React.Fragment><Header/><ProcessOrder /> </React.Fragment>}/>
        <Route exact path="/admin/users" element={<React.Fragment><Header/><UsersList /> </React.Fragment>}/>
        <Route exact path="/admin/user/:id" element={<React.Fragment><Header/><UpdateUser /> </React.Fragment>}/>
        <Route exact path="/admin/reviews" element={<React.Fragment><Header/><ProductReviews /> </React.Fragment>}/>
        </Route>
     
        <Route exact path="/search" element={ <React.Fragment><Header/><Search /></React.Fragment>}/>

    

      </Routes>
  </Router>
  );
}

export default App;
