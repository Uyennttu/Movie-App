import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const IMG_API = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie, type }) => {
    const { removeMovieFromWatchlist, addMovieToWatched, moveToWatchlist, removeFromWatched } = useContext(GlobalContext);

    return (
        <div className='movie'>
            <img
                src={movie.poster_path ? `${IMG_API}${movie.poster_path}` : "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                alt={movie.title}
            />
            <div className='controls'>
                {type === 'watchlist' && (
                    <>
                        <button className='ctrl-button'
                            onClick={() => addMovieToWatched(movie)}>
                            <FontAwesomeIcon icon="eye" />
                        </button>

                        <button className='ctrl-button'
                            onClick={() => removeMovieFromWatchlist(movie.id)}
                        >
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </>
                )}

                {type === 'watched' && (
                    <>
                        <button className='ctrl-button'
                            onClick={() => moveToWatchlist(movie)}>
                            <FontAwesomeIcon icon="eye-slash" />
                        </button>

                        <button className='ctrl-button'
                            onClick={() => removeFromWatched(movie.id)}
                        >
                            <FontAwesomeIcon icon="times" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default MovieCard;

