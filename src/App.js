import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavorite from './components/AddFavorites';


const App = () => {
  const [movies, setMovies] = useState([]);
  const[favorites, setFavorites] =  useState([]);
  const [searchValue, setSearchValue] = useState('');
  const getMovieRequest = async () => {
    const url = `https://www.omdbapi.com/?apikey=2972cec5&s=${searchValue}`
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }

  };
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
  return (
    <div className='container'>
      <div className='d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='row'>
        <MovieList movies={movies} favoriteComponent={AddFavorite}/>
      </div>
    </div>
  );
};

export default App;
