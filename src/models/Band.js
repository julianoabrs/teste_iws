import Album from "./Album";

export default class Band {
  constructor(dictionary) {
    this.id = !dictionary ? null : dictionary.id;
    this.name = !dictionary ? null : dictionary.name;
    this.image = !dictionary ? null : dictionary.image;
    this.genre = !dictionary ? null : dictionary.genre;
    this.biography = !dictionary ? null : dictionary.biography;
    this.numPlays = !dictionary ? null : dictionary.numPlays;
    this.albumsId = !dictionary ? [] : dictionary.albums;
    this.albums = [];
  }
}
