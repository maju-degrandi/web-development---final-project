import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import '../../styles/updatePlants.css';


export const UpdateUser = ({user, setUser}) => {
    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        console.log(loggedInUser);
        
        if (loggedInUser.length > 2) {
            const foundUser = JSON.parse(loggedInUser);
            console.log(foundUser);
            setUser(foundUser);
        }
    }, []);
    
    const [name, setName] = useState(user.name);
    const [birth, setBirth] = useState(user.birth);
    const [cep, setCep] = useState(user.address.CEP);
    const [street, setStreet] = useState(user.address.street);
    const [number, setNumber] = useState(user.address.number);
    const [country, setCountry] = useState(user.address.country);
    const [city, setCity] = useState(user.address.city);
    const [state, setState] = useState(user.address.state);
    const [obs, setObs] = useState(user.address.obs);

    const handleEditItem = (e) => {
        const updatedUser = {
            ...user,
            name: name,
            birth: birth,
            address: 
            {
                country: country,
                CEP: cep,
                state: state,
                city: city,
                street: street,
                number: number,
                obs: obs
            },
        };
      
        setUser(updatedUser);
    };
    
    return (
        <>
        { user ?
            <div id='update-screen'>
                <div id='update-title'>
                    <h1>Edit Profile</h1>
                </div>
                
                <form action="" id='update-form' className='basic-form'>
                    <Input label={'Name'} type={'text'} require={true} value={name} setValue={setName}/>
                    
                    <Input label={'Birth'} type={'date'} require={true} value={birth} setValue={setBirth}/>
                    
                    <div>
                        <h2>Address</h2>
                        <Input label={'Country'} type={'text'} require={true} value={country} setValue={setCountry}/>
                        <Input label={'CEP'} type={'text'} require={true} value={cep} setValue={setCep}/>
                        <Input label={'State'} type={'text'} require={true} value={state} setValue={setState}/>
                        <Input label={'City'} type={'text'} require={true} value={city} setValue={setCity}/>
                        <Input label={'Street'} type={'text'} require={true} value={street} setValue={setStreet}/>
                        <Input label={'Number'} type={'text'} require={true} value={number} setValue={setNumber}/>
                        <Input label={'Observations'} type={'text'} value={obs} setValue={setObs}/>
                        
                    </div>
                    
                    <div className='div-button'>   
                        <Link to={'/user'}>  
                            <Button text={'Edit'} onClick={handleEditItem} className={'filled-button'}/>
                        </Link>
                        <Link to={'/user'}>  
                            <Button text={'Voltar'} className={'unfilled-button'}/>
                        </Link>
                    </div>
                </form>
            </div> 
            :
            <p>VOCÊ NÃO EXISTE KKKKKK</p>    
        }
        </>
    );
};