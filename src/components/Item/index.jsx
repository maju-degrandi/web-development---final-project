import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import { plants } from "../../datas/plants";
import CareScale from "./carescale";

import '../../styles/item.css'
import BackgroundImage from "../../assets/flor-fundo2.png";
import { Link } from 'react-router-dom';

export const Item = ( {updateCart, id, cart, setCart} ) => {
    const [src, setSrc] = useState([]);
    const [title, setTitle] = useState([]);
    const [desc, setDesc] = useState([]);
    const [price, setPrice] = useState([]);
    const [plant, setPlant] = useState(null);
    const [stock, setStock] = useState([]);
    const [qtt, setQtt] = useState(1);
    
    useEffect(() =>{
        setTimeout(() => {
            setPlant(plants['Plants'].find(plant => Number(plant.id) === Number(id)));
        }, 1000);
    }, [id]);
    
    useEffect(() => {
        if(plant){
            setSrc(plant.cover); 
            setTitle(plant.name);
            setDesc([plant.description]);
            setPrice(Number(plant.price).toFixed(2));
            setStock(plant.stock);
        }
    }, [plant]);
    
    const handleClick = (type, amount, e) => {
        let string_alert = 'This plant requires a ';
        if(amount === 3) string_alert += 'large';
        else if(amount === 2) string_alert += 'medium';
        else string_alert += 'small';
        string_alert += ' amount of ' + type;
    
        alert(string_alert);
    }

    const handleAddToCart = () => {
        let item = cart.findIndex(i => i.id == id);

        if(item > -1){
                cart[item].qtt += qtt;
                updateCart(cart);
            }else{
                cart[0].subtotal += Number(plant.price) * qtt; 
                setCart([...cart, { ...plant, qtt: qtt }]);
        }
    }

    const handleChangeQuantity = (e) => {
        setQtt(Number(e.target.value));
    }

    return (
        <>           
            <div className="item" id="wrapper">
                <figure>
                    <img id="background-image2" src={BackgroundImage} alt='Imagem de uma planta.'/>
                </figure>
                    
                {plant ? (
                    <>
                    <div className='imageItem'>
                        <img id="item-image" src={src} alt={title}/>
                    </div>
                    <div className="item-page">
                        <div id="item-desc">
                            <h1 id="item-header">{title}</h1>
                            <h1 id="item-header"> ${price}</h1><br/>
                            {desc.map((linha, index) => (
                                <h2 key={index}>{linha}</h2>
                                ))}    

                            <div className="plant-info">
                                <div className="plant-info"  onClick={() => handleClick("light", plant.light)}>
                                    <CareScale careType="light" scaleValue={plant.light} />
                                </div>
                                <div className="plant-info"  onClick={() => handleClick("water", plant.water)}>
                                    <CareScale careType="water" scaleValue={plant.water} />
                                </div>
                            </div>

                            <span className='plant-info'>{stock} in stock</span>
                        </div>
                        
                        <div id="shop">
                            <label htmlFor="quant">QUANTITY:</label>
                            <input name="quant" type="number" min="1" id="qtt" placeholder="1" onChange={handleChangeQuantity}/>
                            <Link to='/cart'>
                                <Button className="filled-button buy-button" onClick={handleAddToCart} text="ADD TO CART"/>
                            </Link>
                        </div>
                    </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )
                }
            </div>
        </>
    );
};