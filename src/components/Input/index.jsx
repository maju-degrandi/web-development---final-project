import * as React from 'react';
import '../../styles/input.css';

export const Input = ({ label, input, className, type, name, require}) => {
    return (
        <div className={'card'}>
            {
                type === 'radio' ?
                    <>
                        <input 
                        className={type} 
                        type={type} 
                        name={name} 
                        required={require}
                        />
                        <label className={'label-' + type} for={label}>{label}</label><br />
                    </>
                :
                    <>
                        <label className={'label-' + type} for={label}>{label} </label><br />
                        <input 
                        className={type} 
                        type={type} 
                        name={name} 
                        required={require}
                        />
                    </>

            }
        </div>
    );
};