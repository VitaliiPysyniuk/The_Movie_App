import React from 'react';
import styles from './BaseLayout.module.css'
import {SearchField} from "../components";
import {Link} from 'react-router-dom';

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>
                <Link to={'/movies'}><h2>TMDB</h2></Link>
                <SearchField/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                This is footer
            </footer>
        </div>
    )
}