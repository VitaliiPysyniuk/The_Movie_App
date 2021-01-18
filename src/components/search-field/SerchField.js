import React from 'react';
import searchIcon from './search-icon.png';
import styles from './SerchField.module.css'
import {useSelector, useDispatch} from "react-redux";
import {setSearchWord} from "../../redux";

const searchInputRef = React.createRef();

export const SearchField = () => {
    const dispatch = useDispatch();
    const searchWord = useSelector(({searchWordReducer}) => searchWordReducer);
    console.log(searchWord);

    const onFormSubmit = (e) => {
        if(searchInputRef.current.value.length > 1)
            dispatch(setSearchWord(searchInputRef.current.value));
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