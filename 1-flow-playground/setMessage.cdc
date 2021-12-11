import MessageBoard from 0x01

transaction(message: String) {
  execute {
    MessageBoard.setMessage(message: message)
  }
}