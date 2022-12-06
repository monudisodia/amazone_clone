import './App.css';
import Banner from './Banner/Banner';
import Checkout from './Basket/Checkout';
import ShoppingBasket from './Basket/ShoppingBasket';
import Header from './Header/Header';
import ProductList from './Products/ProductList';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React from 'react';
import  Login  from './Login/Login.js';


function App() {
  return (
    <div className="App">

     
      <Router>
        <Header />
        <Routes >
          <Route exact path='/' element={
            <React.Fragment>
              <Banner />
              <ProductList />
            </React.Fragment>
          } />

          <Route exact path='/login' element={
             <React.Fragment>
              <Login/>
             </React.Fragment>
          }/>

          <Route exact path='/checkout' element={
            <React.Fragment>
              <Checkout />
              <ShoppingBasket />
            </React.Fragment>
          } />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;

