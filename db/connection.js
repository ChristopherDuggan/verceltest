import mongoose from 'mongoose'

const connectionString = process.env.DB_URL || 'mongodb://localhost/countries'

let mongooseConnectionConfig = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(connectionString, mongooseConnectionConfig)

mongoose.connection.on('connected', ()=> console.log("Connected to database"))
mongoose.connection.on('disconnected', ()=> console.log("Disconnected from database"))
mongoose.connection.on('error', error=> console.error("Database error", error))


export default mongoose.connection
