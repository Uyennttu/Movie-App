import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Header = ({ searchValue, handleOnSubmit, handleOnChange }) => {
 
  return (
    <div className='header'>
      <nav>
        <ul>
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/watchlist">Watch List</Link></li>
          <li><Link to="/watched">Watched</Link></li>
        </ul>
      </nav>

      <form onSubmit={handleOnSubmit}>
        <input
          className='search'
          type='search'
          placeholder='Search...'
          value={searchValue}
          onChange={handleOnChange}
        />
      </form>
    </div>
  );
}

export default Header;



