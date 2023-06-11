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

  
  const [plant, setPlant] = useState(null); 
    
  useEffect(() => {
    // setPlant(plants);
    if(!localStorage.getItem('stock'))
      setTimeout(() => {
          setPlant(plants);
      }, 100);
    else
      setPlant(JSON.parse(localStorage.getItem('stock')))
  }, []);
    
  useEffect(() => {
    if (plant){
      localStorage.setItem("stock", JSON.stringify(plant));
    }
  }, [plant]);  
  
  return (
    <Router>
      <div className='wrapper'>
        <Header user={user} setUser={setUser}/>
        <main><Routes 
            cart={cart} updateCart={updateCart} setCart={setCart} 
            plant={plant} setPlant={setPlant}
            user={user} setUser={setUser}
          />
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;