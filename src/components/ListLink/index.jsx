// NAO USO MAIS

import React from 'react'

const ListLink = ({href, text, liClassName, aClassName}) => {
    return (
        <li className={liClassName}>
            <a href={href} className={aClassName}>{text}</a>
        </li>
    );
};

export default ListLink;