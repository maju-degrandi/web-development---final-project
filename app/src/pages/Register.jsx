import { useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';

import '../styles/forms.css';

export const PageRegister = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [person, setPerson] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [dayOfBirth, setDayOfBirth] = useState('');
    const [cep, setCep] = useState('');
    const [street, setStreet] = useState('');
    const [number, setNumber] = useState('');
    const [obs, setObs] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    async function handleRegister(e){
        e.preventDefault();
        
        // Verificar se as senhas correspondem
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }
        
        const user = {
            name: name,
            email: email,
            password: password,
            person: person,
            cpf: cpf,
            birthday: dayOfBirth,
            address: {
              cep: cep,
              street: street,
              number: number,
              obs: obs
            },
          };
        
        await axios.post('http://localhost:8080/signup', user)
        .then(response => {
            if(response.status === 200){
                alert('Successfully registered profile!');
                navigate('/login');
            }else{
                alert(`${response.response.data}`);
            }
        }).catch(error => {
            console.error(error);
            alert(error.response.data);
        });
    }

    return (
        <div className="basic-form">
            <h1 className="title">Register</h1>

            <figure className='background-login'>
                <img id="background-image1" src={backimage}/>
            </figure>
            <form className="basic-form-form"  onSubmit={handleRegister}>
                <Input label="E-mail*: " type="email" setValue={setEmail} require={true}/>
                <div className='person-form'>
                    <label htmlFor='person'>Person:</label>
                    <Input label="Physical" type="radio" name="person" value={'P'} setValue={setPerson} require={true}/>
                    <Input label="Legal" type="radio" name="person" value={'L'} setValue={setPerson} require={true}/>
                </div>
                <Input label="Full Name*: " type="text" setValue={setName} require={true}/>
                {   
                    person === 'P' &&
                    <Input label="CPF*: " type="text" setValue={setCpf} require={true}/>
                }
                {
                    person === 'L' &&
                    <Input label="CNPJ*: " type="text" setValue={setCpf} require={true}/>
                }
                <Input label="Day of birth*: "  type="date" setValue={setDayOfBirth} require={true}/>
                <div className='flex-form'>
                    <Input label="CEP*: "  type="text"  setValue={setCep} require={true}/>
                    <Input label="Street*: " type="text" setValue={setStreet} require={true}/>
                    <Input label="Number*: " type="text" setValue={setNumber} require={true}/>
                    <Input label="Observation: " type="text" setValue={setObs} require={false}/>

                </div>
                <div className='flex-form'>
                    <Input label="Password: " type="password" setValue={setPassword} require={true}/>
                    <Input label="Confirm password: " type="password" setValue={setConfirmPassword} require={true}/>
                </div>
                <Button text="REGISTER" className="basic-button" type="submit" />
            </form>
        </div>
    );
};