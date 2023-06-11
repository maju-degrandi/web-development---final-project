import React, { useState } from 'react';
import '../../styles/searchBar.css';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ( {liClassName} ) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isFocus, setFocus] = useState(false);
  const navigate = useNavigate();
  const [searchstr, setSearchStr] = useState('');
  
  const handleIconClick = () => {
    setIsExpanded(!isExpanded);
    console.log('FOCO:'+isFocus+setFocus());
    console.log(isExpanded);
  };
  
  const handleInputBlur = () => {
    setIsExpanded(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate({
        pathname: '/shoplist',
        search: '?search=' + searchstr,
    });
  }

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  }
  
  return (
    <form onSubmit={handleSearch}>
      <div className={liClassName} onBlur={handleInputBlur}>
        <span className="fa fa-search" onClick={handleIconClick}></span>
        {isExpanded && (
          <input
            type="text"
            onChange={handleChange}
            className='expanded input-search-bar'
            placeholder="Digite sua pesquisa..."
          />
        )}
      </div>
    </form>
  );
}