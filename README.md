 # 🤖 Hardhat FundMe

## This project demonstrates a Funding Smart Contract that :
  - accepts payments over a pre-established $US value (by using the custom PriceConverter library)
  - adds every funder to a funders array
  - adds every amount funded to a addressToAmountFunded mapping
  - has 2 withdraw functions :
    - an usual one and a cheaper version where the storage funders array is copied in a memory array so its iteration is more gas efficient
    
    
    
## The PriceConverter custom library :
 - gets the real-time ETH price using a ChainLink AggregatorV3Interface on testnets or a MockV3Aggregator on a local network
 - gets the conversion rate of the amount funded and returns the equivalent USD amount



## The project also includes :
- deploy scripts that :
    - automatically check the network and set a proper AggregatorV3Interface for the price feed
    - verify the contract on EtherScan if it's deployed on a testnet
- unit testing and also stage testing
