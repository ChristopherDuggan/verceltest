import express from 'express'
import connection from './db/connection.js' 
import Country from './models/Country.js'

const app = express()
app.use(express.json())


app.get('/', (req, res) => {
    Country.find({})
        .then(country => res.json(country))
})

app.listen(3000, () => console.log('listening on 3000'))
