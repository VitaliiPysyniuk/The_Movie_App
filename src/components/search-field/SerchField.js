import React from 'react';
import searchIcon from './search-icon.png';
import styles from './SerchField.module.css'

const searchInputRef = React.createRef();

export const SearchField = () => {

    const onFormSubmit = (e) => {
        console.log(searchInputRef.current.value);
        searchInputRef.current.value = '';
        e.preventDefault();
    }

    return (
        <form className={styles.flexWrapper + ' ' + styles.formStyling} onSubmit={onFormSubmit}>
            <input ref={searchInputRef} type={'text'} className={styles.searchInput}/>
            <input type={'image'} src={searchIcon} alt={'search-icon'} className={styles.searchImg} />
        </form>
    );
};