import DEFAULT from "../actions/constants";
import { convertToSlug } from "../../utils/functions"

const initialState = {
  bands: [],
  albums: [],
  currentBand: null,
  filteredBands: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT.SET_ALBUMS:
      return {
        ...state,
        albums: action.albums
      };
    case DEFAULT.SET_BANDS:
      return {
        ...state,
        filteredBands: action.bands,
        bands: action.bands
      };
    case DEFAULT.SET_CURRENT_BAND:
      let currentBand = action.currentBand;
      currentBand.albums = state.albums.filter(
        album => album.band === currentBand.id
      );
      return {
        ...state,
        filteredBands: state.bands,
        currentBand: currentBand
      };
    case DEFAULT.FIND_BANDS:
      let filteredBands = state.bands.filter(
        band => convertToSlug(band.name).indexOf(convertToSlug(action.search)) > -1
      );
      return {
        ...state,
        filteredBands: filteredBands
      };
    default:
      return state;
  }
};
