import React, { useState, useEffect } from 'react';
import FilmDetail from './FilmDetail';
import FilmRow from './FilmRow';
import { TMDB, TMDB_API_KEY } from './TMDB';

import './FilmLibrary.css';
import './FilmRow.css';

function FilmLibrary() {
  const filmCount = TMDB.films.length;
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [filmDetails, setFilmDetails] = useState(null);
  const [filmId, setFilmId] = useState(0);
  const [filmRows, setFilmRows] = useState({page:0,results:[]});

  useEffect(() => {fetchFilmRow()},[])

  useEffect(() => {
    if (selectedFilm) {
      console.log(filmId)
      fetchFilmDetails();
  }}, [selectedFilm]);

  

  const fetchFilmRow = () => {
    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json'
          }
        };

    const url = `https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&sort_by=popularity.desc&api_key=${TMDB_API_KEY}`;
    return fetch(url, options)
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(data => setFilmRows(data))
      .catch(error => console.error('Error fetching film details:', error));
  }

  const fetchFilmDetails = () => {
    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',

          }
        };

    const url = `https://api.themoviedb.org/3/movie/${filmId}?api_key=${TMDB_API_KEY}`;
    return fetch(url, options)
      .then(response => response.json())
      // .then(response => console.log(response))
      // .then(data => setFilmDetails(data))
      // .catch(error => console.error('Error fetching film details:', error));
  }



  const handleToggleFavorites = () => {
    setShowFavorites((prevShowFavorites) => !prevShowFavorites);
  };

  const toggleFavorite = (film) => {
    if (isFilmFavorite(film)) {
      setFavoriteFilms((prevFavoriteFilms) =>
        prevFavoriteFilms.filter((f) => f.title !== film.title)
      );
    } else {
      setFavoriteFilms((prevFavoriteFilms) => [...prevFavoriteFilms, film]);
    }
  };

  const isFilmFavorite = (film) => {
    return favoriteFilms.some((f) => f.title === film.title);
  };

  // const filmsToDisplay = showFavorites ? favoriteFilms : filmRow;

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button
            className={`film-list-filter ${!showFavorites ? 'is-active' : ''}`}
            onClick={handleToggleFavorites}
          >
            ALL
            <span className="section-count">{filmCount}</span>
          </button>
          <button
            className={`film-list-filter ${showFavorites ? 'is-active' : ''}`}
            onClick={handleToggleFavorites}
          >
            FAVES
            <span className="section-count">{favoriteFilms.length}</span>
          </button>
        </div>
        <div className="film-row-container">
          {filmRows.results.map((film,index) => 
            <FilmRow
              key={index}
              id={film.id}
              title={film.original_title}
              posterURL={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
              year={new Date(film.release_date).getFullYear()}
              overview={film.overview}
              setSelectedFilm={setSelectedFilm}
              backdropURL={film.backdrop_path}
              isFavorite={isFilmFavorite(film)}
              toggleFavorite={() => toggleFavorite(film)}
              setFilmId={setFilmId}
            />
          )}
        </div>
      </div>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetail selectedFilm={selectedFilm} promiseFilmDetails={fetchFilmDetails()} />
      </div>
    </div>
  );
}

export default FilmLibrary;