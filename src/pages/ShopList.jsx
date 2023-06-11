import PlantItem from "../components/ShopList/plantItem";
import "../styles/shoplist.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const PageShopList = ({user, plants}) => {
    const [plant, setPlants] = useState(null);
    const [ search, setSearchParams] = useSearchParams();

    const handleSetPlant = () => {
        if(search.size != 0 && search.get('search') != ''){
            console.log(search.get('search'));
            let opa = plants['Plants'].filter((plant) => plant.name.toUpperCase().includes(search.get('search').toUpperCase()));
            setPlants(opa);
            return;
        }
        if(plants) setPlants(plants['Plants']);
    }
    
    
    useEffect(() => {
        setTimeout(() => {
            handleSetPlant();
        }, 100);
    }, [search, plants]);
    
    return (    
        <div>
            <ul className="plant-list">
                { plant ? 
                        plant.length != 0 ? 
                        (plant.map(({ id, cover, name, water, light, price }) => (
                            <div className="plant" key={id}>
                                <PlantItem 
                                    id={id}
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                />
                                {   user.admin ?
                                        <Link to={'/admin/add-item/' + id}>
                                            <div className="button-add">
                                                    <button className="add"> Edit </button>
                                            </div>
                                        </Link>
                                    :
                                        <Link to={'/item/' + id}>
                                            <div className="button-add">
                                                    <button className="add"> Shop Now </button>
                                            </div>
                                        </Link>
                                }
                        
                            </div>))) 
                        
                        :
                            <div className="empty">
                                <p>Não foi possível encontrar a planta buscada.</p> 
            
                                <p>Tente novamente, ou clique 
                                <Link to='/shoplist' className="link"> aqui </Link> para ver todos os produtos.</p>
                            </div>
                        :
                    (
                        <p className="empty">Carregando...</p>
                    )
                } 
            </ul>
            {
                user.admin &&
                <>
                    <Link to={'/admin/add-item/'}>
                        <div className="button-add">
                                <button className="add"> Add Item </button>
                        </div>
                    </Link>
                    <br/>
                    <br/>
                </>
            }
        </div>
    );
}
