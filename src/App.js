import {plants} from "./datas/plants";
import Routes from "./Routes";
import { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './App.css';

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [{subtotal: 0, total: 0, shipping: 0}]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const updateCart = (cart) => {
    console.log(cart);
    cart[0].subtotal = 0;
    cart.forEach((item) => {
        if(item.id){
            cart[0].subtotal += item.price * item.qtt;
            console.log(item.qtt);
        }
    })
    setCart([...cart]);
  }

  const [user, setUser] = useState({});

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    
    if(loggedUser && loggedUser.length > 2){
      setTimeout(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
      }, 100);
    }
  }, []);
  
  useEffect(() => {
    if(user && JSON.stringify(user).length > 2)
      localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  
  const [plantsStock, setPlantsStock] = useState(null); 
    
  useEffect(() => {
    // setPlantsStock(plants);
    if(!localStorage.getItem('stock'))
      setTimeout(() => {
          setPlantsStock(plants);
      }, 100);
    else
      setPlantsStock(JSON.parse(localStorage.getItem('stock')))
  }, []);
    
  useEffect(() => {
    if (plantsStock){
      localStorage.setItem("stock", JSON.stringify(plantsStock));
    }
  }, [plantsStock]);  
  
  return (
    <Router>
      <div className='wrapper'>
        <Header user={user} setUser={setUser}/>
        <main><Routes 
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