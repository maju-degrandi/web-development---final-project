import * as React from 'react';
import '../../styles/cart.css';
import { CartItem } from '../Cart/CartItem';

export const CartList = ({ updateCart, cart, setCart, blocked}) => {

    return (
        <>
                {   
                    cart ? cart.length > 1 ? cart.map((item) => (
                        item._id && item.stock > 0 &&
                        <ul className='cart-list' key={item._id}>
                            <CartItem updateCart={updateCart} item={item} cart={cart} blocked={blocked}/>
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