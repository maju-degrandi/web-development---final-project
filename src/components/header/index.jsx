import * as React from 'react';
import NavLink from './navLink.jsx';
import '../../styles/header.css'
import SearchBar from './searchBar.jsx';

export const Header = () => {
    return (
        <header>
            <a href="/">
                <figure>
                    <img className="head-logo" src="../../assets/logo.png" alt='Logo da loja'/>
                </figure>
            </a>
            
            <ul className='list-inline'>
                <NavLink href={'/'} text={'HOME'} liClassName='header-bar'/>
                <NavLink href={'/'} text={'ABOUT US'} liClassName='header-bar'/>
                <NavLink href={'/'} text={'SHOP'} liClassName='header-bar'/>
                <NavLink href={'/'} text={'CONTACT'} liClassName='header-bar'/>

                {/* <Search /> */}
                <SearchBar liClassName='header-bar'/>
                <NavLink href={'/'} text={''} liClassName='header-bar' aClassName='fa fa-user black'/>
                <NavLink href={'/'} text={''} liClassName='header-bar' aClassName='fa fa-shopping-cart black'/>
            </ul>
            
        </header>
    );
};