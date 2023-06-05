
import "../../styles/plantitem.css"

const PlantItem = ({ id, cover, name, water, light, price }) => {

    return(
        <li key={id} className='plant-item'>
            <img className='plant-item-cover' src={cover} alt={`${name} cover`}/>
            <span className="plant-name">{name}<br/>$ {price.toFixed(2)}</span>
        </li>
    )
}

export default PlantItem