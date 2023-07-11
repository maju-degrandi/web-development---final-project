import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import '../../styles/updatePlants.css';


export const UpdateUser = ({ user, setUser }) => {
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");

    if (loggedInUser && loggedInUser.length > 2) {
      const foundUser = JSON.parse(loggedInUser);
      
      setUser(foundUser);
    }
  }, []);

  const navigate = useNavigate();
  const [name, setName] = useState(user.name);
  const [birth, setBirth] = useState(user.birthday.toString().split('T')[0]);
  const [cep, setCep] = useState(user.address.cep);
  const [street, setStreet] = useState(user.address.street);
  const [number, setNumber] = useState(user.address.number);
  const [obs, setObs] = useState(user.address.obs);
  // const [country, setCountry] = useState(user.address.country);
  // const [city, setCity] = useState(user.address.city);
  // const [state, setState] = useState(user.address.state);

  // Ainda não funciona
  const handleEditUser = async e => {
    e.preventDefault();
    
    const updatedUser = {
      ...user,
      name: name,
      birth: birth,
      address: {
        cep: cep,
        street: street,
        number: number,
        obs: obs
      },
    };
    
    try {
      const response = await axios.put('http://localhost:8080/updateInfoUser', updatedUser);
      if (response.status === 200){
        setUser(response.data);
        alert('Data updated successfully!')
        navigate('/user');
      }
      else{
        console.log(response.status);
      }
    } catch (error) {
      alert('Something went wrong, please be sure you filled the fields with a valid value.');
      console.log('Error: ', error)
    }
  };

  return (
    <>
      {user ?
        <div id='update-screen'>
          <div id='update-title'>
            <h1>Edit Profile</h1>
          </div>

          <form id='update-form' className='basic-form' onSubmit={handleEditUser}>
            <Input label={'Name'} type={'text'} require={true} value={name} setValue={setName} />

            <Input label={'Birth'} type={'date'} require={true} value={birth} setValue={setBirth} />

            <div>
              <h2>Address</h2>
              <Input label={'CEP'} type={'text'} require={true} value={cep} setValue={setCep} />
              <Input label={'Street'} type={'text'} require={true} value={street} setValue={setStreet} />
              <Input label={'Number'} type={'text'} require={true} value={number} setValue={setNumber} />
              <Input label={'Observations'} type={'text'} value={obs} setValue={setObs} />

            </div>

            <div className='div-button'>
              <Button text={'Send'} className={'filled-button'} type='submit'/>
              <Link to={'/user'}>
                <Button text={'Back'} className={'unfilled-button'} />
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
