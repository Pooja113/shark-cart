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



function App() {
  useEffect(() => {
    store.dispatch(loadUser());

  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <React.Fragment><Header/> <Home /></React.Fragment>}/>
      </Routes>
      <Routes>
        <Route exact path="/product/:id" element={ <React.Fragment><Header/> <ProductDetails /></React.Fragment>}/>
      </Routes>
      <Routes>
        <Route exact path="/login" element={ <React.Fragment><Header/> <LoginSignUp /></React.Fragment>}/>
      </Routes>
  </Router>
  );
}

export default App;
