import * as React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from './SearchBar.jsx';

import '../../styles/header.css';
import logo from '../../assets/logo.png';
import { useState } from 'react';

export const Header = ({user}) => {
    const [isOpen, setIsOpen] = useState(false);

    function toggle() {
        setIsOpen(!isOpen);
        console.log(isOpen);    
    }

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
                    <li className='header-bar'><Link to={JSON.stringify(user) != '{}' ? '/profile' : '/login'} className='fa fa-user-o black'></Link></li> 
                    <li className='header-bar'><Link to='/cart' className='fa fa-shopping-cart black'></Link></li> 
                </ul>

                <ul className={isOpen ? 'sidebar' : 'hidden' }>
            {
                isOpen ?
                <>
                    <li className='header-side-bar' onClick={toggle}><i className='fa fa-solid fa-bars'></i></li> 
                    <SearchBar liClassName='header-side-bar'/>
                    <li className='header-side-bar'  onClick={toggle}><Link to='/'>HOME</Link></li>
                    <li className='header-side-bar'  onClick={toggle}><Link to='/about'>ABOUT US</Link></li>
                    <li className='header-side-bar'  onClick={toggle}><Link to='/shoplist'>SHOP</Link></li>

                    {/* <Search /> */}
                    <li className='header-side-bar'  onClick={toggle}><Link to={JSON.stringify(user) != '{}' ? '/profile' : '/login'} className='fa fa-user-o white'></Link></li> 
                    <li className='header-side-bar'  onClick={toggle}><Link to='/cart' className='fa fa-shopping-cart white'></Link></li> 
                </>
                :
                    <li className='header-side-bar' onClick={toggle}><i className='fa fa-solid fa-bars'></i></li> 
            }
                </ul>
        </div>
    );
};