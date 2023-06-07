import React from 'react'
import { Link } from 'react-router-dom';

import '../../styles/footer.css'

export const FooterList = ({title, links}) => {
    const items = Object.entries(links);
    return (
        <div className='footer-list-wrap'>
            {title && (<h6>{title}</h6>)}
            <ul className="footer-list-wrap-ul">
                {items.map(([text, link], i) => (
                    <li key={i}>
                        <Link to={link}>{text}</Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};