
let arweaveWallet

export const connect = async () => {
    if (!window.arweaveWallet) {
      alert('ArConnect is not installed!')
      return ''
    }
    await arweaveWallet.connect(['ACCESS_ADDRESS', 'SIGN_TRANSACTION', 'ENCRYPT', 'DECRYPT'], { name: 'Hubs', logo: `${window.location.origin}/codehubs-removebg-preview.png` })
    const addr = await arweaveWallet.getActiveAddress()
    localStorage.setItem('address', addr)
    localStorage.setItem('wallet', 'arconnect')
    return addr
  }