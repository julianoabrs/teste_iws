import { LANGUAGE } from "../utils/configs"

let currentLanguageStrings

switch (LANGUAGE) {
    case "en":
        currentLanguageStrings = require("./strings/en")
        break
    case "pt-BR":
        currentLanguageStrings = require("./strings/pt-BR")
        break
    default:
        currentLanguageStrings = require("./strings/pt-BR")
}

export const ERRORS_STRINGS = currentLanguageStrings.ERRORS
export const HOME_STRINGS = currentLanguageStrings.HOME
export const BAND_STRINGS = currentLanguageStrings.BAND
export const ALBUM_STRINGS = currentLanguageStrings.ALBUM