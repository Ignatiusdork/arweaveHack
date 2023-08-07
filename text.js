const Arweave = require('arweave')

const arweave = Arweave.init({
  host: 'arweave.net',
  port: 443,
  protocol: 'https'
})

async function main() {
  const tx = await arweave.createTransaction({data: '<h1>Hello World</h1>'})
  tx.addTag('Content-Type','text/html')
  
  console.log(tx)
}

const res = await fetch(`https://localhost:1984/${TX}`)
const data = await res.text()

main()