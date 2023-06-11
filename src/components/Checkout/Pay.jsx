import React, { useState, useEffect } from 'react';
import {PlaceholderInput} from '../Input/FloatInput'
import '../../styles/pay.css'
import { Button } from '../Button';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardLastName, setCardLastName] = useState('');
  const paymentInfo = {
    card: {
      method: false,
      cardNumber: cardNumber,
      expiryDate: expiryDate,
      cvv: cvv,
      cardName: cardName,
      cardLastName: cardLastName
    },
    pix: {
      method: false
    }
  };
     
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePaymentSubmit = (event) => {
    event.preventDefault();
    
    if(paymentMethod === 'card')
      paymentInfo.card.method = true;
    else
      paymentInfo.pix = true;

      localStorage.setItem("card", JSON.stringify(paymentInfo));  
  };

  return (
    <div>
      <h2>Pay with</h2>
      <form onSubmit={handlePaymentSubmit} className='form-pay'>
        <div>
          <label className='radio-label'>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            
            <span>Pagamento com Cartão</span>
          </label>
        </div>
        
        {paymentMethod === 'card' && (
          <div className='form-size-float'>
            <PlaceholderInput title={'Card Number'} type={'text'} size={'6'} value={cardNumber} setValue={setCardNumber}/>
            
            <PlaceholderInput title={'Expire Date'} type={'text'} size={'3'} value={expiryDate} setValue={setExpiryDate}/>
            
            <PlaceholderInput title={'CVV'} type={'text'} size={'3'} value={cvv} setValue={setCvv}/>
            
            <PlaceholderInput title={'Name'} type={'text'} size={'3'} value={cardName} setValue={setCardName}/>
            
            <PlaceholderInput title={'Last Name'} type={'text'} size={'3'} value={cardLastName} setValue={setCardLastName}/>
          </div>
        )}
        <div>
          <label>
            <input
              type="radio"
              value="pix"
              checked={paymentMethod === 'pix'}
              onChange={handlePaymentMethodChange}
            />
            Pagamento com Pix
          </label>
        </div>
        <Button type={'submit'} text={'Done'} className={'filled-button checkout-button done'}/>
      </form>
    </div>
  );
};

export default PaymentScreen;
