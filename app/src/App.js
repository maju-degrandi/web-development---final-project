import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Header } from './components/Header/index.jsx';
import { Footer } from './components/Footer/index.jsx';
import { MyRoutes } from "./Routes.js";
import * as serviceLS from './services/localStorageUtils.js'

import './App.css';

function App() {
  const [cart, setCart] = useState(serviceLS.getCartFromLocalStorage());
  const [user, setUser] = useState(serviceLS.getUserFromLocalStorage());

  useEffect(() => {
    serviceLS.updateCartInLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    if (serviceLS.getUserFromLocalStorage())
      serviceLS.updateUserInLocalStorage(user);
  }, [user]);
  
  const updateCart = (cart) => {
    cart[0].subtotal = 0;
    cart.forEach((item) => {
      if (item._id)
        cart[0].subtotal += item.price * item.qtt;
    });
    setCart([...cart]);
  };
  
  return (
    <Router>
      <div className='wrapper'>
        <Header user={user} setUser={setUser}/>
        <main>
          <MyRoutes 
            cart={cart} updateCart={updateCart} setCart={setCart} 
            user={user} setUser={setUser}
          />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;