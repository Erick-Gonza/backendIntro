const socket = io()
const userIdParagraph = document.getElementById('userId')

socket.on('message', (message) => {
  userIdParagraph.innerHTML = `UserId: ${socket.id}`
  console.log(message)
  socket.emit('answer', 'Hello from the client')
})
