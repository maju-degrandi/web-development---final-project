import React from "react";
import '../../styles/button.css';

export const Button = ({text, className}) => {
    return (
        <button className={className}>
            {text}
        </button>
    );
};