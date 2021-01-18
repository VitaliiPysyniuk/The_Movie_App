import React from 'react'
import styles from './ErrorPage.module.css';

export const ErrorPage = () => {
  return (
      <div className={styles.messageWrapper}>
          <p className={styles.message}>Page not found <br/> Error 404</p>
      </div>
  );
};