import React from 'react';
import styles from './BaseLayout.module.css'

export const BaseLayout = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
            <header>
                This is header
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