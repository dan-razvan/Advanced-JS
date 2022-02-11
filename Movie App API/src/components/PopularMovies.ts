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
        mdm.map(data, this.render)

      }
    })
  }

    
    render = (movies: any[]) => {

      const mdm = new MovieDataMapper()

      this.rootElement.innerHTML = ``;

        const leftArrowContainer = document.getElementById("left-arrow")
        const rightArrowContainer = document.getElementById("right-arrow")

        let i = 0;
        if(i == 0) {
          leftArrowContainer.style.visibility="hidden";
        }

        this.rootElement.innerHTML =  mdm.renderPoster(movies[0].poster, movies[0].title, movies[0].year, movies[0].rating)
          
        
        rightArrowContainer.addEventListener("click", () => {
          leftArrowContainer.style.visibility="visible"
 
            i += 1; 
            this.rootElement.innerHTML = mdm.renderPoster(movies[i].poster, movies[i].title, movies[i].year, movies[i].rating)

            if(i>=4){
              i = 4;
              rightArrowContainer.style.visibility="hidden"
              return;
            }
        })

        leftArrowContainer.addEventListener("click", () => {
          rightArrowContainer.style.visibility="visible"

            i-=1;
                
            this.rootElement.innerHTML = 
          
            mdm.renderPoster(movies[i].poster, movies[i].title, movies[i].year, movies[i].rating)
            if(i<=0) {
              i = 0;
              leftArrowContainer.style.visibility="hidden"
              return;
            } 
        })
    }

  }


