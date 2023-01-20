const socket = io()
const user = document.getElementById('user')
const userMessage = document.getElementById('userMessage')
const chat = document.getElementById('chat')
const newMessage = document.getElementById('msg')
const form = document.getElementById('chat-form')

let getData = []

const addMessage = (data) => {
  const messages = data
    .map((m, i) => {
      if (m.user === getData[i - 1]?.user) {
        return `<p>${m.text}</p>`
      } else {
        return `<p>${m.user}: ${m.text}</p>`
      }
    })
    .join('')

  chat.innerHTML = messages
}

socket.on('message', (data) => {
  user.innerHTML = `User Id: ${socket.id}`
  getData = data
  addMessage(data)
})

form.onsubmit = (e) => {
  e.preventDefault()
  const message = {
    user: socket.id,
    text: newMessage.value,
  }
  message.text === ''
    ? alert('Please enter a message')
    : socket.emit('newMessage', message)

  newMessage.value = ''
}
