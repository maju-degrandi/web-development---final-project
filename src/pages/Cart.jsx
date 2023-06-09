import * as React from 'react';
import '../styles/cart.css';
import { Card } from "../components/Card";
import { CartItem } from '../components/Cart/CartItem';
import { CartList } from '../components/Cart/CartList';

export const PageCart = ({cart, setCart}) => {

    return (
        <>
            {/* <h1 className='title'>Cart</h1> */}
            <Card>
                <CartList cart={cart} setCart={setCart}/>
            </Card>
            
            {/* <div className=''>
                Subtotal:
            </div> */}
        </>
    );
};  