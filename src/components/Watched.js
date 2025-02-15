import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className='watchlist-container'>
        <div className='header'>
          <h2>Watched List</h2>
        </div>

        {watched.length > 0 ? (
          <div className='movie-container'>
            {watched.map((movie) => (
              <MovieCard movie={movie} type='watched' />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>No Movies in Your List, Add Some!</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;



