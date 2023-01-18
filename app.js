import express from 'express'
import { routes } from './routes/index.js'

const port = 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Hello world at http://localhost:${port}`)
})
