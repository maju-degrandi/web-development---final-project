import React, { useEffect, useState } from 'react'
import '../../styles/item.css'
import { Button } from '../Button';
import BackgroundImage from "../../assets/flor-fundo2.png";

export const Item = ( {id} ) => {
    const [src, setSrc] = useState([]);
    const [title, setTitle] = useState([]);
    const [desc, setDesc] = useState([]);
    const [price, setPrice] = useState([]);
    
    
    useEffect(() => {
        if (id === "123"){
            const img = 'https://cactariohorst.com.br/images/resize/800/null/0005916.jpg';
            setSrc(img); 
            setTitle("ECHEVERIA \n 123");
            setDesc(["'Perle von Nurnberg' is a beautiful evergreen gray succulent that turns pink and purple under full sun. It has pink flowers with yellow interiors that bloom in the summer.\nIf you are searching for an uncomplaining plant with cherubic appeal and beautiful form and color, look no further than Perle von Nurnberg Echeveria. This little succulent produces pups and will eventually grow as big as a dinner plate with good light and care. Warm region gardeners can add this plant to their landscape, while the rest of us should enjoy them in the summer and bring them indoors for winter."]);
            setPrice("7,00");
        };
    }, [id]);
    
    
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