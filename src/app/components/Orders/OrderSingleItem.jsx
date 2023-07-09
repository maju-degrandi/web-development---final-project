import { useEffect, useState } from 'react';
import axios from "axios";

export const OrderSingleItem = ({ item_id, item_qtt }) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAa");

    const [item, setItem] = useState(null);

    async function handleGetItem(item_id){
        try{
            const item = await axios.get(`http://localhost:8080/plant/${item_id}`);
            
            if(item.status === 200){
                setItem(item.data);
            }

        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        handleGetItem(item_id);
    }, [item_id]);

    return(
            item &&
                <li className='cart-item'>
                    <div className="card-item-cover">
                        <img className='item-cover' src={item.cover} alt={`${item.name} cover`}/>  
                    </div>
                    <span className="cart-item-name">{item.name}<br/>$ {item.price}</span>
                    <div className="cart-shop">
                        <label htmlFor="quantity">QUANTITY: {item_qtt}</label>
                    </div>
                </li>
    );
}