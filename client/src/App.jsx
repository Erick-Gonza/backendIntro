import { io } from 'socket.io-client'
import Main from './components/Main'
import Header from './components/Header'

function App() {
  const socket = io('http://localhost:3001')

  socket.on('connect', () => {
    console.log('connected', socket.id)
  })

  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
