const Arweave = require('arweave')

const arweave = Arweave.init({
    host: 'arweave.net',
    port: 443,
    protocol: 'https'
})

async function main() {
    const key = await arweave.wallets.generate()
    const addr = await arweave.wallets.jwkToAddress(key)
    console.log(key)
    console.log(addr)
}

main()