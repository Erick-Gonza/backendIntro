import express from 'express'
import { isAdmin } from './utils/middleware.js'

const port = 3000
const app = express()

// app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// const helloWold = (req, res) => {
//   res.send({
//     message: 'Hello World!',
//   })
// }
// const getById = (req, res) => {
//   const { id, name } = req.params
//   res.send({
//     name,
//     id,
//   })
// }

// const examplePost = (req, res) => {
//   const { message, name, age } = req?.body
//   res.send({
//     type: 'POST',
//     name,
//     age,
//     message,
//   })
// }

const initialMessage = () => {
  console.log(`Hello world at http://localhost:${port}`)
}

//CRUD

//Create
app.post('/', (req, res) => {
  const { name, age } = req.body
  res.send({
    name,
    age,
  })
})

//Read
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World!',
  })
})

//Read by Id
app.get('/:id/:name', (req, res) => {
  const { id, name } = req.params
  res.send({
    name,
    id,
  })
})

app.use(isAdmin)
//Update
app.put('/:id', (req, res) => {
  const { id } = req.params
  const { name, age } = req.body
  res.send({
    id,
    name,
    age,
  })
})

//Delete
app.delete('/:id', (req, res) => {
  const { id } = req.params
  res.send({
    id,
  })
})

app.listen(port, initialMessage)
