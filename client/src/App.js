import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import React from 'react';
import ProductDetails from './Components/Product/ProductDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <React.Fragment><Header/> <Home /></React.Fragment>}/>
      </Routes>
      <Routes>
        <Route exact path="/product/:id" element={ <React.Fragment><Header/> <ProductDetails /></React.Fragment>}/>
      </Routes>
  </Router>
  );
}

export default App;
