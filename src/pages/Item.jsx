import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Item } from '../components/Item';

export const PageItem = ({cart, setCart}) => {
    const { itemId } = useParams();
    return (
        <>
            <Item id={itemId} cart={cart} setCart={setCart}/>
        </>
    );
};