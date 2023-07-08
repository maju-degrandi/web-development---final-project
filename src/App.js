import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {plants} from "./app/datas/plants.js";
import { Header } from './app/components/Header/index.jsx';
import { Footer } from './app/components/Footer/index.jsx';
import { MyRoutes } from "./Routes.js";
import * as serviceLS from './app/services/localStorageUtils.js'

import './App.css';

function App() {
  const [cart, setCart] = useState(serviceLS.getCartFromLocalStorage());
  const [user, setUser] = useState(serviceLS.getUserFromLocalStorage());
  const [plantsStock, setPlantsStock] = useState(serviceLS.getPlantsStockFromLocalStorage());

  useEffect(() => {
    serviceLS.updateCartInLocalStorage(cart);
  }, [cart]);

  useEffect(() => {
    if (serviceLS.getUserFromLocalStorage())
      serviceLS.updateUserInLocalStorage(user);
  }, [user]);

  useEffect(() => {
    if (!localStorage.getItem('stock'))
      setTimeout(() => {
        setPlantsStock(plants);
      }, 100);
    else
      setPlantsStock(serviceLS.getPlantsStockFromLocalStorage());
  }, []);

  useEffect(() => {
    if (plantsStock) {
      serviceLS.updatePlantsStockInLocalStorage(plantsStock);
    }
  }, [plantsStock]);
  
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
            plant={plantsStock} setPlant={setPlantsStock}
            user={user} setUser={setUser}
          />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;