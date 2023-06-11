import PlantItem from "../components/ShopList/plantItem";
import "../styles/shoplist.css";
import { Link } from 'react-router-dom';

export const PageShopList = ({plants}) => {
    return (    
        <div>
            <ul className="jh-plant-list">
                {plants ?
                    (
                        plants['Plants'].map(({ id, cover, name, water, light, price }) => (
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
                        <p>Não há itens a venda no momento...</p>
                    )
                }
            </ul>
        </div>
    );
}
