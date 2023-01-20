import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const port = 3000
const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

let messages = [{ user: 'admin', text: 'Welcome to the chat' }]

//Server
io.on('connection', (socket) => {
  const userInstances = io.engine.clientsCount
  //Interact with the client || socket
  console.log(`user connected: ${socket.id} - ${userInstances} users connected`)
  socket.emit('message', messages)

  //Listen to the client || socket
  socket.on('newMessage', (message) => {
    messages.push(message)
    io.sockets.emit('message', messages)
  })

  socket.on('disconnect', () => {
    console.log(`user disconnected: ${socket.id}`)
  })
})

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(`index.html`)
})

httpServer.listen(port, '192.168.50.135', () => {
  console.log(`Server running on port ${port}`)
})
