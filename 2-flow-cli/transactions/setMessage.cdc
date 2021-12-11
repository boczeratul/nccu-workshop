import MessageBoard from "../contracts/MessageBoard.cdc"

transaction(message: String) {
  prepare(account: AuthAccount) {
    MessageBoard.setMessage(message: message, author: account.address)
  }
}