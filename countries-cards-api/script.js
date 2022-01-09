
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const mainContainer = document.querySelector(".container")


/////////////////////////////////////////////

const renderError = (msg) => {
  countriesContainer.insertAdjacentText("beforeend", msg)
  // countriesContainer.style.opacity = 1;
}

let renderCountry = (data, className="") => {
  const render = `
      <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${Object.values(data.name)[0]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
      </div>
    </article>
      `
      countriesContainer.insertAdjacentHTML("beforeend", render)
      // countriesContainer.style.opacity = 1;
}
// const getCountryData = (country) => {

//   //ajax call country 1
//   const request  = new XMLHttpRequest() ;

//   console.log(request)

//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
//   request.send()

//   request.addEventListener("load", () => {
//       // console.log(request.responseText)

//       const [data] = JSON.parse(request.responseText)
//       console.log(data)
//       console.log(Object.values(data.flags)[0])
      
//       // get country 1
//       renderCountry(data);

//       // get neighbour country
//       const neighbour = data.borders[Math.floor(Math.random()*data.borders.length)];
       
//       if(!neighbour) return;

//       const requestNeighbour = new XMLHttpRequest();
//       requestNeighbour.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`)
//       requestNeighbour.send();
//       requestNeighbour.addEventListener("load", ()=> {
//         const [dataNeighbour] = JSON.parse(requestNeighbour.responseText)
//         console.log(dataNeighbour)

//         renderCountry(dataNeighbour, "neighbour")
//       })
//   })
// }

// function for rendering error for the end user to see(not in console)

// const fetchingData = (link, ) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(response => {
//     console.log(response)
//     if(!response.ok) {
//       throw new Error(`Country not found (${response.status})`)
//     }
//     return response.json()
//   })
// }
const getJSON = (url, errorMessage = "Something went wrong: ") => {
  return fetch(url)
  .then(response => {
    console.log(response)
    if(!response.ok) {
      throw new Error(`${errorMessage} (${response.status})`)
    }
    return response.json()
  })

}

// const getCountryData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//   .then(response => {
//     console.log(response)
//     if(!response.ok) {
//       throw new Error(`Country not found (${response.status})`)
//     }
//     return response.json()
//   })
//   .then(data => {
//     renderCountry(data[0]);
//     console.log(data[0])
//     const neighbour = data[0].borders[Math.floor(Math.random() * data[0].borders.length)]
//     // const neighbour = "jhgagsjhsa"
    
//     console.log(neighbour)
//     return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//     })
//     .then(response => {
      
//       if(!response.ok) {
//         throw new Error (`Country not found (${response.status})`)
//       }
//       return response.json()
//     })
//     .then(data => {
//       renderCountry(data[0], "neighbour")
//   }).catch(err => {
//     renderError(`Something went wrong: ${err.message}`) 
//   })
//   .finally(() => {
//     countriesContainer.style.opacity = 1;

//   })
  
  
// }

const whereAmI = () => {
  
}

const getCountryData = (country) => {
  return getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found" )

  .then(data => {
    renderCountry(data[0]);
    console.log(data[0])
    // if(!data[0].borders)
    const neighbour = data[0].borders[Math.floor(Math.random() * data[0].borders.length)]
    // const neighbour = data[0].borders
    // const neighbour = "jhgagsjhsa"
    
    console.log(neighbour)

    if(!neighbour) {
      console.log("Where the neighbour bro?")
      throw new Error("No neighbour")
    }
    return getJSON(`https://restcountries.com/v3.1/alpha/${neighbour}`, "Country not found")
  })
    .then(data => {
      renderCountry(data[0], "neighbour")
  }).catch(err => {
    renderError(`Something went wrong: ${err.message}`) 
  })
  .finally(() => {
    countriesContainer.style.opacity = 1;

  })
  
  
}

btn.addEventListener("click", ()=> {
  getCountryData("france")
})
