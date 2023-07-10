import * as React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import { Button } from '../../components/Button';
import { Card } from "../../components/Card";

import '../../styles/forms.css';

export const PageProfile = ({user, setUser}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");

        if (loggedInUser && loggedInUser !== '{}') {
            const foundUser = JSON.parse(loggedInUser);
            console.log(foundUser)
            setUser(foundUser);
        }
    }, []);

    async function handleLogout() {
        setUser({});
        localStorage.clear();
        
        const reponse = await axios.get('http://localhost:8080/logout');
        navigate("/login");
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
                    <div className='div-buttons'>
                        {!user.adm ?  
                            <Link to="/user/myorders">
                                <Button text="My Orders" className="filled-button basic-button"/>
                            </Link>
                            :
                            <Link to="/admin/getUsers">
                                <Button text="Users" className="filled-button basic-button"/>
                            </Link>
                        }
                        <Link to="/user/editinfo">
                            <Button text="Edit Info" className="filled-button basic-button"/>
                        </Link>
                        <Button onClick={handleLogout} text="Logout" className="filled-button basic-button"/>
                    </div>
                </>
                :
                <p>Loading ...</p>
            }
        </Card>
    );
};