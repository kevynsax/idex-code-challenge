import {CHANGE_LANGUAGE} from "../constants";

const initalState = {
    chosenLanguage: 'English'
};

const reducer = (state = initalState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {...state, chosenLanguage:  action.language};
            
        default:
            return state
    }
};

export const getChosenLanguage = state =>
    state.chosenLanguage;

export default reducer;