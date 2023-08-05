import { ArweaveWebWallet } from 'arweave-wallet-connector'

const wallet = new ArweaveWebWallet({
  name: 'Hubs',
  logo: `${window.location.origin}/codehubs-removebg-preview.png`
})

wallet.setUrl('arweave.app')

export const connect = async () => {
  const result = await wallet.connect()
  if (result.ready) {
    const addr =  arweaveWallet.getActiveAddress()
    localStorage.setItem('address', addr)
    localStorage.setItem('wallet', 'arweave.app')
    return addr
  } else {
    return null
  }
}