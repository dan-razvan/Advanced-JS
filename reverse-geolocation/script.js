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


const whereAmI = (lat, lon) => {
  fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=e005df882bf54bc9aff30fb2c8ac6740`)
  // fetch(`curl 'https://geocode.xyz/${lat},${lon}?geoit=json'`)

  .then(response => {
    if(!response.ok) {
      throw new Error (`Problem with geocoding. (${response.status})`)
    }
    return response.json()
   })
  .then(data => {
    getCountryData(data.features[0].properties.country)
  })
  .catch(err => {
    console.error(`Something went wrong: ${err.message}`)
  })
}

const getCountryData = (country) => {
  return getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found" )

  .then(data => {
    renderCountry(data[0]);
    console.log(data[0])

    const neighbour = data[0].borders[Math.floor(Math.random() * data[0].borders.length)]

    
    console.log(neighbour)

    if(!neighbour) {
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
  let lat = document.querySelector(".lat").value
  let lon = document.querySelector(".lon").value
  whereAmI(lat, lon)
})