# 2 Flow CLI

- [Install](https://docs.onflow.org/flow-cli/install/) Flow CLI (Command Line Interface).
- Create a key pair
```sh
flow keys generate
```

- Create an account with the generate key to host the `MessageBoard` contract.
```sh
flow transactions send ./transactions/createAccount.cdc YOUR_KEY --network testnet --signer shared-admin
```

- Deploy the `MessageBoard` contract.
```sh
flow project deploy --network testnet
```

- Get the current message in the contract.
```sh
flow scripts execute ./scripts/getMessage.cdc --network testnet
```

- Update the message in the contract.
```sh
flow transactions send ./transactions/setMessage.cdc "Hello World" --network testnet --payer contract-admin
```

- Get the current message in the contract again.
```sh
flow scripts execute ./scripts/getMessage.cdc --network testnet
```