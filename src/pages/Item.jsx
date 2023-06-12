import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Item } from '../components/Item';

export const PageItem = ({updateCart, cart, setCart, plants}) => {
    const { itemId } = useParams();
    return (
        <>
            <Item id={itemId} cart={cart} setCart={setCart} updateCart={updateCart} plants={plants}/>
        </>
    );
};