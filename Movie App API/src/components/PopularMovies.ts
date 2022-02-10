import Movie from "../domain/Movie";
import TMDBService from "../services/TMDBService";
import { MovieDataMapper } from "../domain/Movie";
// Component Lifecycle
export default class PopularMovies {
    rootElement: any;
    // when init:
    // 1.load data
  	constructor(rootElement:any){
      this.rootElement = rootElement;
      this.getMovies()
    }
  getMovies() {
    const tmdbs = new TMDBService();
    const mdm = new MovieDataMapper()

    tmdbs.get({
      method: "GET",
      url: "/movie/popular",
      onSuccess: (data) => {
        console.log(data)
        

        // data mapping
        // object plain -> hydration -> object Movie
        // let movies = []
        mdm.map(data, this.render)
        // data.results.forEach( movie => {
        //   const movieObj = new Movie(movie.id, movie.title, movie.vote_average, movie.release_date.substr(0,4), movie.poster_path, movie.original_language)
        //   movies.push(movieObj)
        // })
        // for(let i = 0; i < data.results.length; i++) {
        //   const movieData = data.results[i]
        //   const movieObj = new Movie(movieData.id, movieData.title, movieData.vote_average, movieData.release_date.substr(0,4), movieData.poster_path, movieData.original_language);
        //   movies.push(movieObj)
        // }
        


      }
    })
  }
  // render(movies: any[]) {
    
  //   this.rootElement.innerHTML = ``; 
  //   movies.forEach( movie => {
  //     this.rootElement.innerHTML += `<h2>${movie.title}</h2>`
  //   })

    // for(let i = 0; i< 5; i++) {
    //   this.rootElement.innerHTML += `
    //                                  <h2 class="card card_${i}">${movies[i].title}</h2>
                                     
    //                                  `
                      
                                    


    // }
    
    render = (movies: any[]) => {
      // this.rootElement.innerHTML = `
      //     <div class="carousel-item text-center active">
      //         <img src="https://image.tmdb.org/t/p/w300/${movies[0].poster}">
      //         <h2 class="d-block w-100">${movies[0].title}</h2>
      //         <h3>Year: ${movies[0].year}</h3>
      //         <span>Rating: ${movies[0].rating}</span>
      //     </div>
      // `;

      this.rootElement.innerHTML = ``;

      // movies.forEach(movie => {
        
          
      // });


      // for(let i = 0; i < movies.length; i++) {
        const leftArrow = document.getElementById("left-arrow")
        const rightArrow = document.getElementById("right-arrow")

        let i = 0;

        this.rootElement.innerHTML = `
             
               
                  <img class="d-block w-100" src="https://image.tmdb.org/t/p/w400/${movies[0].poster}" alt="Second slide">
                  
                  <div class="movie-details">
                    <div class="title">
                      <h4>${movies[0].title}</h4>
                    </div>
                    <div class="year">
                      <h3>${movies[0].year}</h3>
                    </div>
                    <div class="rating">
                      <h3>${movies[0].rating}</h3>
                    </div>
                  </div>
              
          `
        
        rightArrow.addEventListener("click", () => {
          i+=1;
          this.rootElement.innerHTML = `
             
               
                  <img class="the-poster" src="https://image.tmdb.org/t/p/w400/${movies[i].poster}" alt="Second slide">
                  
                  <div class="movie-details">
                    <div class="title">
                      <h4>${movies[i].title}</h4>
                    </div>
                    <div class="year">
                      <h3>${movies[i].year}</h3>
                    </div>
                    <div class="rating">
                      <h3>${movies[i].rating}</h3>
                    </div>
                  </div>
              
          `
        })
      // } 
  }

  }


