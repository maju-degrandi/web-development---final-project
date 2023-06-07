import * as React from 'react';
import '../styles/forms.css';
import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Link } from 'react-router-dom';

export const PageLogin = () => {
    return (
        <>
        <img id="background-image1" src={backimage}/>
        <div className="basic-form">
                <h1 className="title">Login</h1>
                <form className="basic-form-form">
                    <Input label="Email: " input="email" type="email"/>
                    <Input label="Senha: " input="senha" type="password"/>
                    <Button text="LOGIN" className="basic-button" type="submit" />
                </form>
                <div className="links-loginscreen">
                    <Link to={'/register'}>Don't have an account yet?</Link><br/>
                    <Link to={'#'}>Forgot your password?</Link>
                </div>
         </div>
        </>
    );
};