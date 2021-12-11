import MessageBoard from 0x01

transaction(message: String) {
  prepare(account: AuthAccount) {
    MessageBoard.setMessage(message: message, author: account.address)
  }
}