import {CHANGE_LANGUAGE} from "../constants";

export const changeLanguage = (language) => dispatch => ({
    type: CHANGE_LANGUAGE,
    language
});