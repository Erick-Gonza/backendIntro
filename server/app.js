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

const rooms = {
  room1: [
    {
      user: 'system',
      message: 'room-1',
    },
  ],
  room2: [
    {
      user: 'system',
      message: 'room-2',
    },
  ],
  room3: [
    {
      user: 'system',
      message: 'room-3',
    },
  ],
}

io.on('connection', (socket) => {
  socket.on('room', (room) => {
    socket.join(room)
    io.to(room).emit('messages', rooms[room])
  })

  socket.on('newMessage', (newMessage) => {
    const [messages, room] = newMessage
    rooms[room].push(messages)
    socket.join(room)
    io.to(room).emit('messages', rooms[room])
  })
})

httpServer.listen(3000, () => {
  console.log('Server 0k')
})
