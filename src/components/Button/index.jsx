import React from "react";
import '../../styles/button.css';

export const Button = ({text, className, type}) => {
    return (
        <button type={type} className={className}>
            {text}
        </button>
    );
};