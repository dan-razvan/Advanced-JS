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

// export class MovieDataMapper {
    
//     map(data, cb) {
//         let movies = []
//         data.results.forEach( movie => {
//           const movieObj = new Movie(movie.id, movie.title, movie.vote_average, movie.release_date.substring(0,4), movie.poster_path, movie.original_language)
//           movies.push(movieObj)
//         })
//         console.log(movies)
//         cb(movies)
        
//     }
// }

export class MovieDataMapper {
    map(data, cb) {
    
        // Data mapping
        // object plain -> hydration -> object Movie
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
}
