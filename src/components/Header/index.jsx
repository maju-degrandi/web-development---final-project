import * as React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar.jsx';

import '../../styles/header.css';
import logo from '../../assets/logo.png';

export const Header = () => {
    return (
        <div id='header'>
            <a href="/">
                <figure>
                    <img className="head-logo" src={logo} alt='Logo da loja'/>
                </figure>
            </a>
            <ul className='list-inline'>
                <li className='header-bar'><Link to='/'>HOME</Link></li>
                <li className='header-bar'><Link to='/about'>ABOUT US</Link></li>
                <li className='header-bar'><Link to='/shoplist'>SHOP</Link></li>
                {/* <li className='header-bar'><Link to='/contact'>CONTACT</Link></li>  */}

                {/* <Search /> */}
                <SearchBar liClassName='header-bar'/>
                <li className='header-bar'><Link to='/login' className='fa fa-user-o black'></Link></li> 
                <li className='header-bar'><Link to='/' className='fa fa-shopping-cart black'></Link></li> 
            </ul>
            
        </div>
    );
};