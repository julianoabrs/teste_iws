import { API_DATA } from "../utils/configs";
import axios from "axios";

const URL_BANDS = "/bands";
const URL_ALBUMS = "/albums";

export function requestBands() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: API_DATA.urlBase + URL_BANDS,
      params: null,
      headers: API_DATA.headers,
      responseType: "json"
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.response);
      });
  });
}

export function requestAlbums() {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: API_DATA.urlBase + URL_ALBUMS,
      params: null,
      headers: API_DATA.headers,
      responseType: "json"
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(error.response);
      });
  });
}