import * as React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import userService from '../services/user';
import { updateUserInLocalStorage } from '../services/localStorageUtils';

import '../styles/forms.css';

export const PageLogin = ({setUser}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = { email, password };
        
        const response = await userService.getUser(user);
        
        // set the state of the user
        if(response) {
            // store the user in localStorage
            setUser(response);
            updateUserInLocalStorage(user);
            
            navigate("/user");
        }else{
            alert('Usuário inválido!');
        }
      };

    return (
        <>
        <figure className='background-login'>
            <img id="background-image1" src={backimage}/>
        </figure>
            
        <div className="basic-form">
            <h1 className="title">Login</h1>
            <form className="basic-form-form" onSubmit={handleSubmit} >
                <Input label="Email: " require={true} value={email} input="email" type="email" onChange={({ target }) => setEmail(target.value)}/>
                <Input label="Senha: "  require={true} input="senha" value={password} type="password" onChange={({ target }) => setPassword(target.value)}/>
                <Button text="LOGIN" className="filled-button basic-button" type="submit" />
            </form>
            <div className="links-loginscreen">
                <Link to={'/register'}>Don't have an account yet?</Link><br/>
                <Link to={'/recoverpassword'}>Forgot your password?</Link>
            </div>
         </div>
        </>
    );
};