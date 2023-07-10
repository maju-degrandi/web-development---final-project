import * as React from 'react';
import '../../styles/input.css';

export const Input = (
    {   
        label, type, name, require, 
        max, min,
        value, setValue, 
        onChange, 
        className
    }
    ) => {
    const handleInputChange = (event) => {
        if(setValue){
            if (type === 'radio') {
                setValue(value);
            }
            else
                setValue(event.target.value);
        }
    };
    
    const handOnChange = (event) => {
        handleInputChange(event);
        if(onChange)
            onChange(event);
    }
    
    return (
        <div className="div-input">
            <label className={'label-' + type} htmlFor={label}>{label}</label>
                
            {type === 'radio' ? (
                <>
                    <input 
                        className={type} 
                        type='radio'
                        name={name} 
                        required={require}
                        
                        onChange={handleInputChange}
                    />
                </>
            ) : type === 'number' ? (
                <>
                    <input 
                        className={`${type} ${className}`} 
                        type='number'
                        max={max}
                        min={min}
                        name={name} 
                        required={require}
                        onKeyDown={(e) => e.preventDefault()}
                        onWheel={(e) => e.preventDefault()}
                                                
                        value={value}
                        onChange={handleInputChange}
                    />
                    </>
            ) : type === 'date' ? (
                <>
                    <input 
                        className={type} 
                        type='date'
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