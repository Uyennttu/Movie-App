import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IMG_API = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {
    const { addMovieToWatchlist, watchlist, watched, addMovieToWatched } = useContext(GlobalContext);

    return (
        <>
            {props.movies.map((movie) => {
                let storedMovie = watchlist.find(o => o.id === movie.id);
                let storedMovieWatched = watched.find(o => o.id === movie.id);

                const watchlistDisabled = storedMovie || storedMovieWatched;
                const watchedDisabled = storedMovieWatched;

                return (
                    <div className="movie" key={movie.id}>
                        <img
                            src={movie.poster_path ? `${IMG_API}${movie.poster_path}` : "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                            alt={movie.title}
                        />

                        <div className="movie-info">
                            <h5>{movie.title}</h5>
                            <span className="vote">{movie.vote_average > 0 ? movie.vote_average.toFixed(1) : movie.vote_average}</span>
                        </div>

                        <div className="movie-overview">
                            <h4>Overview:</h4>
                            <p>{movie.overview}</p>
                        </div>

                        <div className="controls">
                            <button className={`ctrl-button ${watchlistDisabled ? 'active' : ''}`}
                                onClick={() => addMovieToWatchlist(movie)}
                                style={{ pointerEvents: watchlistDisabled ? 'none' : 'auto' }}>
                                <FontAwesomeIcon icon="heart" />
                            </button>

                            <button className={`ctrl-button ${watchedDisabled ? 'active' : ''}`}
                                onClick={() => addMovieToWatched(movie)}
                                style={{ pointerEvents: watchedDisabled ? 'none' : 'auto' }}>
                                <FontAwesomeIcon icon="eye"/>
                            </button>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default MovieList;
