import FungibleToken from "../contracts/FungibleToken.cdc"
import FlowToken from "../contracts/FlowToken.cdc"

transaction(publicKey: String) {
  prepare(payer: AuthAccount) {
    let account = AuthAccount(payer: payer)

    // Add a key
    account.keys.add(
      publicKey: PublicKey(
        publicKey: publicKey.decodeHex(),
        signatureAlgorithm: SignatureAlgorithm.ECDSA_P256
      ),
      hashAlgorithm: HashAlgorithm.SHA3_256,
      weight: 1000.0
    )

    // Get a reference to the payer''s stored vault
    let vaultRef = payer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)
      ?? panic("Could not borrow reference to the owner''s Vault!")

    // Withdraw tokens from the signer''s stored vault
    let sentVault <- vaultRef.withdraw(amount: 0.01)

    // Get a reference to the recipient''s Receiver
    let receiverRef = account.getCapability(/public/flowTokenReceiver).borrow<&{FungibleToken.Receiver}>()
      ?? panic("Could not borrow receiver reference to the recipient''s Vault")

    // Deposit the withdrawn tokens in the recipient''s receiver
    receiverRef.deposit(from: <- sentVault)
  }
}