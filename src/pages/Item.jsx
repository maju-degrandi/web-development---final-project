import * as React from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
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