pub contract MessageBoard {
  access(contract) var message: String

  pub fun setMessage(message: String, author: Address) {
    self.message = message.concat(" by ").concat(author.toString())
  }

  pub fun getMessage(): String {
    return self.message
  }

  init () {
    self.message = "nothing here yet..."
  }
}