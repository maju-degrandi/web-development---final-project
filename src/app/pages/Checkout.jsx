import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlaceholderInput } from '../components/Input/FloatInput';
import PaymentScreen from '../components/Checkout/Pay';
import { CartList } from '../components/Cart/CartList';
import { Button } from '../components/Button';
import { updateCartInLocalStorage } from '../services/localStorageUtils';
import axios from 'axios';

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
        setCep(user.address.cep);
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

    useEffect(()=>{
        cart[0].total = cart[0].subtotal + shipping - discount;
        cart[0].shipping = shipping;
        setCart(cart);
        updateCartInLocalStorage(cart);
    }, [shipping])
    
    function handleCheckoutShip(e){
        e.preventDefault();
        setShipping(5.32);
        setDoneShip(true);
    }

    const handleCreateOrder = async (e, user, cart) => {
        e.preventDefault();
        const newOrder = {
            "user": user._id,
            "total": cart[0].total
        }

        console.log(newOrder);

        try{
            const response = await axios.post(`http://localhost:8080/order/add`, newOrder);
            return response.data._id;
        } catch(error){
            alert('Something went wrong.');
            console.log(error)
        }
    }

    const handleCreateItemOrder = async (e, cart, orderId) => {
        e.preventDefault();
        cart.forEach(async function(item, index){
            if(index > 0){
                console.log(item)
                const newItemOrder = {
                    "order": orderId,
                    "item": item._id,
                    "qtt": item.qtt
                }
    
                console.log(newItemOrder);
    
                try{
                    const newitem = await axios.post(`http://localhost:8080/item-order/add`, newItemOrder);
                    console.log(newitem);

                    const update = await axios.put(`http://localhost:8080/plant/decrease-stock/${item._id}`, {"qtt": item.qtt});
                    console.log(update);

                } catch(error){
                    alert('Something went wrong.');
                    console.log(error);
                }
            }
        })
    }
    
    async function handleCheckout(e) {
        if(doneShip && donePay){
            // Create a order
            const orderId = await handleCreateOrder(e, user, cart);
            console.log(orderId);
            // Create each item of the cart in Item Order
            let response = null;
            if(orderId)
                response = handleCreateItemOrder(e, cart, orderId);

            if(response){
                setCart([{subtotal: 0, total: 0, shipping: 0}]);
                navigate('/thanks');
            }

        }else if(!donePay){
            alert("Please finish the payment");
        }else{
            alert("Please finish the shipping");
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
                    <PaymentScreen setDonePay={setDonePay} setDiscount={setDiscount}/>
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
