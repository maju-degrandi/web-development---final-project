import * as React from 'react';
import '../styles/cart.css';
import { CartList } from '../components/Cart/CartList';
import { Button } from '../components/Button';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const PageCart = ({user, updateCart, cart, setCart}) => {
    const [qttItems, setQttItens] = useState([]);    
    const navigate = useNavigate();


    useEffect(()=>{
        let qtt = 0;
        cart.map((item) => {
            if(item.qtt) qtt += item.qtt;
        })
        
        setQttItens(qtt);
    }, [cart]);

    function handleCheckout(){
        if(JSON.stringify(user) != '{}'){
            navigate("/checkout");
        }else{
            navigate("/login");
        }
    }

    return (
        
        <div id='wrapper' className='checkout'>
            <div id='checkout-title'>
                <h1>Cart</h1>
            </div>
            <div id='checkout-main'>
                <div className='checkout-items'>
                    <CartList updateCart={updateCart} cart={cart} setCart={setCart} blocked={false}/>
                </div>
            </div>
            
            { Number.parseFloat(cart[0].subtotal) > 0 ?
                <>
                <div id='checkout-resume'>
                <div className='flex'>
                        <p className='type'>Items({qttItems})</p>
                        <p className='price'>R$
                            {
                                Number.parseFloat(cart[0].subtotal).toFixed(2)
                            }
                        </p>
                    </div>
                    <div className='flex full-line'>
                        <Button text="Checkout" onClick={handleCheckout}/>
                    </div>
                </div>
                </>
                : 
                <>
                <div id='checkout-resume'>
                    <div className='flex full-line'>
                        <Link to={'/shoplist'}>
                            <Button text="Go Shop" onClick={handleCheckout}/>
                        </Link>
                    </div>
                </div>
                </>
            }
        </div>
    );
};  