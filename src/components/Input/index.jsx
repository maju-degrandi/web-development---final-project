import * as React from 'react';
import '../../styles/input.css';

export const Input = ({ label, input, className, type }) => {
    return (
        <div className={className}>
            <label className='input-label' for={label}>{label}</label><br />
            <input className='input-input' type={type} id={input} />
        </div>
    );
};