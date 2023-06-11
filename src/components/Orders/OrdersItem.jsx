import { useEffect, useState } from "react";
import "../../styles/cart.css";

export const OrdersItem = ({ items, plants }) => {
    return(
        items.map((itemObject) => {
            let item = plants['Plants'].find((plant) => plant.id.toString() === itemObject.id.toString());
            // console.log(item.cover);

            return (<li className='cart-item'>
                <div className="card-item-cover">
                    <img className='item-cover' src={item.cover} alt={`${item.name} cover`}/>  
                </div>
                <span className="cart-item-name">{item.name}<br/>$ {item.price}</span>
                <div className="order-shop">
                    <label htmlFor="quantity">QUANTITY: {itemObject.qtt}</label>
                </div>
            </li>)
        })
    );
}