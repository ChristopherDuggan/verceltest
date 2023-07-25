import express from 'express'
import connection from './db/connection.js' 
import Country from './models/Country.js'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get('/api', (req, res) => {
    Country.find({})
        .then(country => res.json(country))
})

app.get('/api/:name', (req, res) => {
    Country.find({ name: req.params.name })
        .then(country => res.json(country))
})

app.listen(PORT, () => console.log('listening on 3000'))
