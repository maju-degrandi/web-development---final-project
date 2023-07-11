import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/shoplist.css";

export const ThankYouPage = () => {
  return (
   
    <div className="empty">
      <div className="checkout thanks">
        <div id="checkout-title">
          <h1>Thank You!</h1>
        </div>
        
        <div className="thank-you-message">
          <p>Thank you for shopping with us :)</p> 
          <p>Click <Link to="/"  className="link">
               here
            </Link>{' '}
            to go home.
          </p>
        </div>
      </div>
    </div>
  );
};
