import * as React from 'react';
import '../styles/cart.css';
import { Card } from "../components/Card";
import { CartItem } from '../components/Cart';

export const PageCart = ({cart, setCart}) => {

    return (
        <>
            {/* <h1 className='title'>Cart</h1> */}
            <Card>
                {   
                    cart ? cart.length > 0 ? cart.map((item) => (

                        <ul className='cart-list' key={item.id}>
                            <CartItem item={item} cart={cart} setCart={setCart}/>
                        </ul>
                    ))
                    :
                    <p>Your Cart is empty. Go ahead and shop!</p>

                    : 

                    <p>Loading ... </p>

                }
            </Card>
            {/* <div className=''>
                Subtotal:
            </div> */}
        </>
    );
};  