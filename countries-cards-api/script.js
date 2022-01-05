
'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = (data, className = "") => {
    const html = `
        <article class="country ${className}">
        <img class="country__img" src="${Object.values(data.flags)[0]}" />
        <div class="country__data">
        <h3 class="country__name">${Object.values(data.name)[0]}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.values(data.currencies)[0].name}</p>
        </div>
    </article>
        `
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
}

// const getCountryAndNeighbour = function(country) {

//     // Ajax call country 1
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function() {
//         let data;
//         if(country == "romania"){
//             data = JSON.parse(this.responseText)[1]

//         }else{
//             [data] = JSON.parse(this.responseText)
            
//         }
//         console.log(data)

//         //Render Country 1
//         renderCountry(data)

//         // Get neighbour country
//         const [neighbour] = data.borders
//         console.log(neighbour)

//         if(!neighbour) return;

//         const request2 = new XMLHttpRequest();
//         request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//         request2.send();
        
//         request2.addEventListener("load", function() {
//             const [data2] = JSON.parse(this.responseText)
//             console.log(data2)
//             renderCountry(data2, "neighbour")
//             // console.log(this.responseText)
//         });

//     });
// };

// getCountryAndNeighbour("moldova")


// const request = fetch("https://restcountries.com/v3.1/name/portugal")

// console.log(request)


//////////////////////////////////////
// const getCountryData = (country) => {
//     fetch(`https://restcountries.com/v3.1/name/${country}`).then(function(response) {
//         console.log(response)

//         return response.json();
//     }).then(data => {
//         console.log(data)
//         renderCountry(data[0])
//     })
// }
/////////////////////////////////////////

const getCountryData = (country ) => {
    // country 1
    fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
        renderCountry(data[0])
        console.log(data[0].borders)
        const neighbour = data[0].borders[Math.floor(Math.random()*data[0].borders.length)]
        console.log(neighbour)

        if(!neighbour) return;

        // country 2
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
})
.then(response => response.json())
.then(data => renderCountry(data[0], "neighbour"))
};

getCountryData("france")