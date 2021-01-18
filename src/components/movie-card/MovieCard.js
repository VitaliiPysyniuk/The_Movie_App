import React from "react";
import styles from './MovieCard.module.css'

export const MovieCard = (props) => {
    const {original_title, overview, poster_path, release_date, vote_average, movieGenres} = props.movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    return (
        // <div className={styles.cardSizing + ' ' + styles.cardStyling}>
        <div className={styles.cardStyling}>
            <div>
                <img src={baseURL + poster_path} alt={`${original_title} poster`} className={styles.imgSizing}/>
            </div>
            <div className={styles.infoSizing}>
                <h3>{original_title}</h3>
               <p className={styles.infoTextSize}><b>Genres: </b>{
                   movieGenres.map((genre, index) => {
                       return genre.name + (index !== movieGenres.length - 1 && ', ')})
               }</p>
                <p className={styles.textOverflow + ' ' + styles.infoTextSize}><b>Overview:</b> {overview}</p>
                <p className={styles.infoTextSize}><b>Rating:</b> {vote_average}</p>
                <p className={styles.infoTextSize}><b>Release date:</b> {release_date}</p>
            </div>
        </div>
    )
}