import React from "react";
const IMG_API = "https://image.tmdb.org/t/p/w500";

const MovieList = (props) => {
    const FavoriteComponent = props.favoriteComponent;
    return (
        <>
            {props.movies.map((movie) => (
                <div className="movie" key={movie.id}>
                    <img src={movie.poster_path ? `${IMG_API}${movie.poster_path}` : "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                        alt={movie.title}  />
                        
                    <div className="movie-info">
                        <h3>{movie.title}</h3>
                        <span className="vote">{movie.vote_average > 0 ? movie.vote_average.toFixed(1) : movie.vote_average}</span>
                    </div>

                    <div className="movie-overview">
                        <h4>Overview:</h4>
                        <p>{movie.overview}</p>
                    </div>
                    <div className="overlay d-flex align-items-center justify-content-center">
            <FavoriteComponent />
          </div>

                </div>
            ))}
        </>
    );
}
export default MovieList;