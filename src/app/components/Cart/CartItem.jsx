import "../../styles/cart.css";
import { Button } from '../Button';
import { Input } from "../Input";

export const CartItem = ({ updateCart, item, cart, blocked }) => {

    const handleDeleteItem = () => {
        cart = cart.filter((plant) => plant._id !== item._id);
        updateCart(cart);
    }
    
    const handleChangeQuantity = (e) => {
        if(Number(e.target.value) <= 0) e.target.value = 1;
        let cartItem = cart.findIndex(i => i._id === item._id);

        if(cartItem > -1){
            cart[cartItem].qtt = Number(e.target.value);
            updateCart(cart);
        }
    }

    return(
        <li key={item._id} className='cart-item'>
            <div className="image-title">
                <div className="card-item-cover">
                    <img className='item-cover' src={item.cover} alt={`${item.name} cover`}/>  
                </div>
                <div className="title-price">
                    <span className="cart-item-name" data-test_id={'Item ' + 1} >
                        { item.name }
                    </span> 
                    <br/>
                    <span className="cart-item-name">$ {item.price*item.qtt}</span>
                </div>
            </div>
            
            <div className="cart-shop-button">
                <div className="cart-shop">
                    <label htmlFor="quant">QUANTITY:</label>
                    { !blocked ? 
                        <input type="number" className="number" name="quant" min={1} 
                            onKeyDown={(e) => e.preventDefault()}
                            onWheel={(e) => e.preventDefault()}
                            max={item.stock} value={item.qtt} onChange={handleChangeQuantity}>    
                        </input>
                        :
                        <Input className='disable' type={'number'} name={'quant'} min={1} 
                        max={item.stock} value={item.qtt}  onChange={handleChangeQuantity}/>
                    }
                </div>
                {!blocked && 
                <Button text="Delete" onClick={handleDeleteItem} className="filled-button" />}
            </div>
        </li>
    );
}