// FilmRow.js
import React, { useState } from 'react';

function FilmRow({
  title,
  posterURL,
  year,
  backdropURL,
  overview,
  setSelectedFilm,
  isFavorite,
  toggleFavorite,
}) {
  const showFilmDetail = () => {
    setSelectedFilm({ title, posterURL, year, backdropURL, overview });
  }

  return (
    <div className="FilmRow">
      <img src={posterURL} alt={`${title} film poster`} />
      <div className="film-summary">
        <h3>{title}</h3>
        <p>{year}</p>
        <div className="actions">
          <button className="action" onClick={toggleFavorite}>
            <span className="material-icons">
              {isFavorite ? 'remove_from_queue' : 'add_to_queue'}
            </span>
          </button>
          <button className="action">
            <span className="material-icons" onClick={showFilmDetail}>
              read_more
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FilmRow
