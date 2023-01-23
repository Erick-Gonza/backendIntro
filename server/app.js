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

io.on('connection', (socket) => {
  console.log('a user connected')
})

httpServer.listen(port, () => {
  console.log(`listening on port: ${port}`)
})
