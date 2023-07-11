import React from "react";
import '../../styles/button.css';

export const Button = ({text, className, type, onClick, disabled}) => {
    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
};