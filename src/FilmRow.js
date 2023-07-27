// FilmRow.js
import React, { useState } from 'react';
import {Link} from 'react-router-dom'


function FilmRow({
  key,
  id,
  title,
  posterURL,
  year,
  backdropURL,
  overview,
  setSelectedFilm,
  isFavorite,
  toggleFavorite,
  setFilmId
}) {
  const showFilmDetail = () => {
    
    setSelectedFilm({ title, posterURL, year, backdropURL, overview })
    setFilmId(id)
  }

  return (
    <div className="FilmRow">
      <img src={posterURL} alt={`${title} film poster`} />
      <div className="film-summary">
        <h3>{title}</h3>
        <p>{id}</p>
        <p>{year}</p>
        <div className="actions">
          <button className="action" onClick={toggleFavorite}>
            <span className="material-icons">
              {isFavorite ? 'remove_from_queue' : 'add_to_queue'}
            </span>
          </button>
          {/* <button className="action">
            <span className="material-icons" onClick={showFilmDetail}>
              read_more
            </span>
          </button> */}
          <Link to={`/films/${id}`} className="action">
            <span className="material-icons" onClick={showFilmDetail} >read_more</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FilmRow
