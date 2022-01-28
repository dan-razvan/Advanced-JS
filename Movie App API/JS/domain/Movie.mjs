import { tmdbs } from "../boot.mjs";

export default class Movie {
  
  constructor(id, title, rating, poster, language){
      this.id = id;
      this.title = title;
      this.rating = rating;
      // this.year = year;
      this.poster = poster;
      this.language = language;
}

  get name () {
    return this.title;
  }

  set name(name){
    this.title = name;
  }

  get year () {
    let releaseDate = tmdbs.data.results.map(res=>res.release_date)

  }

  showPoster(){
    return this.poster;
  }

}