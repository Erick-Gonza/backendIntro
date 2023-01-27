import { useContext } from 'react'
import { chatContext } from '../context/ChatContext'
import Chat from './Chat'
import FormMessage from './FormMessage'

const ChatContainer = () => {
  const { newMessages, roomSelected, emmitMessage } = useContext(chatContext)

  return (
    <div className="w-4/5 border-2 border-white rounded-md bg-slate-400 flex flex-col">
      <section className="flex-1 rounded-b-md">
        <dl>
          {newMessages &&
            newMessages.map((message, key) => {
              return <Chat message={message} key={key} />
            })}
        </dl>
      </section>
      <FormMessage roomSelected={roomSelected} emmitMessage={emmitMessage} />
    </div>
  )
}

export default ChatContainer
