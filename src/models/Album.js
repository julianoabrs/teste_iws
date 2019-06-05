import Track from "./Track";

export default class Album {
  constructor(dictionary) {
    this.id = !dictionary ? null : dictionary.id;
    this.name = !dictionary ? null : dictionary.name;
    this.image = !dictionary ? null : dictionary.image;
    this.releasedDate = !dictionary ? null : dictionary.releasedDate;
    this.band = !dictionary ? null : dictionary.band;
    this.tracks = !dictionary ? [] : this._parseTracks(dictionary.tracks);
  }

  _parseTracks(tracks) {
    return tracks.map(track => {
      return new Track(track);
    });
  }
}