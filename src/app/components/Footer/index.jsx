import React from 'react'
import '../../styles/footer.css'

import logoImg from '../../assets/logo.png'
import { FooterList } from './footerList';
import { Link } from 'react-router-dom';

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
                        links={{
                            'Shipping': '/',
                            'Free Returns': '/',
                            'Track Your Order': '/',
                            'About Us': '/',
                        }
                    }
                    />
                </nav>
                
                <ul className="footer-bar">
                    <Link to={'/'} className='fa fa-telegram'></Link>
                    <Link to={'/'} className='fa fa-instagram'></Link>
                    <Link to={'/'} className='fa fa-twitter'></Link>
                    <Link to={'/'} className='fa fa-facebook'></Link>
                    <Link to={'/'} className='fa fa-pinterest'></Link>
                </ul>
            </div>
        </div>
    );
};