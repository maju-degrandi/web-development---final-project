import * as React from 'react';
import '../../styles/input.css';

export const Input = ({ label, type, name, require, max, min, value, setValue, onChange}) => {
    const handleInputChange = (event) => {
        if(setValue)
            setValue(event.target.value);
    };
    
    const handOnChange = (event) => {
        handleInputChange(event);
        if(onChange)
            onChange(event);
    }
    
    return (
        <div className="div-input">
            <label className={'label-' + type} htmlFor={label}>{label}</label><br />
                
            {type === 'radio' ? (
                <>
                    <input 
                        className={type} 
                        type='radio'
                        name={name} 
                        required={require}
                    />
                </>
            ) : type === 'number' ? (
                <>
                    <input 
                        className={type} 
                        type='number'
                        max={max}
                        min={min}
                        name={name} 
                        required={require}
                        
                        value={value}
                        onChange={handleInputChange}
                    />
                    </>
            ) : (
                <>
                    <input 
                        className={type} 
                        type={type} 
                        name={name} 
                        defaultValue={value}
                        required={require}
                        onChange={handOnChange}
                        />
                    </>
                )
            }
        </div>

    );
};