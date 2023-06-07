import {plants} from "../datas/plants";
import PlantItem from "../components/ShopList/plantItem";
import "../styles/shoplist.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";

export const PageShopList = () => {
    const [plant, setPlants] = useState(null);
    
    
    useEffect(() => {
        setTimeout(() => {
            setPlants(plants);
        }, 100);
    }, [])
    
    return (    
        <div>
            <ul className="jh-plant-list">
                {plant ?
                    (
                        plant['Plants'].map(({ id, cover, name, water, light, price }) => (
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
                                <div className="button-add">
                                        <button className="add"> Shop Now </button>
                                </div>
                            </Link>
                        
                        </div>))) : 
                    (
                        <p>Carregando...</p>
                    )
                }
            </ul>
        </div>
    );
}
