import { useContext } from 'react'
import { chatContext } from '../context/ChatContext'

const AsideRooms = () => {
  const { changeRoom } = useContext(chatContext)

  return (
    <div className="w-1/5 border-2 border-white rounded-md bg-slate-400 flex flex-col items-center justify-evenly">
      <button
        onClick={() => changeRoom('room1')}
        className="px-4 py-3 bg-red-500 rounded-lg font-bold text-xl"
      >
        Room 1
      </button>
      <button
        onClick={() => changeRoom('room2')}
        className="px-4 py-3 bg-red-500 rounded-lg font-bold text-xl"
      >
        Room 2
      </button>
      <button
        onClick={() => changeRoom('room3')}
        className="px-4 py-3 bg-red-500 rounded-lg font-bold text-xl"
      >
        Room 3
      </button>
    </div>
  )
}

export default AsideRooms
