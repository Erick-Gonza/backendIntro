import { createContext, useEffect, useState } from 'react'
import { io } from 'socket.io-client'

export const chatContext = createContext()
const { Provider } = chatContext

export const ChatContext = ({ children }) => {
  const socket = io('http://localhost:3001')
  const [roomSelected, setRoomSelected] = useState('room-1')
  const [chatHistory, setChatHistory] = useState([])

  const handleChatHistory = (message) => {
    setChatHistory((prev) => [...prev, message])
  }

  useEffect(() => {
    socket.emit('room', roomSelected)
  }, [roomSelected])

  socket.on('message', (message) => handleChatHistory(message))

  const chatSession = {
    roomSelected,
    chatHistory,
  }
  return <Provider value={chatSession}>{children}</Provider>
}

export default ChatContext
