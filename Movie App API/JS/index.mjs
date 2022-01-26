// main module

import TMDBService from "./services/TMDBService.mjs";

const tmdbs = new TMDBService();

tmdbs.get({
  url: "/movie/latest",
  method: "GET",
  onSuccess: (data) => { console.log(data) }
})