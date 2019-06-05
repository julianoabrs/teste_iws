import DEFAULT from "./constants";

export const setBands = bands => {
  return {
    type: DEFAULT.SET_BANDS,
    bands
  };
};

export const setAlbums = albums => {
  return {
    type: DEFAULT.SET_ALBUMS,
    albums
  };
};

export const setCurrentBand = currentBand => {
  return {
    type: DEFAULT.SET_CURRENT_BAND,
    currentBand
  };
};

export const findBands = search => {
  return {
    type: DEFAULT.FIND_BANDS,
    search
  };
};
