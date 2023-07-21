import mongoose from 'mongoose'
import connection from './connection.js'
import data from '../countries.json' assert { type: 'json' }
import Country from '../models/Country.js'

let countryData = data.map(item => {
    const country = {}
    country.name = item.name.official

    // Some of the capitals are undefined!
    item.capital ?
        country.capital = item.capital[0]
        : country.capital = ''

    country.region = item.region
    country.population = item.population
    return country
})

Country
    .deleteMany({})
    .then(() => Country.create(countryData))
    .then(() => console.log("Done!"))
    .then(() => mongoose.disconnect())
    .catch(error => console.error("Error", error))



















