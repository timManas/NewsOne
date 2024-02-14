import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import express from 'express'
import cors from 'cors'
import queryRoutes from './routes/queryRoutes.js'

const PORT = 5000
const app = express()

app.use(cors())
app.use(express.json())

app.use('/query', queryRoutes)
app.use('/', (req, res) => {
  res.send('API is running')
})

app.listen(PORT, () => {
  console.log('Listening on Port:5000')
})
