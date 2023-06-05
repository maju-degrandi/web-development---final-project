import * as React from 'react';
import '../styles/login.css';
import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export const PageLogin = () => {
    return (
         <div id="login">
                <img id="background-image1" src={backimage}/>
                <h1 className="title">Login</h1>
                <form class="login-form">
                    <Input label="Email: " input="email" type="email"/>
                    <Input label="Senha: " input="senha" type="password"/>
                    <Button text="LOGIN" className="login-button" type="submit" />
                </form>
                <div class="links-loginscreen">
                    <a href="#">Don't have an account yet?</a> <br/>
                    <a href="#">Forgot your password?</a>
                </div>
         </div>
    );
};