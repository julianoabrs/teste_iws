export default class Track {
  constructor(dictionary) {
    this.id = !dictionary ? null : dictionary.id;
    this.name = !dictionary ? null : dictionary.name;
    this.duration = !dictionary ? null : dictionary.duration;
  }
}
