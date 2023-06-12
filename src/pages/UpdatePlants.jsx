import * as React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import '../styles/updatePlants.css';


export const UpdatePlants = ({plants, setPlants}) => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [light, setLight] = useState(1);
    const [water, setWater] = useState(1);
    const [isTimeoutComplete, setIsTimeoutComplete] = useState(false);
   
    const [plant, setPlant] = useState(null);
    
    useEffect(() =>{
        if(params.itemId){
            const itemId = params.itemId;  
            
            setTimeout(() => {
                if(plants){
                    setPlant(plants['Plants'].find(plant => (plant.id).toString() === itemId));
                    setIsTimeoutComplete(true);
                }
            }, 100);
        }
    }, [params, plants]);
    
    useEffect(() => {
        if(isTimeoutComplete && plant){
            console.log(plant.category + '1'+ category)
            // edit plant
            setName(plant.name);
            setCategory(plant.category);
            setLight(plant.light);
            setWater(plant.water);
            setImage(plant.cover);
            setPrice(plant.price);
            setDescription(plant.description);
            setStock(plant.stock);
        }
    }, [plant, isTimeoutComplete]);
    
    
    const handleDeleteItem = (e) => {
        e.preventDefault();
        
        const updatedPlants = {
            ...plants,
            Plants: plants['Plants'].filter((item) => (item.id).toString() !== (plant.id).toString())
        };
        
        setPlants(updatedPlants);
    }

    const handleEditItem = (e) => {
        e.preventDefault();
        
        const updatedPlant = {
            ...plant,
            name: name,
            category: category,
            cover: image,
            price: price,
            description: description,
            stock: stock,
            light: light,
            water: water
        };
      
        const updatedPlants = {
            ...plants,
            Plants: plants['Plants'].map((item) =>
                (item.id).toString() === (plant.id).toString() ? updatedPlant : item
            )
        };
      
        setPlants(updatedPlants);
        navigate('/shoplist');
    };
      
    const handleCreateItem = (e) => {
        e.preventDefault();
        
        const newPlant = {
            name: name,
            category: category,
            id: uuidv4(),
            isBestSale: false,
            light: light,
            water: water,
            cover: image,
            price: price,
            description: description,
            stock: stock,
        }
        
        setPlants(prevState => ({
            ...prevState,
            Plants: [...prevState.Plants, newPlant]
          }));
          
          navigate.call(`/admin/${newPlant.id}`)
    }
    
    return (
        <div id='update-screen'>
            <div id='update-title'>
                { isTimeoutComplete && plant ?
                    <h1>Edit Item</h1>
                    :
                    <h1>Add Item</h1>
                }
            </div>
            
            <form action="" id='update-form' className='basic-form'>
                <Input require={true} label={'Name'} type={'text'} value={name} setValue={setName}/>
                
                <div className='div-input'>
                    <label className='label-text'>Category</label>
                    <select 
                        required
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)}  
                        className='select'
                    >
                        <option value="classic">Classic</option>
                        <option value="exterior">Exterior</option>
                        <option value="succulent">Succulent</option>
                    </select> 
                </div>
                
                <Input require={true} label={'Image'} type={'text'} value={image} setValue={setImage}/>
                <Input require={true} label={'Price'} type={'text'} value={price} setValue={setPrice}/>
                <Input require={true} label={'Stock'} type={'number'} value={stock} setValue={setStock}/>
                
                <div className='div-input'>                    
                    <label className='label-text'>Description</label>
                    <textarea defaultValue={description} className='textarea'></textarea>
                </div>
                
                <Input require={true} label={'Amount of light needed'} type={'number'} max="5" min="1" value={light} setValue={setLight}/>
                <Input require={true} label={'Amount of water needed'} type={'number'} max="5" min="1" value={water} setValue={setWater}/>
                
                <div className='div-button'>    
                    { isTimeoutComplete && plant ?
                        <>
                            <Link to={'/shoplist'}>  
                                <Button text={'Edit'} onClick={handleEditItem} className={'filled-button'}/>
                            </Link>
                        
                            <Link to={'/home'}>  
                                <Button text="Delete" onClick={handleDeleteItem} className="unfilled-button" />
                            </Link>
                        </>
                        :
                        <Link to={'/home'}>  
                            <Button text={'Add'} type={'submit'} onClick={handleCreateItem} className={'filled-button'}/>
                        </Link>
                    }
                </div>
            </form>
        </div> 
    );
};  