import React from "react";
import '../../styles/button.css';

export const Button = ({text, className, type, onClick}) => {
    return (
        <button type={type} className={className} onClick={onClick}>
            {text}
        </button>
    );
};