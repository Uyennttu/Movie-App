import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieCard from './MovieCard';

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className='movie-page'>
      <div className='watchlist-container'>
        <div className='header'>
          <h2>My Watchlist</h2>
        </div>

        {watchlist.length > 0 ? (
          <div className='movie-container'>
            {watchlist.map((movie) => (
              <MovieCard movie={movie} type='watchlist' />
            ))}
          </div>
        ) : (
          <h2 className='no-movies'>You Have No Movies To Watch.</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;




