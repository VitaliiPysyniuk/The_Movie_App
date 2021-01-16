import React from "react";
import loading from './loading-icon.png'
import styles from './LoadingIndicator.module.css'

export const LoadingIndicator = () => {
    return (
        <div className={styles.flexWrapper}>
            <p className={styles.textSize}>Loading...</p>
            <img src={loading} alt={'loading-icon'} className={styles.rotation}/>
        </div>
    )
}