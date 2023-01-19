import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'
import path from 'path'

const port = 3000
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

const __dirname = path.resolve()

//Server
io.on('connection', (socket) => {
  //Interact with the client || socket
  const userInstances = io.engine.clientsCount
  console.log(`user connected: ${socket.id} - ${userInstances} users connected`)

  socket.emit('message', 'Hello from the server')

  socket.on('disconnect', () => {
    console.log(`user disconnected: ${socket.id}`)
  })
  socket.on('answer', (message) => {
    console.log(message)
  })
})

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`)
})

httpServer.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
