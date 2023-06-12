import "../../styles/cart.css";
import { Button } from '../Button';
import { Input } from "../Input";

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
            <span className="cart-item-name">{item.name}<br/>$ {item.price}</span>
            <div className="cart-shop">
                <label htmlFor="quant">QUANTITY:</label>
                { !blocked ? 
                    <Input type={'number'} name={'quant'} min={'1'} max={item.stock} value={item.qtt}  onChange={handleChangeQuantity}/>
                    :
                    <Input className='disable' type={'number'} name={'quant'} min={'1'} max={item.stock} value={item.qtt}  onChange={handleChangeQuantity}/>
                }
            </div>
            {!blocked && <Button text="Delete" onClick={handleDeleteItem} className="filled-button" />}
        </li>
    );
}