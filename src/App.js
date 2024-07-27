import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEye, faHeart, faEyeSlash, faTimes, faBars} from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import MovieList from './components/MovieList';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';

library.add(faEye, faHeart, faEyeSlash, faTimes, faBars);

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_TMDB_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false`;

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {       
        setMovies(data.results || []);
      })      
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      getMovies(`${SEARCH_API}&query=${searchValue}`);
      setSearchValue('');
    }
  };

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <GlobalProvider>
    <Router>
      <Header 
        searchValue={searchValue} 
        handleOnSubmit={handleOnSubmit} 
        handleOnChange={handleOnChange} 
      />
      <Routes>
        <Route path="/" element={
          <div className='movie-container'>
            {movies.length === 0 ? (
              <h2 className='notfound'>The Movie Can't Be Found.</h2>
            ) : (
              <MovieList movies={movies} />
            )}
          </div>
        } />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
