import React from 'react'
import '../../styles/footer.css'

import logoImg from '../../assets/logo.png'
import { FooterList } from './footerList';
import NavLink from '../ListLink';

export const Footer = () => {
    return (
        <div id='footer'>
            <div className="footer-info" >
                <a href="/" id="footer-img">
                    <figure >
                        <img className="footer-logo" src={logoImg} alt='Logo da loja'/>
                    </figure>
                </a>
                
                <nav id='footer-list'>
                    <FooterList 
                        title='Customer Support'
                        className="footer-list-wrap"
                        links={{
                            'Shipping': '/',
                            'Free Returns': '/',
                            'Track Your Order': '/',
                            'Git Cards': '/',
                        }
                    }
                    />
                    
                    <FooterList 
                        title='Customer Services'
                        className="footer-list-wrap"
                        links={{
                            'Shipping': '/',
                            'Free Returns': '/',
                            'Track Your Order': '/',
                            'Git Cards': '/',
                        }
                    }
                    />
                    
                    <FooterList 
                        title='About Us'
                        className="footer-list-wrap"
                        links={{
                            'Shipping': '/',
                            'Free Returns': '/',
                            'Track Your Order': '/',
                            'Git Cards': '/',
                            'About Us': '/',
                        }
                    }
                    />
                </nav>
                
                <ul className="footer-bar">
                    <NavLink href='/' aClassName='fa fa-telegram' text=''/>
                    <NavLink href='/' aClassName='fa fa-instagram' text=''/>
                    <NavLink href='/' aClassName='fa fa-twitter' text=''/>
                    <NavLink href='/' aClassName='fa fa-facebook' text=''/>
                    <NavLink href='/' aClassName='fa fa-pinterest' text=''/>
                </ul>
            </div>
        </div>
    );
};