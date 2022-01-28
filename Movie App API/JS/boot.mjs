import StorageService from "./services/StorageService.mjs";
import TMDBService from "./services/TMDBService.mjs";
import Movie from "./domain/Movie.mjs";


const tmdbs = new TMDBService();
const ss = new StorageService();

// const movie = new Movie(tmdbs.);


export {tmdbs, ss}

