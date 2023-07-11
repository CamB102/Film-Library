// FilmLibrary.js
import React, { useState } from 'react';
import FilmDetail from './FilmDetail';
import FilmRow from './FilmRow';
import TMDB from './TMDB';

import './FilmLibrary.css';
import './FilmRow.css';

function FilmLibrary() {
  const filmCount = TMDB.films.length;
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

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

  const filmsToDisplay = showFavorites ? favoriteFilms : TMDB.films;

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
          {filmsToDisplay.map((film) => (
            <FilmRow
              key={film.id}
              title={film.title}
              posterURL={`https://image.tmdb.org/t/p/w780/${film.poster_path}`}
              year={new Date(film.release_date).getFullYear()}
              overview={film.overview}
              setSelectedFilm={setSelectedFilm}
              backdropURL={film.backdrop_path}
              isFavorite={isFilmFavorite(film)}
              toggleFavorite={() => toggleFavorite(film)}
            />
          ))}
        </div>
      </div>
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetail selectedFilm={selectedFilm} />
      </div>
    </div>
  );
}

export default FilmLibrary;
