import "../../styles/cart.css";
import { useEffect, useState } from 'react';
import axios from "axios";
import { OrderSingleItem } from "./OrderSingleItem.jsx";


export const OrdersItem = ({ order_id }) => {

    const [items, setItems] = useState(null);

    async function handleGetItems(order_id){
        try{
            const itemsResponse = await axios.get(`http://localhost:8080/item-order/${order_id}`);
            
            if(itemsResponse.status === 200){
                setItems(itemsResponse.data);
            }

        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        handleGetItems(order_id);
    }, [order_id]);

    return(
        items && items.map((itemObject) => {
            console.log(itemObject.qtt);
            return <OrderSingleItem item_id={itemObject.item} item_qtt={itemObject.qtt} />
        })
    );
}