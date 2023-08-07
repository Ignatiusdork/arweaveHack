const Arweave = require('arweave')
const fs = require('fs')

const input = require('./data/1.json')
const data = fs.readFileSync('./data/image1.png')

const input2 = require('./data/2.json')
const data2 = fs.readFileSync('./data/image2.png')

// const input3 = require('./data/txt.html')
// const data3 = fs.readFileSync('./data/txt.html')

const arweave = Arweave.init({
  host: 'localhost',
  port: '1984',
  protocol: 'http'
});


(async () => {
  const key = await arweave.wallets.generate()
  const addr = await arweave.wallets.jwkToAddress(key)
  const tokens = arweave.ar.arToWinston(100)
  // mint some tokens
  await arweave.api.get(`mint/${addr}/${tokens}`)
  await arweave.api.get('mine')

  // add data1

  let tx = await arweave.createTransaction({
    data
  }, key)
  input.tags.map(tag => {
    tx.addTag(tag.name, tag.value)
  })
  await arweave.transactions.sign(tx, key)
  let uploader = await arweave.transactions.getUploader(tx)
  while (!uploader.isComplete) {
    await uploader.uploadChunk()
    console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`)
  }
  await arweave.api.get('mine')

  // add data2
  tx = await arweave.createTransaction({
    data: data2
  }, key)
  input2.tags.map(tag => {
    tx.addTag(tag.name, tag.value)
  })
  await arweave.transactions.sign(tx, key)
  uploader = await arweave.transactions.getUploader(tx)
  while (!uploader.isComplete) {
    await uploader.uploadChunk()
    console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`)
  }
  await arweave.api.get('mine')

  // tx = await arweave.createTransaction({
  //   data: '<html><head><meta charset="UTF-8"><title>Hello world!</title></head><body></body></html>'
  // }, w)
  // input3.tags.map(tag => {
  //   tx.addTag(tag.name, tag.value)
  // })
  // await arweave.transactions.sign(tx, w)
  // uploader = await arweave.transactions.getUploader(tx)
  // while (!uploader.isComplete) {
  //   await uploader.uploadChunk()
  //   console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`)
  // }
  // await arweave.api.get('mine')


  const getAllTxFromID = async (id) => {
    try {
      const result = await arweave.api.post('graphql', {
        query: `
      query {
          transactions(owners: ["${id}"]) {
            edges {
              node {
                id
              }
            }
          }
        }
      `
      })
      return result?.data?.data?.transaction
    } catch (e) {
      return null
    }
  }

  console.log("Now getting transactions from the owner")
  console.log(key)
  // var res = await getAllTxFromID(key)
  console.log(res)


  // q8c9O1o2rfZYXB01PrKszipG649l7mwjthh5DFXi9nR1pie8rtdIyR8qZdin2WGEPSXcs8V30a1jnDhT4XlBvk44EGlBHm7zjgYDk_Dd3cXzz8fNqDxQGvGhRzcSJ4-xuT1F0UajuuqL2uGNGjzPG0ehcHr1TGxAIQGUsKcwZ6M9FX3feelQBD8LL6KDiebPP4Hvs4bSLvrajMSgLM48MgVtT0adc5Edx-GS0FABKZuBHzNUY8IAeGOZVejlbiGQY53hoBu3GBiJ6CrbO9QuEeWZb8eLCR8gTcr8R9XrYf-UTBxaUme0xn0qoBD4NSuNU__p-r2zZomvoCBUM65CJXtfUshCl0slcfw9ZqHQq5ysMhx4YwKNfrwZkqlv8cQttGy5sQS8NMBz6kZTlFA0bV0kqTvItexL8k9E7Y6WLcVRw8cJXun7vDwO-08U2CBK1DwcbvmtWJmcr68O_Qra7fjk6LFHqo2VUDo2ZqZKSG0OlrlfgL974vLF19z-OkbsCmRVHyUZq1TZW3W3YkT3bskZY-XfyOWffUaVuVooLmd9T9IMthjCf1m-DlZK57oLUl_AC2WIDWXs1i_Zsm4c8LLqXe_xkAN0NtUvhfW0ZO2SBsNwiueyZkC8Ve6ICzsSct9aoWeElK2lfwS0Eu-FA3B0ZIpfgL6zwjoE1Fx68hM
  // query {
  //   transactions(owners: ["q8c9O1o2rfZYXB01PrKszipG649l7mwjthh5DFXi9nR1pie8rtdIyR8qZdin2WGEPSXcs8V30a1jnDhT4XlBvk44EGlBHm7zjgYDk_Dd3cXzz8fNqDxQGvGhRzcSJ4"]) {
  //     edges {
  //       node {
  //         id
  //       }
  //     }
  //   }
  // }
  console.log('done')



})()