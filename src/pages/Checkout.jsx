import React, { useState } from 'react';
import '../styles/checkout.css'
import { PlaceholderInput } from '../components/Input/FloatInput';
import PaymentScreen from '../components/Checkout/Pay';
import { CartList } from '../components/Cart/CartList';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Checkout = ({cart, setCart, updateCart}) => {
    const [country, setCountry] = useState([]);
    const [cep, setCep] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [street, setStreet] = useState([]);
    const [number, setNumber] = useState([]);
    const [moreInfo, setMoreInfo] = useState([]);
    
    return (
        <div id='wrapper' className='checkout'>
            <div id='checkout-title'>
                <h1>Check<br/>out</h1>
            </div>
            
            <div id='checkout-main'>
                <div className='checkout-items'>
                    <h2>Items</h2>
                    <CartList updateCart={updateCart} cart={cart} setCart={setCart} blocked={true}/>
                    
                </div>
                
                <div id='checkout-ship-to'>
                <h2>Ship to</h2>
                    <div className='form-size-float'>
                        <div className='size-3 full-line'>
                            <PlaceholderInput title="Country" type="text" size='10' value={country} setValue={setCountry}/>
                        </div>
                        <PlaceholderInput title="CEP" type="text" size='3' value={cep} setValue={setCep}/>
                        <PlaceholderInput title="State" type="text" size='3' value={state} setValue={setState}/>
                        <PlaceholderInput title="City" type="text" size='3' value={city} setValue={setCity}/>
                        <PlaceholderInput title="Street address" type="text" size='6' value={street} setValue={setStreet}/>
                        <PlaceholderInput title="Number" type="text" size='3' value={number} setValue={setNumber}/>
                        <PlaceholderInput title="More informations" type="text" size='10' value={moreInfo} setValue={setMoreInfo}/>
                        
                        <Button type={'submit'} text={'Done'}/>
                        
                    </div>
                </div>
                
                <div className='checkout-pay'>
                    <PaymentScreen/>
                </div>
            </div>
            
            <div id='checkout-resume'>
                <h2>Subtotal: {cart[0].subtotal}</h2>
                <Link to='/'>
                    <Button text="Confirm" className="filled-button"/>
                </Link>
            </div>
        </div>
    );
};
