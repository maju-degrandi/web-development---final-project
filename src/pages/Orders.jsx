import * as React from 'react';
import '../styles/cart.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { OrdersList } from '../components/Orders/OrdersList';
import { orderData } from '../datas/orders';

export const PageOrders = ({user, setUser, plants}) => {

    const [orders, setOrders] = useState();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
        
    }, []);
    
    const handleCheckOrders = (user) => {
        return orderData['Orders'].filter((order) => order.email === user.email);
    }

    useEffect(() =>{
        if(user){
            setOrders(handleCheckOrders(user));
            console.log(orders);
        }
    }, [user]);


    return (
        
        <div id='wrapper' className='checkout'>
            <div id='checkout-title'>
                <h1>My Orders</h1>
            </div>
            <div id='checkout-main'>
                <div className='checkout-items'>
                    <OrdersList orders={orders} plants={plants}/>
                </div>
            </div>
        </div>
    );
};  