import Web3 from 'web3'
import { utils } from 'ethers'
import { baseContract } from './baseContract'

const summonMonster = async function() {
  const web3 = new Web3(window.ethereum)
  const provider = await web3.currentProvider

  if (provider) {
    const accounts = await provider.request({
      method: 'eth_requestAccounts'
    })
    try {
      const txHash = await baseContract.methods.claim().send({
        from: accounts[0],
        value: utils.parseEther('10'),
        gasLimit: 1000000
      })
      return await txHash
    } catch (err) {
      console.log(err)
    }
  } else {
    console.log('Please install MetaMask!')
  }
}

export { summonMonster }
