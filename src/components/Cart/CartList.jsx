import * as React from 'react';
import '../../styles/cart.css';
import { Card } from "../Card";
import { CartItem } from '../Cart/CartItem';

export const CartList = ({ updateCart, cart, setCart, blocked}) => {

    return (
        <>
                {   
                    cart ? cart.length > 1 ? cart.map((item) => (
                        item.id &&
                        <ul className='cart-list' key={item.id}>
                            <CartItem updateCart={updateCart} item={item} cart={cart} setCart={setCart} blocked={blocked}/>
                        </ul>
                    ))
                    :
                    <p className='empty'>Your Cart is empty. Go ahead and shop!</p>

                    : 

                    <p>Loading ... </p>

                }
        </>
    );
};  