import { useContext } from 'react'
import { chatContext } from '../context/ChatContext'

const Header = () => {
  const { roomSelected } = useContext(chatContext)
  const styles = 'h-1/5'
  return (
    <header className={`${styles}`}>
      <h2>{roomSelected}</h2>
    </header>
  )
}

export default Header
