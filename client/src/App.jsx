import Main from './components/Main'
import Header from './components/Header'
import ChatContext from './context/ChatContext'

function App() {
  return (
    <>
      <ChatContext>
        <Header />
        <Main />
      </ChatContext>
    </>
  )
}

export default App
