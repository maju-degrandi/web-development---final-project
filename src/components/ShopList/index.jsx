import { plants } from "../../datas/plants";
import PlantItem from "./plantItem";
import "../../styles/shoplist.css";
import { Link } from 'react-router-dom';

export const ShopList = () => {
    return (
        <div>
            <ul className="jh-plant-list">
                {plants.map(({ id, cover, name, water, light, price }) => (
                    <div className="plant" key={id}>
                        <PlantItem 
                            id={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        <Link to={'/item/' + id}>
                            <button className="add"> Shop Now </button>
                        </Link>

                    </div>
                    ))}
            </ul>
        </div>
    );
}
