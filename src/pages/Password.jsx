import * as React from 'react';
import '../styles/forms.css';
import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export const PagePassword = () => {

    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    return (
        <>
        <figure className='background-login'>
            <img id="background-image1" src={backimage}/>
        </figure>
            
        <div className="basic-form">
            <h1 className="title-password">Password Recover</h1>
            <form className="basic-form-form" onSubmit={handleSubmit} >
                <Input label="Email: " value={email} input="email" type="email" onChange={({ target }) => setEmail(target.value)}/>
                <Button text="Send email" className="filled-button basic-button" type="submit" />
            </form>
         </div>
        </>
    );
};