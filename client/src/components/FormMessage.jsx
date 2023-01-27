const FormMessage = ({ roomSelected, emmitMessage }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const [user, message] = e.target.children
    const newMessage = [
      {
        user: user.value,
        message: message.value,
      },
      roomSelected,
    ]
    emmitMessage(newMessage)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-0 w-full flex gap-2 px-4 py-3"
    >
      <input
        type="text"
        placeholder="User"
        className="w-1/5 rounded-md px-2 py-2 text-black"
      />
      <input
        type="text"
        placeholder="Enter your message"
        className="w-4/5 rounded-md px-2 py-2 text-black"
      />
      <button
        type="submit"
        className="w-1/5 px-4 py-2 bg-red-500 rounded-lg font-bold text-2xl"
      >
        Send
      </button>
    </form>
  )
}

export default FormMessage
