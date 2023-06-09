import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from "./Routes";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [cart, setCart] = useState(
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return (
    <Router>
      <div className='wrapper'>
        <Header />
        <main>
          <Routes cart={cart} setCart={setCart}/>
        </main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;