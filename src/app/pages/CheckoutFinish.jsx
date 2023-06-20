import React from 'react';
import { Link } from 'react-router-dom';

export const ThankYouPage = () => {
  return (
    <div className="checkout thanks">
      <div id="checkout-title">
        <h1>Thank You!</h1>
      </div>
      
      <div className="thank-you-message">
        <p>Thank you for shopping with us :)</p> 
        <p>
          <Link to="/">
            Click here
          </Link>{' '}
          to go home.
        </p>
      </div>
    </div>
  );
};
