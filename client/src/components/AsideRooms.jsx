import { useContext } from 'react'
import { chatContext } from '../context/ChatContext'

const AsideRooms = () => {
  const { roomSelected } = useContext(chatContext)
  // console.log(roomSelected, 'Aside Rooms')

  return <div className="w-1/5 border-2 border-red-600">AsideRooms</div>
}

export default AsideRooms
