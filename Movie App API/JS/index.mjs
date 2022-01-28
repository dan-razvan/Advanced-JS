// main module
import {tmdbs, ss} from "./boot.mjs"
const title = document.getElementById("title")
const rating = document.getElementById("rating")
const year = document.getElementById("year")
// const carousel = document.getElementById("carousel-item")




tmdbs.get({
  url: "/movie/popular",
  method: "GET",
  onSuccess: (data) => { 
    console.log(data)
    console.log(data.results.map(res=>res.release_date)[0].substring(0,4))
    title.innerText = data.results[0].title;
    console.log(title.innerText)
    year.innerText = data.results.map(res=>res.release_date)[0].substring(0,4)
    
    rating.innerText = data.results[0].vote_average;
    console.log(rating.innerText)

    // title.style.color = "white";
    // rating.style.color = "black";
    rating.style.fontWeight = "bold";

    
    // setting local storage
    ss.set({
      url: "/movie/popular",
      data
      }) 
  }
})

