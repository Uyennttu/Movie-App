import React from "react";

const MovieList = (props) => {
    const favoriteComponent = props.favoriteComponent;
    return (
        <div className="movie-container">
            {props.movies.map((movie, index) => (
                <div className="movie-item">
                    <img src={movie.Poster} alt="movie" className="poster"></img>
                <div className="overlay d-flex align-items-center"></div>
                <favoriteComponent></favoriteComponent>
                </div>))}
        </div>

    );
};
export default MovieList;