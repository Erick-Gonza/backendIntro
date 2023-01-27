const Chat = ({ message }) => {
  return (
    <>
      <dt className="text-white">{message.user} :</dt>
      <dd className="text-white">{message.message}</dd>
    </>
  )
}

export default Chat
