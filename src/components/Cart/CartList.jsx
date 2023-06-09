import * as React from 'react';
import '../../styles/cart.css';
import { Card } from "../Card";
import { CartItem } from '../Cart/CartItem';

export const CartList = ({cart, setCart}) => {

    return (
        <>
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
        </>
    );
};  