import React, { useState } from 'react';
import '../../styles/searchBar.css'

function SearchBar(liClassName) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocus, setFocus] = useState(false);
  
  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
    console.log('FOCO:'+isFocus+setFocus());
    console.log(isExpanded);
  };
  
  const handleInputBlur = () => {
    setIsExpanded(false);
  };
  
  return (
    <div className={liClassName} onBlur={handleInputBlur}>
      <span className="fa fa-search" onClick={handleIconClick}></span>
      {isExpanded && (
        <input
          type="text"
          
          className='expanded'
          placeholder="Digite sua pesquisa..."
        />
      )}
    </div>
  );
}

export default SearchBar;