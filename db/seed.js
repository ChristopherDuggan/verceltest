const Country = require('../models/Country.js')
const data = require('./data.json')

const countryData = data.map(item => {
    const country = {}
    country.name = item.name
    country.capital = item.capital
    country.region = item.region
    country.population = item.population
    return country
})
console.log(countryData)

Country.remove({})
    .then(() => {
        Country.create(countryData)
            .then(countries => {
                console.log(countries)
            })
            .catch(err => {
                console.log(err)
            })
    })