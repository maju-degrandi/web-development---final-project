import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

import PlantItem from "../components/ShopList/plantItem";
import { Button } from "../components/Button";
import "../styles/shoplist.css";

export const PageShopList = ({ user }) => {
    const [plants, setPlants] = useState(null)
    const [plant, setPlant] = useState(null);
    const [ search, setSearchParams] = useSearchParams();

    const handleSetPlant = () => {
        if(search.size !== 0 && search.get('search') !== '' && plants){
            let filteredPlants = plants.filter((plant) => plant.name.toUpperCase().includes(search.get('search').toUpperCase()));
            setPlant(filteredPlants);
            return;
        }
        if(plants) setPlant(plants);
    }

    async function handlePlantList(){
        try{
            const response = await axios.get(`http://localhost:8080/plant`)
            if(response.status === 200){
                setPlants(response.data);
            }
        } catch(error){
            console.log(error)
        }
    }
    
    useEffect(() =>{
        handlePlantList();
    }, [])
    
    useEffect(() => {
        handleSetPlant();
        console.log(plants);
    }, [plants, search]);
    
    return (    
        <div className="checkout shoplist">
            <div id="checkout-title">
                <h1>Shop List</h1>
            </div>
            
            <ul className="plant-list">
                { plant ? 
                        plant.length != 0 ? 
                        
                        (plant.map(({ _id, cover, name, water, light, price }) => (
                            <div className="plant" key={_id}>
                                <PlantItem 
                                    id={_id}
                                    cover={cover}
                                    name={name}
                                    water={water}
                                    light={light}
                                    price={price}
                                    />
                                {   user.adm ?
                                        <Link to={'/admin/add-item/' + _id}>
                                            <div className="button-add">
                                                <Button text={'Edit'} className={'add filled-button'}/>
                                            </div>
                                        </Link>
                                    :
                                    <Link to={'/item/' + _id}>
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
                user.adm &&
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
