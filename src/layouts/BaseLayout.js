import React from 'react';
import styles from './BaseLayout.module.css'
import {SearchField} from "../components";

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>
                <h3>TMDB</h3>
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