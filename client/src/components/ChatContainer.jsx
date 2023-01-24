import { useContext } from 'react'
import { chatContext } from '../context/ChatContext'
import Chat from './Chat'

const ChatContainer = () => {
  const { chatHistory } = useContext(chatContext)
  // console.log(chatHistory, 'chat Rooms')

  return (
    <div className="w-4/5 border-2 border-red-600">
      <dl>
        {chatHistory.map((data, index) => {
          return <Chat data={data} index={index} key={index} />
        })}
      </dl>
    </div>
  )
}

export default ChatContainer
