import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import PlantItem from "../components/ShopList/plantItem";
import { Button } from "../components/Button"
import "../styles/shoplist.css";

export const PageShopList = ({user, plants}) => {
    const [plant, setPlants] = useState(null);
    const [ search, setSearchParams] = useSearchParams();

    const handleSetPlant = () => {
        if(search.size !== 0 && search.get('search') !== ''){
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
        <div className="checkout shoplist">
            <div id="checkout-title">
                <h1>Shop List</h1>
            </div>
            
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
                                                <Button text={'Edit'} className={'add filled-button'}/>
                                            </div>
                                        </Link>
                                    :
                                    <Link to={'/item/' + id}>
                                        <div className="button-add">
                                            <Button text={'Shop Now'} className={'add filled-button'}/>
                                        </div>
                                    </Link>
                                }
                        
                            </div>))) 
                        
                        :
                            <div className="empty">
                                <p>Unable to find the requested plant.</p> 
            
                                <p>Please try again, or click
                                <Link to='/shoplist' className="link"> here </Link> to see all products.</p>
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
                            <Button text={'Add Item'} className={'unfilled-button'}/>
                        </div>
                    </Link>
                    <br/>
                    <br/>
                </>
            }
        </div>
    );
}
