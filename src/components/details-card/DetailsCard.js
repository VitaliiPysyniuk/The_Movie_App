import React from "react";
import styles from './DetailsCard.module.css'

export const DetailsCard = (props) => {
    const {original_title, overview, poster_path, release_date, vote_average, genres} = props.movie;
    return (
        <div>
            <h1 className={styles.titleStyling}>{original_title}</h1>
            <div className={styles.flexWrapper}>
                <div className={styles.blockSizing}>
                    <img className={styles.imgSizing} src={poster_path} alt={original_title}/>
                </div>
                <div className={styles.blockSizing}>
                    <p className={styles.infoTextStyling}><b>Genres: </b>{
                        genres.map((genre, index) => {
                            return genre.name + (index !== genres.length - 1 && ', ')
                        })
                    }</p>
                    <p className={styles.infoTextStyling}><b>Overview:</b> {overview}</p>
                    <p className={styles.infoTextStyling}><b>Rating:</b> {vote_average}</p>
                    <p className={styles.infoTextStyling}><b>Release date:</b> {release_date}</p>
                </div>
            </div>
        </div>
    )
}