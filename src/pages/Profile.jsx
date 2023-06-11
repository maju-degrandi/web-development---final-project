import * as React from 'react';
import '../styles/forms.css';
import { Button } from '../components/Button';
import { Card } from "../components/Card";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export const PageProfile = ({user, setUser}) => {
    
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser !== '{}') {
            const foundUser = JSON.parse(loggedInUser);
            console.log(foundUser);
            setUser(foundUser);
        }
    }, []);

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
        navigate("/");
    };

    return (
        <Card>
            {
                user ? <>
                    <h1 className='title-profile'>{user.name}</h1>
                    <div className='info-profile'>
                        <h2>{user.email}</h2>
                        <p>Address: {user.address && user.address.CEP} {user.address && user.address.street}</p>
                    </div>
                    <div>
                        <Link to="/myorders"><Button text="My Orders" className="filled-button basic-button"/></Link>
                        <Link to="/editinfo"><Button text="Edit Info" className="filled-button basic-button"/></Link>
                        <Button onClick={handleLogout} text="Logout" className="filled-button basic-button">logout</Button>
                    </div>
                </>
                :
                <p>Loading ...</p>
            }
        </Card>
    );
};