import React from 'react';
import ReactDOM from 'react-dom';
import * as fcl from '@onflow/fcl'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// fcl.config()
//   .put('accessNode.api', 'https://access-testnet.onflow.org')
//   .put('challenge.handshake', 'https://flow-wallet-testnet.blocto.app/authn')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
