import React, { useState, useRef, useEffect } from 'react';
import '../../styles/searchBar.css';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({ liClassName }) => {
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const [searchstr, setSearchStr] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate({
      pathname: '/shoplist',
      search: '?search=' + searchstr,
    });
  };

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleSpanClick = () => {
    setIsFocused(true);
  };

  return (
    <form onSubmit={handleSearch}>
      <div className={liClassName}>
        <span
          className={`fa fa-search ${isFocused ? 'focused' : ''}`}
          onClick={handleSpanClick}
        ></span>
        {isFocused && (
          <input
            type='text'
            onChange={handleChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            className='input-search-bar'
            placeholder='Digite sua pesquisa...'
            ref={inputRef}
          />
        )}
      </div>
    </form>
  );
};
