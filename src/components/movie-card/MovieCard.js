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
    const {original_title, overview, poster_path, release_date, vote_average} = props.movie;
    const baseURL = 'https://image.tmdb.org/t/p/w500';
    console.log(props);

    return (
        <div className={styles.cardSizing}>
            <div>
                {/*<img src={baseURL + poster_path} alt={`${original_title} poster`}/>*/}
            </div>
            <div>
                <h3>{original_title}</h3>
                <hr/>
                <p>{overview}</p>
                <hr/>
                <p>{vote_average}</p>
                <hr/>
                <p>{release_date}</p>
                <hr/>
            </div>
        </div>
    )
}