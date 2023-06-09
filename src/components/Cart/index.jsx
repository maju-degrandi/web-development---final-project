import "../../styles/cart.css";
import { Button } from '../Button';

export const CartItem = ({ item, setCart, cart }) => {

    const handleDeleteItem = () => {
        setCart(
            cart.filter((plant) => plant.id != item.id)
        );
    }
    
    const handleChangeQuantity = (e) => {
        let cartItem = cart.findIndex(i => i.id == item.id);

        if(cartItem > -1){
                cart[cartItem].qtt = Number(e.target.value);
                setCart([...cart]);
        }
    }

    return(
        <li key={item.id} className='cart-item'>
            <img className='cart-item-cover' src={item.cover} alt={`${item.name} cover`}/>  
            <span className="cart-item-name">{item.name}<br/>$ {item.price.toFixed(2)}</span>
            <div className="cart-shop">
                <label htmlFor="quant">QUANTITY:</label>
                <input name="quant" type="number" min="1" onChange={handleChangeQuantity} id="qtt" value={item.qtt} />
            </div>
            <Button text="Delete" onClick={handleDeleteItem} className="filled-button" />
        </li>
    );
}