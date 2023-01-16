// Example with Node.js native http module
// import http from 'http'

// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   console.log('Hello World!')
//   res.end('Hello World!')
// })

// const server = app.listen(3000, () => {
//   console.log(`Hello world at http://localhost:${server.address().port}`)
// })

// Example with Express
import express from 'express'

const port = 3000
const app = express()

// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const helloWold = (req, res) => {
  res.send({
    message: 'Hello World!',
  })
}
const getById = (req, res) => {
  const { id, name } = req.params
  res.send({
    name,
    id,
  })
}

const examplePost = (req, res) => {
  const { message, name, age } = req?.body
  res.send({
    type: 'POST',
    name,
    age,
    message,
  })
}

const initialPort = () => {
  console.log(`Hello world at http://localhost:${port}`)
}

app.get('/', helloWold)

app.get('/:id/:name', getById)

app.post('/', examplePost)

app.listen(port, initialPort)
