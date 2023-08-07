const Arweave = require('arweave')

const arweave = Arweave.init({
  host: 'localhost',
  port: '1984',
  protocol: 'http'
});

const getAllTxFromID = async (addr) => {
  try {
    const result = await arweave.api.post('graphql', {
      query: `
  query {
      transactions(owners: ["${addr}"]) {
        edges {
          node {
            id
          }
        }
      }
    }
  `
    })
    console.log("Function result coming...")
    console.log(result?.data?.data?.transactions?.edges)
    return result?.data?.data?.transactions?.edges
  } catch (e) {
    return null
  }
}


const addr = "vVvN5qZ-KSno5hpsK_t2B-6gq2XGDENX3_ZE1HzzGs4"
var res = getAllTxFromID(addr)
// console.log(res)