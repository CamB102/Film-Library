import './FilmDetail.css'
import { useState, useEffect } from 'react';

function FilmDetail({selectedFilm, promiseFilmDetails}) {
    const [data, setData] = useState(null)
    useEffect(()=> {
        promiseFilmDetails.then((resData) => {setData(resData)})
                            .catch((error)=>{console.log(error)})
    }, [promiseFilmDetails])
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
    const {backdropURL, posterURL, overview} = selectedFilm;
    
    if (!data) {
        return <div>Loading....</div>
    }

    return (
        <div className="FilmDetail is-hydrated">
            <figure className="film-backdrop">
            <img src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`} alt={`${data.original_title} backdrop`} />
                <h1 className="film-title">{data.original_title}</h1>
            </figure>
            <div className="film-meta">
                
                <p className="film-detail-overview">
                <img src={`https://image.tmdb.org/t/p/w780${data.poster_path}`} className="film-detail-poster" alt={`${data.original_title} poster`} />
                    <h2>{data.tagline}</h2>
                    {data.overview}
                </p>
            </div>
        </div>
    )
}

export default FilmDetail