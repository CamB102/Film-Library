import './FilmDetail.css'

function FilmDetail({selectedFilm}) {
    if (!selectedFilm){
        return(
            <div className='FilmDetail'>
                <p>
                    <i className="material-icons">subscriptions</i>
                    <span>No film selected</span>
                </p>
            </div>
        )
    }
    const {title, backdropURL, posterURL, overview} = selectedFilm;

    return(
        <div className="FilmDetail is-hydrated">
            <figure className="film-backdrop">
                <img src={`https://image.tmdb.org/t/p/w1280${backdropURL}`} alt={`${title} backdrop`}/>
                <h1 className="film-title">{title}</h1>
            </figure>
            <div className="film-meta">
                <p className="film-detail-overview">
                    <img src={`https://image.tmdb.org/t/p/w780${posterURL}`} className="film-detail-poster" alt={`${title} poster`}/>
                    {overview}
                </p>
            </div>
        </div>
    )
}

export default FilmDetail