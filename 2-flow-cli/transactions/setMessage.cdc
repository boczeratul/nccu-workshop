import MessageBoard from "../contracts/MessageBoard.cdc"

transaction(message: String) {
  prepare(account: AuthAccount) {
    
  }

  execute {
    MessageBoard.setMessage(message: message)
  }
}