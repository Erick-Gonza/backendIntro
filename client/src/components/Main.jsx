import AsideRooms from './AsideRooms'
import ChatContainer from './ChatContainer'

const Main = () => {
  return (
    <main className="flex h-3/4">
      <ChatContainer />
      <AsideRooms />
    </main>
  )
}

export default Main
