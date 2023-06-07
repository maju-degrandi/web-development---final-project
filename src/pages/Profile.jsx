import * as React from 'react';
import '../styles/forms.css';
import backimage from "../assets/flor-fundo1.png";
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Card } from "../components/Card";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PageProfile = () => {
    const [user, setUser] = useState({});
    
    useEffect(() => {
        setUser({
            name: "Rebeca Carvalho",
            email: "rebeca.vcarvalho@usp.br",
            address: {
                cep: "13560450",
                street: "Rua Dr. Orlando Damiano"
            }
        });
        // setUser(UserService.getUser());
    }, []);

    return (
        <Card>
            {
                user ? <>
                    <h1 className='title-profile'>{user.name}</h1>
                    <div className='info-profile'>
                        <h2>{user.email}</h2>
                        <p>Address: {user.address && user.address.cep} {user.address && user.address.street}</p>
                    </div>
                    <div>
                        <Link to="/myorders"><Button text="My Orders" className="filled-button basic-button"/></Link>
                        <Link to="/editinfo"><Button text="Edit Info" className="filled-button basic-button"/></Link>
                    </div>
                </>
                :
                <p>Loading ...</p>
            }
        </Card>
    );
};