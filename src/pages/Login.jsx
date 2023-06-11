import * as React from 'react';
import '../styles/forms.css';
import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import userService from '../services/user';
import { useNavigate } from "react-router-dom";

export const PageLogin = ({setUser}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(email, password);

        const user = { email, password };

        // send the email and password to the server
        // This will be done later
        
        let response = userService.getUser(user);
        console.log(response);

        // set the state of the user
        if(response) {
            setUser(response);
        
            // store the user in localStorage
            localStorage.setItem('user', JSON.stringify(response));
            
            navigate("/profile");
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
                <Input label="Email: " value={email} input="email" type="email" onChange={({ target }) => setEmail(target.value)}/>
                <Input label="Senha: " input="senha" value={password} type="password" onChange={({ target }) => setPassword(target.value)}/>
                    <Button text="LOGIN" className="filled-button basic-button" type="submit" />
            </form>
            <div className="links-loginscreen">
                <Link to={'/register'}>Don't have an account yet?</Link><br/>
                <Link to={'#'}>Forgot your password?</Link>
            </div>
         </div>
        </>
    );
};