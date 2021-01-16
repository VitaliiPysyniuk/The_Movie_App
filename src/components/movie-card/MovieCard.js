import React from "react";
import styles from './MovieCard.module.css'

// adult: false
// backdrop_path: "/4A0f1oqkJLohy8LXjmJpops7CMB.jpg"
// genre_ids: (3) [18, 80, 53]
// id: 8984
// original_language: "en"
// original_title: "Disclosure"
// overview: "A computer specialist is sued for sexual harassment by a former lover turned boss who initiated the act forcefully, which threatens both his career and his personal life."
// popularity: 574.287
// poster_path: "/m10Sx3ikuXhJomFnN3OYpkBpYEc.jpg"
// release_date: "1994-03-10"
// title: "Disclosure"
// video: false
// vote_average: 6.3
// vote_count: 763

export const MovieCard = (props) => {
    const {original_title, overview, poster_path, release_date, vote_average, genres} = props.movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    console.log(genres.length);
    return (
        // <div className={styles.cardSizing + ' ' + styles.cardStyling}>
        <div className={styles.cardStyling}>
            <div>
                <img src={baseURL + poster_path} alt={`${original_title} poster`} className={styles.imgSizing}/>
            </div>
            <div className={styles.infoSizing}>
                <h3>{original_title}</h3>
               <p className={styles.infoTextSize}><b>Genres: </b>{
                   genres.map((genre, index) => {
                       return genre.name + (index !== genres.length - 1 && ', ')})
               }</p>
                <p className={styles.textOverflow + ' ' + styles.infoTextSize}>{overview}</p>
                <p className={styles.infoTextSize}><b>Rating:</b> {vote_average}</p>
                <p className={styles.infoTextSize}><b>Release date:</b> {release_date}</p>
            </div>
        </div>
    )
}