# ERC-3525

**Introduction**:

ERC-3525 is a Semi-Fungible token standard designed by Solv Protocol to address the limitations of ERC-20 and ERC-721 token standards. It combines the divisibility of ERC-20 tokens and the information description capabilities of ERC-721. The ERC-3525 token contains an ID property, units, and a slot, allowing token sharding and making it easier to manage and increase liquidity. Solv Protocol was the first to use ERC-3525 in Initial Voucher Offerings (IVOs), which they use to distribute project tokens to the community. ERC-3525 tokens created in IVO projects can be listed on marketplaces such as Solv's IVO Market and Binance NFT.

\***\*What can ERC-3525 Tokens be used for?\*\***

ERC-3525 tokens are used as digital assets for various purposes, such as:

- Representing ownership or stake in a project or organization.
- Storing value and being traded on decentralized exchanges.
- Providing access to services or products within a decentralized platform.
- Being used as collateral or utility in decentralized finance (DeFi) applications.

**How is it different from 1155?**

ERC-3525 and ERC-1155 are both semi-fungible tokens used for different purposes. ERC-1155 is a two-tiered structure used primarily in the game industry for items like game currency and collectibles. The two-tiered structure in ERC-1155 includes the `ID` and `VALUE` of the token, allowing for the differentiation of similar tokens through unique IDs.

ERC-3525, on the other hand, has a three-tiered structure and allows for the merging and splitting of tokens, providing more flexibility for financial product innovation. The three-tiered structure in ERC-3525 consists of `ID`, `SLOT`, and `VALUE`, where the SLOT attribute enables the merging and splitting of tokens, making it possible to transfer a portion of a token's ownership. The extra tier in ERC-3525 offers a more advanced level of token management, allowing for a wider range of applications in the tokenized financial products market.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/07048280-a32d-4ec8-b28d-0072861aee51/Untitled.png)

**Conclusion:**

ERC-3525 provides a unique solution for tokens by combining the qualities of both fungible and non-fungible tokens. It creates a three-tiered system in which tokens with the same "slot" value become interchangeable like traditional fungible tokens, while tokens with different "slot" values become unique, similar to non-fungible tokens. This solves the limitations of the commonly used ERC-20 token standard, which cannot carry much information, and the ERC-721 token standard, which lacks liquidity.

**References**:

[https://eips.ethereum.org/EIPS/eip-3525](https://eips.ethereum.org/EIPS/eip-3525)

[https://medium.com/solv-blog/erc-3525-starter-kit-developer-edition-9d734ca62bd0](https://medium.com/solv-blog/erc-3525-starter-kit-developer-edition-9d734ca62bd0)

[https://github.com/solv-finance/erc-3525](https://github.com/solv-finance/erc-3525)

[https://whitepaper.sftlabs.io/SFT Whitepaper.pdf](https://whitepaper.sftlabs.io/SFT%20Whitepaper.pdf)
