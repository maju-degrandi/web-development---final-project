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
            <div className="card-item-cover">
                <img className='item-cover' src={item.cover} alt={`${item.name} cover`}/>  
            </div>
            <div>
                <span className="cart-item-name" data-testid={'Item ' + 1} >{item.name} </span> 
                <br/>
                <span className="cart-item-name">$ {item.price}</span>
            </div>
            <div className="cart-shop">
                <label htmlFor="quant">QUANTITY:</label>
                { !blocked ? <input name="quant" type="number" min="1" onChange={handleChangeQuantity} id="qtt" value={item.qtt} /> 
                    :
                    <input name="quant" type="number" min="1" onChange={handleChangeQuantity} id="qtt" className="disable" value={item.qtt} disabled="true"/> 
                }
            </div>
            {!blocked && <Button text="Delete" onClick={handleDeleteItem} className="filled-button" />}
        </li>
    );
}