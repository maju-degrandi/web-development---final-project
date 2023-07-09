import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import '../../styles/updatePlants.css';


export const UpdatePlants = () => {
    const params = useParams();
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [category, setCategory] = useState('Classic');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [light, setLight] = useState(1);
    const [water, setWater] = useState(1);
    const [isUpdate, setIsUpdate] = useState(false);
    
    const [plant, setPlant] = useState(null);
    
    async function handlePlantById(id){
        try{
            const response = await axios.get(`http://localhost:8080/plant/${id}`);
            if(response.status === 200){
                setPlant(response.data[0]);
            }
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        if(params.itemId){
            const itemId = params.itemId;
            setIsUpdate(true);
            handlePlantById(itemId);
        }    
    }, [])
    
    useEffect(() => {
        if(plant){
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
    }, [plant]);
    
    
    const handleDeleteItem = async (e) => {
        e.preventDefault();

        console.log(plant._id);

        try{
            const response = await axios.delete(`http://localhost:8080/plant/${plant._id}`)
            if(response.status === 200){
                alert('Planta Deletada com sucesso!');
                navigate('/shoplist');    
            }
        } catch(error){
            console.log(error)
        }
    }

    const handleEditItem = async (e) => {
        e.preventDefault();
        
        const updatedPlant = {
            ...plant,
            "name": name,
            "category": category,
            "cover": image,
            "price": price,
            "description": description,
            "stock": stock,
            "light": light,
            "water": water
        };

        console.log(description);

        try{
            const response = await axios.put(`http://localhost:8080/plant/${updatedPlant._id}`, updatedPlant)
            if(response.status === 200){
                alert('Planta Editada com sucesso!');
                navigate('/shoplist');       
            }
        } catch(error){
            console.log(error)
        }

    };
      
    const handleCreateItem = async (e) => {
        e.preventDefault();
        const newPlant = {
            "name": name,
            "category": category,
            "isBestSale": false,
            "light": light,
            "water": water,
            "cover": image,
            "price": price,
            "description": description,
            "stock": stock,
        }

        console.log(newPlant)

        try{
            const response = await axios.post(`http://localhost:8080/plant/add`, newPlant)
            if(response.status === 200){
                alert('Planta Adicionada com sucesso!');
                navigate('/shoplist');    
            }
        } catch(error){
            console.log(error)
        }
    }
    
    return (
        <div id='update-screen'>
            <div id='update-title'>
                { isUpdate ?
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
                    <textarea defaultValue={description} onChange={(e) => setDescription(e.target.value)} className='textarea' />
                </div>
                
                <Input require={true} label={'Amount of light needed'} type={'number'} max="5" min="1" value={light} setValue={setLight}/>
                <Input require={true} label={'Amount of water needed'} type={'number'} max="5" min="1" value={water} setValue={setWater}/>
                
                <div className='div-button'>    
                    { isUpdate ?
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