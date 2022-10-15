const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db.js')

dotenv.config({ path: './config/config.env' })

connectDB()

const bootcamps = require('./router/bootcamps.js')
const app = express()
const PORT = process.env.PORT || 5000

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('/api/v1/bootcamps', bootcamps)

app.listen(PORT, console.log(`ENV: ${process.env.NODE_ENV} PORT: ${process.env.PORT}`))
