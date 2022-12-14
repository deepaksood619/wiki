# Consensus Protocols

## Proof of Work (PoW)

## Proof of Stake (PoS) / Staking

- Staking (Proof of Stake) is a blockchain consensus mechanism whereby a certain number of coins are locked away in order to append new blocks to the blockchain and ensure the security of the blockchain.
- Like PoA, but authority is indirectly established by "stake", suh as token holdings
- May offer integrated punishement mechanism for malicious nodes: slashing
- Current **holy grail** to get of the energy waste stigma (both Ethereum and IOTA plan to pivot to PoS)
- Slight problems
  - How is stake initally distributed?
    - Popular: Sale of tokens
    - Alternative: Bootstrap off of existing blockchains
  - No built-in defence against centralization. No Sybil resistance
    - Even if bootstrapped correctly, may become centralized without any visible sign
- By owning and staking the coins, you not only become an important part of securing the entire network, but you also get paid for this service. This regular income stream is paid out directly from the blockchain and is deeply embedded in the underlying programming code. The payout amounts (emission rates) vary from blockchain to blockchain; for example, for staking DeFiChain (DFI) you currently receive over 40% APY, while for staking DASH it is over 5% APY.

<https://www.coindesk.com/learn/crypto-staking-101-what-is-staking>

<https://www.forbes.com/advisor/in/investing/cryptocurrency/what-is-staking-in-crypto>

<https://www.youtube.com/playlist?list=PLAXQ4YtxCRUGVUXRJ-uSzyvNxZQq74uLY>

## Proof of Authority (PoA)

- Blocks must be signed by a sufficient quorum of "authoritative" nodes
- Very simple,, very efficient
- Requires trust in the authorities
  - How are they chosen?
- Basically: A PKI, a databases, and a hashchain in a trenchcoat
- Standard construction for "private"/"permissioned" blockchains

## Proof of Storage

- Example: Chia (2018)
  - Increased wear destroys SSDs after less than a year
  - No use beyond price speculation

## Proof of Elapsed Time (2016)

- Instead of computing hashes for PoW, just do: nothing! Go to sleep!
- Incredible enery savings compared to PoW
- Drop-in solution, behaves exactly like PoW
- Used in permissioned environments
- Small questions: What guarantees do other nodes have that no node wakes up before its time?
  - Intel SGX
- See also: Proof of Luck (PoL)

## mobilecoin (2020): Proof of complexity

- Mobile-device focused
- Pulls every cryptographic register there is
  - Stellar consensus
  - Zero-knowledge proofs for everything
  - Ristretoo, Schnorr anonymous signatures, Pedersen commitments
- Security against double-spending completely relies on Intel SGX enclaves
- Entire token supply is pre-mined
