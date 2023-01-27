import AsideRooms from './AsideRooms'
import ChatContainer from './ChatContainer'

const Main = () => {
  return (
    <main className="flex h-3/5 gap-3">
      <AsideRooms />
      <ChatContainer />
    </main>
  )
}

export default Main
