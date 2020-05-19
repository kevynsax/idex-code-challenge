import {CHANGE_LANGUAGE} from "../constants";

export const changeLanguage = (language) => ({
    type: CHANGE_LANGUAGE,
    language
});