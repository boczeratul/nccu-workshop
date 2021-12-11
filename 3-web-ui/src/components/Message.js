import React, { useEffect, useState } from 'react'
import * as fcl from '@onflow/fcl'
// import * as types from '@onflow/types'

// const getMessageSciprt = `
// import MessageBoard from 0x14fbf315964af758

// pub fun main(): String {
//   return MessageBoard.getMessage()
// }
// `;

// const setMessageTransaction = `
// import MessageBoard from 0x14fbf315964af758

// transaction(message: String) {
//   prepare(account: AuthAccount) {
//     MessageBoard.setMessage(message: message, author: account.address)
//   }
// }
// `

const Message = () => {
  const [currentMessage, setCurrentMessage] = useState('')
  const [newMessage, setNewMessage] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const updateMessage = () => {
    // fcl.send([
    //   fcl.script(getMessageSciprt)
    // ])
    //   .then(fcl.decode)
    //   .then(setCurrentMessage)
  }

  const handleInputUpdate = (event) => {
    setNewMessage(event.target.value)
  }

  const handleSubmit = () => {
    setIsProcessing(true)

    fcl.send([
      // fcl.transaction(setMessageTransaction),
      // fcl.args([
      //   fcl.arg(newMessage, types.String)
      // ]),
      // fcl.proposer(fcl.currentUser().authorization),
      // fcl.authorizations([
      //   fcl.currentUser().authorization
      // ]),
      // fcl.payer(fcl.currentUser().authorization),
      // fcl.limit(100)
    ])
      .then(({ transactionId }) => {
        const unsub = fcl
          .tx({ transactionId })
          .subscribe(transaction => {
            if (fcl.tx.isSealed(transaction)) {
              updateMessage()
              setIsProcessing(false)
              unsub()
            }
          })
      })
  }

  useEffect(updateMessage, [])

  return (
    <div>
      Current Message: {currentMessage}
      <div>
        <input onChange={handleInputUpdate} />
        <button disabled={isProcessing} onClick={handleSubmit}>
          {isProcessing ? "Processing..." : "Submit"}
        </button>
      </div>
    </div>
  )
}

export default Message