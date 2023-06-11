import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [{subtotal: 0, total: 0, shipping: 0}]
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  function updateCart(cart) {
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

  return (
    <Router>
      <div className='wrapper'>
        <Header user={user} setUser={setUser}/>
        <main>
          <Routes user={user} setUser={setUser} updateCart={updateCart} cart={cart} setCart={setCart}/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;