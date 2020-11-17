import { Ocean, DataTokens, Config, ConfigHelper } from '@oceanprotocol/lib'
import {provider} from './myWeb3'
const factory = require('@oceanprotocol/contracts/artifacts/DTFactory.json')
const datatokensTemplate = require('@oceanprotocol/contracts/artifacts/DataTokenTemplate.json')

const defaultConfig: Config = new ConfigHelper().getConfig(
    'rinkeby',
    '
)
  
// Alice's config
const config = {
  metadataStoreUri: 'http://aquarius:5000',
  providerUri: 'http://localhost:8030',
  nodeUri: `http://localhost:${process.env.ETH_PORT || 8545}`,
  verbose: LogLevel.Error,
  web3Provider: provider,
  factoryAddress: '0x123456789...'
}
const ocean = await Ocean.getInstance(config)
const alice = (await ocean.accounts.list())[0]

datatoken = new DataTokens(
  config.factoryAddress,
  factory.abi,
  datatokensTemplate.abi,
  provider
)
const data = { t: 1, url: ocean.config.metadataStoreUri }
const blob = JSON.stringify(data)

const dataTokenAddress = await datatoken.create(blob, alice.getId())

console.log(dataTokenAddress)