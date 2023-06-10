import * as React from 'react';
import '../styles/cart.css';
import { Card } from "../components/Card";
import { CartList } from '../components/Cart/CartList';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const PageCart = ({updateCart, cart, setCart}) => {
    const [qttItems, setQttItens] = useState([]);

    useEffect(()=>{
        let qtt = 0;
        cart.map((item) => {
            if(item.qtt) qtt += item.qtt;
        })
        
        setQttItens(qtt);
    }, [cart]);

    return (
        
        <div id='wrapper' className='checkout'>
            <div id='checkout-title'>
                <h1>Cart</h1>
            </div>
            <div id='checkout-main'>
                <div className='checkout-items'>
                    <CartList updateCart={updateCart} cart={cart} setCart={setCart} blocked={false}/>
                </div>
            </div>
            
            <div id='checkout-resume'>
            <div className='flex'>
                    <p className='type'>Items({qttItems})</p>
                    <p className='price'>R$
                        {
                            Number.parseFloat(cart[0].subtotal).toFixed(2)
                        }
                    </p>
                </div>
                
                <div className='flex full-line'>
                    <Link to='/checkout'>
                        <Button text="Checkout"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};  