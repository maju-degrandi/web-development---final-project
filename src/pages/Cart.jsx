import * as React from 'react';
import '../styles/cart.css';
import { Card } from "../components/Card";
import { CartList } from '../components/Cart/CartList';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export const PageCart = ({updateCart, cart, setCart}) => {

    return (
        
        <div id='wrapper' className='cart'>
            <div id='checkout-title'>
                <h1>Cart</h1>
            </div>
            <Card>
                <CartList updateCart={updateCart} cart={cart} setCart={setCart} blocked={false}/>
            </Card>
            
            <div id='checkout-resume'>
                <h2>Subtotal: {cart[0].subtotal}</h2>
                <Link to='/checkout'>
                    <Button text="Checkout"/>

                </Link>
            </div>
        </div>
    );
};  