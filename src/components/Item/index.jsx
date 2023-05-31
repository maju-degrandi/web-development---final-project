import React from 'react'
import '../../styles/item.css'
import { Button } from '../Button';
import BackgroundImage from "../../assets/flor-fundo2.png";
export const Item = ({src, title, desc, price}) => {
    desc = desc.split('\\n');
    return (
        <>
    
            <div className="item" id="wrapper">
                <img id="background-image2" src={BackgroundImage}/>
                
                <img id="item-image" src={src}/>
                <div className="item-page">
                    <div id="item-desc">
                        <h1 id="item-header">{title}</h1>
                        <h1 id="item-header"> ${price}</h1><br/>
                        {desc.map((linha, index) => (
                            <h2 key={index}>{linha}</h2>
                        ))}    
                    </div>
                    <div id="shop">
                        <label htmlFor="quant">QUANTITY:</label>
                        <input name="quant" type="number" min="1" id="qtt" placeholder="1" />
                        <Button id="buy-button" className="filled-button" text="ADD TO CART"/>
                    </div>
                </div>
            </div>
        </>
    );
};