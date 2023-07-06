import React, {useState} from 'react'

function FilmRow({ title, posterURL, year, backdropURL, overview, setSelectedFilm, favoriteFilms, setFavoriteFilms}) {
    
    const showFilmDetail = () => {
        setSelectedFilm({title, posterURL, year, backdropURL, overview})
    }

    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = () => {
      if (isFavorite){
        setFavoriteFilms(prevFavoriteFilms => prevFavoriteFilms.filter(film => film.title !== title))
      } else {
        setFavoriteFilms(prevFavoriteFilms => [...prevFavoriteFilms, {title, posterURL, year, backdropURL, overview}])
      }

      setIsFavorite(prevIsFavorite => !prevIsFavorite)
    }

  return (
    <div className="FilmRow">
      <img src={posterURL} alt={`${title} film poster`} />
      <div className="film-summary">
        <h3>{title}</h3>
        <p>{year}</p>
        <div className="actions">
          <button className="action">
            <span onClick={toggleFavorite} className="material-icons">{isFavorite ? 'remove_from_queue' : 'add_to_queue'}</span>
          </button>
          <button className="action" >
            <span className="material-icons" onClick={showFilmDetail}>read_more</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilmRow;
