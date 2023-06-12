import * as React from 'react';
import '../../styles/cart.css';
import { OrdersItem } from '../Orders/OrdersItem';
import { Link } from 'react-router-dom';
import { Button } from '../Button';

export const OrdersList = ({ orders, plants }) => {
    
    return (
        <>
                {   
                    orders ? orders.length > 0 ? orders.map((order) => (
                        <ul className='order-list'>
                            <div className='order-info'>
                                <p>Id: {order.id} </p> <p> Date: {order.date}</p>
                            </div>
                            <OrdersItem items={order.items} plants={plants}/>
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