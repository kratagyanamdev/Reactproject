import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";

import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Home from './components/Layout/Home';
import WishList from './components/Cart/WishList';
import LoginForm from './components/Layout/LoginForm';
import Checkout from './components/Cart/Checkout';
import SuccessModal from './components/Cart/SuccessModal';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <Header isLoggedIn = { isLoggedIn } setIsLoggedIn = {setIsLoggedIn} />
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm isLoggedIn = { isLoggedIn }setIsLoggedIn = { setIsLoggedIn }/>} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/cart" element={<Cart isLoggedIn = { isLoggedIn } />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success" element={<SuccessModal />} />
      </Routes>
    </CartProvider>
  );
}

export default App;