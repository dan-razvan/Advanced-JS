// const whereAmI = (lat, lng) => {

// }

fetch('https://geocode.xyz/51.50354,-0.12768?geoit=json'
)
.then(response => {
 console.log(response)
 return response.json()
})
.then(data => {
    console.log(data)
})