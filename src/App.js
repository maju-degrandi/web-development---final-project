import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import {plants} from "./datas/plants";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MyRoutes} from "./Routes";
import * as serviceLS from './services/localStorageUtils'

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
      if (item.id)
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