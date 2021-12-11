import React, { useState, useEffect } from 'react'
import * as fcl from '@onflow/fcl'

const Authn = () => {
  const [address, setAddress] = useState('')

  const loginOrLogout = () => {
    if (address) {
      fcl.unauthenticate()
    } else {
      fcl.authenticate()
    }
  }

  useEffect(() => {
    fcl.currentUser().subscribe(account => setAddress(account.addr))
  }, [])

  return (
    <div>
      {address}
      <button onClick={loginOrLogout}>
        {address ? 'log out' : 'login'}
      </button>
    </div>
  )
}

export default Authn