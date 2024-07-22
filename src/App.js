import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from './components/Header';
import MovieList from './components/MovieList';
import Watched from './components/Watched';
import AddFavorites from './components/AddFavorites';

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=6b231d8f308a609fa822c5cd10b33b7a";
const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b231d8f308a609fa822c5cd10b33b7a";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  useEffect(() => {
    getMovies(FEATURED_API)
  }, []);

  //SEARCH MOVIE
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      getMovies(`${SEARCH_API}&query=${searchValue}`);
    } setSearchValue('');
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  const addFavorites = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  }

  return (
    //react fragment??
    <>

      <header>
        <div className='heading'>
          <h1>Movies</h1>
        </div>


        <form onSubmit={handleOnSubmit}>
          <input className='search' type='search' placeholder='Search...'
            value={searchValue}
            onChange={handleOnChange}
          />
        </form>
      </header>

     
          <div className='movie-container'>
            <MovieList movies={movies}
              handleFavoritesClick={addFavorites}
              favoriteComponent={AddFavorites} />
          </div>
       
    </>
    
  );
}

export default App;
