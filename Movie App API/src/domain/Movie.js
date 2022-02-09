export default class Movie {
    constructor(id, title, rating, year, poster, language) {
        this.id = id;
        this.title = title;
        this.rating = rating;
        this.year = year;
        this.poster = poster;
        this.language = language;
    }
    get name() {
        return this.title;
    }
    set name(name) {
        this.title = name;
    }
    showPoster() {
        return this.poster;
    }
}
