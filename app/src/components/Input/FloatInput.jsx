import React, { useState } from 'react';
import "../../styles/floatInput.css";

export const PlaceholderInput = ({ title, type, size, value, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`size-${size} input-container ${isFocused ? 'focused' : ''}`}>
      <input className={`floatInput`}
        type={type}
        value={value}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        placeholder=''
      />
      <span className={'input-title'}>{title}</span>
    </div>
  );
};