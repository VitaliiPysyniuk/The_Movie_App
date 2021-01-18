import {SET_SEARCH_WORD} from "../action-types";

const initialState = 'initial_word';

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH_WORD: {
            return action.payload
        };
        default: {
            return state
        };
    }
}