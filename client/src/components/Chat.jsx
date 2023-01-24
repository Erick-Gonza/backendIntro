const Chat = ({ data }) => {
  console.log(data, 'chatComponent')
  return (
    <>
      <h2>{data.name}</h2>

      <dt>{data.message}</dt>
    </>
  )
}

export default Chat
