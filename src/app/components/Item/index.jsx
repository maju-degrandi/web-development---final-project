import React, { useEffect, useState } from 'react'
import { Button } from '../Button';
import CareScale from "./carescale";
import axios from "axios";

import '../../styles/item.css'
import BackgroundImage from "../../assets/flor-fundo2.png";
import { Link } from 'react-router-dom';
import { Input } from '../Input';

export const Item = ( {updateCart, id, cart, setCart} ) => {
    const [src, setSrc] = useState([]);
    const [title, setTitle] = useState([]);
    const [desc, setDesc] = useState([]);
    const [price, setPrice] = useState([]);
    const [plant, setPlant] = useState(null);
    const [stock, setStock] = useState([]);
    const [qtt, setQtt] = useState(1);

    async function handlePlantById(){
        try{
            console.log(id)
            const response = await axios.get(`http://localhost:8080/plant/${id}`);
            if(response.status === 200){
                console.log(response.data);
                setPlant(response.data[0]);
            }
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        handlePlantById();
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
        let item = cart.findIndex(i => i._id === id);

        if(item > -1){
                cart[0].subtotal += plant.price * qtt; 
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
                    <figure className='imageItem'>
                        <img id="item-image" src={src} alt={title}/>
                    </figure>
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
                            <div className='shop-qtt'>
                                <label htmlFor="quant">QUANTITY:</label>
                                <Input type={'number'} name={'quant'} min={'1'} max={stock} value={qtt} setValue={setQtt} onChange={handleChangeQuantity}/>
                            </div>
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