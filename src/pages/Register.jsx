import * as React from 'react';
import '../styles/forms.css';
import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const PageRegister = () => {
    function handleRegister(){

    }

    return (
         <div className="basic-form" action={handleRegister}>
                <h1 className="title">Register</h1>
                <img id="background-image1" src={backimage}/>
                <form class="basic-form-form" >
                    <Input label="E-mail*: " input="email" type="email" require={true}/>
                    <div className='person-form'>
                        <label>Person: </label>
                        <Input label="Physical" input="email" type="radio" name="person" require={true}/>
                        <Input label="Legal" input="email" type="radio" name="person" require={true}/>
                    </div>
                    <Input label="Full Name*: " input="full-name" type="text" require={true}/>
                    <Input label="CPF*: " input="cpf" type="text" require={true}/>
                    <Input label="Day of birth*: " input="day-of-birth" type="date" require={true}/>
                    <div className='flex-form'>
                        <Input label="CEP*: " input="day-of-birth" type="text" require={true}/>
                        <Input label="Street*: " input="street" type="text" require={true}/>
                        <Input label="Number*: " input="numeber" type="text" require={true}/>
                        <Input label="Observation: " input="obs" type="text" require={false}/>

                    </div>
                    <div className='flex-form'>
                        <Input label="Password: " input="password" type="password" require={true}/>
                        <Input label="Confirm password: " input="c-password" type="password" require={true}/>
                    </div>
                    <Button text="REGISTER" className="basic-button" type="submit" />
                </form>
         </div>
    );
};