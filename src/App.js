import React, { useState } from "react";

import Header from "../src/components/header";
import Search from "../src/components/serach";
import MovieList from "../src/components/movieList";
import MovieInfo from "../src/components/movieInfo";
import Radio from "./components/radio";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [currentMovie, setCurrentMovie] = useState(null);
  const [filterType, setSetFilterType] = useState(null);

  const searchHanler = async (searchValue) => {
    const APIKey = "45dd0fd81d795a06d20dadea08a7e7b5";
    const MOVIE_API_URL = "https://api.themoviedb.org/3/search/multi?api_key=";
    setLoading(false);
    setErrorMessage(null);
    setSetFilterType(null);
    const movieData = await fetch(
      `${MOVIE_API_URL}${APIKey}&query=${searchValue}`
    );
    const data = await movieData.json();
    if (data.results) {
      console.log(data.results);
      setList(data.results);
      setLoading(true);
    } else {
      setErrorMessage(data.Error);
      setLoading(false);
    }
  };



  const movieInfoHandler = (id) => {
    const filteredMovie = list.filter((movie) => movie.id === id);
    const currentMovieValue =
      filteredMovie.length > 0 ? filteredMovie[0] : null;
    setCurrentMovie(currentMovieValue);
  };

  const goBackHandler = () => {
    setCurrentMovie(null);
  };

  const typeSelectHandler = (type) => {
    const filtered = list.filter((movie) => movie.media_type === type);
    setFilteredList(filtered);
    setSetFilterType(type);
  };

  return (
    <div className="App">
      <Header text="Movie Search" />
      {loading && !errorMessage && !currentMovie && (
        <React.Fragment>
          <Search onSearch={searchHanler} />
          <Radio onSelectType={typeSelectHandler} />
          <MovieList movies={filterType ? filteredList : list} viewMovieInfo={movieInfoHandler} />
        </React.Fragment>
      )}
      {currentMovie && (
        <MovieInfo closeMovieInfo={goBackHandler} currentMovie={currentMovie} />
      )}
    </div>
  );
};

export default App;
