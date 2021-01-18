import { SET_SEARCH_WORD } from '../action-types'

export const setSearchWord = (newWord) => {
    return {
        type: SET_SEARCH_WORD,
        payload: newWord
    }
}