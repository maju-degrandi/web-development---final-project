
import "../../styles/plantitem.css";

const PlantItem = ({ id, cover, name, price }) => {

    return(
        <li key={id} className='plant-item'>
            <img className='plant-item-cover' src={cover} alt={`${name} cover`}/>
            <span className="plant-name">{name}<br/>$ {Number(price).toFixed(2)}</span>
        </li>
    );
}

export default PlantItem;