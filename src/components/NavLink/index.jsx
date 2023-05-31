import React from 'react'

const NavLink = ({href, text, liClassName, aClassName}) => {
    return (
        <li className={liClassName}>
            <a href={href} className={aClassName}>{text}</a>
        </li>
    );
};

export default NavLink;