import * as React from 'react';
import { useEffect, useState } from 'react';

import { OrdersList } from '../../components/Orders/OrdersList';
import { orderData } from '../../datas/orders';
import { Button } from '../../components/Button';

import '../../styles/cart.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const PageOrders = ({user, setUser, plants}) => {

    const [orders, setOrders] = useState(null);

    async function handleGetOrders(user){

        try{
            console.log(user._id);
            const orders = await axios.get(`http://localhost:8080/order/${user._id}`);
            if(orders.status === 200){                
                setOrders(orders.data);
                console.log(orders.data);
            }
            
            
        } catch(error){
            setOrders({});
        }
    }
    
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setUser(foundUser);
        }
        
        handleGetOrders(user);
        
    }, []);
    
    // useEffect(()=>{
    //     console.log(orders);
        
    // }, [orders]);
    
    // const handleCheckOrders = (user) => {
    //     return orderData['Orders'].filter((order) => order.email === user.email);
    // }
    
    // useEffect(() =>{
    //     if(user){
    //         // setOrders(handleCheckOrders(user));
    //         console.log(orders);
    //     }
    // }, [user]);


    return (
        <>
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
        <div className='profile-button'>
            <Link to={'/user'}>
                <Button text={'Back'} className={'unfilled-button'}></Button>
            </Link>
        </div>
        </>
    );
};  