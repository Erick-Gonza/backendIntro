import express from 'express'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:5173',
  },
})
const port = 3001

const rooms = {
  'room-1': {
    name: 'room-1',
    message: 'Welcome to room-1',
    users: [],
  },
  'room-2': {
    name: 'room-2',
    message: 'Welcome to room-2',
    users: [],
  },
  'room-3': {
    name: 'room-3',
    message: 'Welcome to room-3',
    users: [],
  },
}

io.on('connection', (socket) => {
  socket.on('room', (room) => {
    socket.join(rooms[room])
    io.to(rooms[room]).emit('message', rooms[room])
    rooms[room].users.push(socket.id)
  })
})

httpServer.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
