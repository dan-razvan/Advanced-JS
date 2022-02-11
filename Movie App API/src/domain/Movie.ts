export default class Movie {
  id: number;
  title: string;
  rating: number;
  year: number;
  poster: string;
  language: string;

  constructor(id:number, title:string, rating:number, year:number, poster: string, language:string){
      this.id = id;
      this.title = title;
      this.rating = rating;
      this.year = year;
      this.poster = poster;
      this.language = language;
  }

  get name () {
      return this.title;
  }

  set name(name){
      this.title = name;
  }

  showPoster(){
      return this.poster;
  }
}

export class MovieDataMapper {

    map(data, cb) {

        let movies = [];
        data.results.forEach(element => {
            const movieData = element;
            const movieObj  = new Movie(
                movieData.id,
                movieData.title,
                movieData.vote_average,
                movieData.release_date.substring(0, 4),
                movieData.poster_path,
                movieData.original_language
            );
            movies.push(movieObj);
        });

        console.log(movies);
        cb(movies)
    }

    renderPoster(poster, title, year, rating) {
        return `<img class="d-block w-100" src="https://image.tmdb.org/t/p/w400/${poster}" alt="Second slide">
        <div class="movie-details">
          <div class="title">
            <h4>${title}</h4>
          </div>
          <div class="year">
            <h3>${year}</h3>
          </div>
          <div class="rating">
            <h3>${rating}</h3>
          </div>
        </div>  `  
    }
}
