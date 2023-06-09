import "../../styles/cart.css";
import { Button } from '../Button';

export const CartItem = ({ updateCart, item, cart, blocked }) => {

    const handleDeleteItem = () => {
        cart = cart.filter((plant) => plant.id != item.id);
        updateCart(cart);
    }
    
    const handleChangeQuantity = (e) => {
        if(Number(e.target.value) <= 0) e.target.value = 1;
        let cartItem = cart.findIndex(i => i.id == item.id);

        if(cartItem > -1){
            cart[cartItem].qtt = Number(e.target.value);
            updateCart(cart);
        }
    }

    return(
        <li key={item.id} className='cart-item'>
            <img className='cart-item-cover' src={item.cover} alt={`${item.name} cover`}/>  
            <span className="cart-item-name">{item.name}<br/>$ {item.price}</span>
            <div className="cart-shop">
                <label htmlFor="quant">QUANTITY:</label>
                { !blocked ? <input name="quant" type="number" min="1" onChange={handleChangeQuantity} id="qtt" value={item.qtt} /> 
                    :
                    <input name="quant" type="number" min="1" onChange={handleChangeQuantity} id="qtt" value={item.qtt} disabled="true"/> 
                }
            </div>
            {!blocked && <Button text="Delete" onClick={handleDeleteItem} className="filled-button" />}
        </li>
    );
}