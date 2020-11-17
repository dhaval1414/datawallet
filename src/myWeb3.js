import ethers from 'ethers'

const network = "rinkeby"

export const provider = ethers.getDefaultProvider(network, {
    infura: "f328fb5ea3f4400894b56cd9194a3bd9"
});

//generate a new random wallet
export function generateWallet(mneumonic = null) {
    let wallet = ""
    if (!mneumonic) {
        wallet = ethers.Wallet.createRandom()
    } else {
        wallet = ethers.Wallet.fromMnemonic(mneumonic)
    }
    return wallet
}

