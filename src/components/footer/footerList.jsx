import React from 'react'
import NavLink from '../navLink';

import '../../styles/footer.css'

export const FooterList = ({title, className, links}) => {
    const items = Object.entries(links);
    return (
        <div className={className}>
            {title && (<h6>{title}</h6>)}
            <ul className="footer-list-wrap-ul">
                {items.map(([text, link], i) => (
                    <NavLink key={i} href={link} text={text} liClassName=''/>
                ))}
            </ul>
        </div>
    );
};