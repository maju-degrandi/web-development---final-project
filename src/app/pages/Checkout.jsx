import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaceholderInput } from '../components/Input/FloatInput';
import PaymentScreen from '../components/Checkout/Pay';
import { CartList } from '../components/Cart/CartList';
import { Button } from '../components/Button';

import '../styles/checkout.css'

export const Checkout = ({cart, setCart, updateCart, user}) => {
    const navigate = useNavigate();
    const [qttItems, setQttItens] = useState([]);
    const [country, setCountry] = useState([]);
    const [cep, setCep] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);
    const [street, setStreet] = useState([]);
    const [number, setNumber] = useState([]);
    const [moreInfo, setMoreInfo] = useState([]);
    
    const [discount, setDiscount] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [donePay, setDonePay] = useState(false);
    const [doneShip, setDoneShip] = useState(false);
    
    function getAddressUser(user){
        setCountry(user.address.country);
        setCep(user.address.CEP);
        setState(user.address.state);
        setCity(user.address.city);
        setStreet(user.address.street);
        setNumber(user.address.number);
        setMoreInfo(user.address.obs);
    }
    
    useEffect(()=>{
        if(user){
            getAddressUser(user);
        }
    }, [user]);
    
    useEffect(()=>{
        let qtt = 0;
        if(cart){
            cart.map((item) => {
                if (item.qtt)
                    qtt += parseFloat(item.qtt);
            })
            
            setQttItens(qtt);
        }
    }, [cart]);
    
    function handleCheckoutShip(e){
        e.preventDefault();
        setDoneShip(true);
    }
    
    function handleCheckout(e) {
        if(doneShip && donePay){
            setCart([{subtotal: 0, total: 0, shipping: 0}]);
            
            navigate('/thanks');
        }else {
            //error
        }
    }
    
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
                        
                        <Button type={'submit'} text={'Done'} className={'filled-button checkout-button done'} onClick={handleCheckoutShip}/>
                        
                    </div>
                </div>
                
                <div className='checkout-pay'>
                    <PaymentScreen setDonePay={setDonePay}/>
                </div>
            </div>
            
            <div id='checkout-resume'>
                <div className='flex'>
                    <p className='type'>Items({qttItems})</p>
                    <p className='price'>R$
                        {
                            parseFloat(cart[0].subtotal).toFixed(2)
                        }
                    </p>
                </div>
                <div className='flex'>
                    <p className='type'>Shipping</p>
                    <p className='price'>R$
                        {
                            Number.parseFloat(shipping).toFixed(2)
                        }
                    </p>
                </div>
                <div className='flex'>
                    <p className='type'>Discount</p>
                    <p className='price'>R$
                        {
                            Number.parseFloat(discount).toFixed(2)
                        }
                    </p>
                </div>
                
                <hr />
                
                <div className='flex order-total'>
                    <p className='type'>Order Total</p>
                    <p className='price'>R$
                        {
                            Number.parseFloat(cart[0].subtotal+shipping-discount).toFixed(2)
                        }
                    </p>
                </div>
                
                <div className='flex full-line'>
                    <Button text="Pay" className="filled-button full checkout-button" onClick={handleCheckout}/>
                </div>
            </div>
        </div>
    );
};