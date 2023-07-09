import { useEffect, useState } from 'react';
import '../../styles/cart.css';
import { OrdersItem } from '../Orders/OrdersItem';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

export const OrdersList = ({ orders }) => {
    
    return (
        <>
                {   
                    orders ? orders.length > 0 ? orders.map((order) => (
                        <ul className='order-list' key={order._id}>
                            <div className='order-info'>
                                <p>Id: {order._id} </p> <p> Date: {order.date.split('T')[0]}</p>
                            </div>
                            <OrdersItem order_id={order._id}/>
                            <p className='order-total'>Valor Total: {order.total}</p>
                        </ul>
                    ))
                    :
                        <>
                            <p className='empty'>You don't have any orders</p>
                            <br />
                            <Link to='/shoplist'><Button text='Shop!' className='filled-button'/></Link>
                        </>
                    : 
                    <p>Loading ... </p>

                }
        </>
    );
};  