import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Item } from '../components/Item';

export const PageItem = () => {
    const { itemId } = useParams();
    console.log(itemId);
    return (
        <>
            <Item id={itemId}/>
        </>
    );
};