import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../../styles/table.css'

export const UserTable = ({ deleteUser, makeAdmin }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        
        fetchUsers();
    }, []);

    
    async function makeAdmin(idUser){
        const loggedInUser = JSON.parse(localStorage.getItem("user"));
        
        const ids = {
            idUser: idUser,
            idAdmin: loggedInUser._id
        }
        
        if(ids.idUser === ids.idAdmin){
            alert('You cannot remove your own permission!!!');
            return;
        }
        
        try {
            const response = await axios.put('http://localhost:8080/makeAdmin', ids);
            
            if(response.status === 200)
                alert('Update done successfully!')
        } catch (error) {
            console.error(error);
            alert('Update failed!')
        }
    
        
    }
    
    return (
        <div id='wrapper' className='checkout'>
            <div id='checkout-title'>
                <h1>Users</h1>
            </div>
            
            <div id='checkout-main'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>IsAdmin</th>
                            <th>Legal</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                            {user.adm ? (
                                <span className="circle on">&nbsp;&nbsp; &nbsp;</span>
                                ) : (
                                <span className="circle off">&nbsp;&nbsp; &nbsp;</span>
                                )
                            }
                            </td>
                            <td>{user.person}</td>
                            <td>
                               <button className="material-icons unfilled-button" onClick={() => makeAdmin(user._id)}> done </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
