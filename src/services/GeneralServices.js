import { requestAlbums, requestBands } from "../api";
import { NoResultsException, RequestException } from "../utils/errors";
import Album from "../models/Album";
import Band from "../models/Band";

export function getBands() {
  return new Promise((resolve, reject) => {
    requestBands()
      .then(bands => {
        return resolve(bands.map(band => new Band(band)));
      })
      .catch(error => {
        return reject(new RequestException());
      });
  });
}
export function getAlbums() {
  return new Promise((resolve, reject) => {
    requestAlbums()
      .then(albums => {
        return resolve(albums.map(album => new Album(album)));
      })
      .catch(error => {
        return reject(new RequestException());
      });
  });
}
