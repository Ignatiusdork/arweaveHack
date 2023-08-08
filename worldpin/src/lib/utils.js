import Arweave from 'arweave'

const arweave = Arweave.init({
  host: 'localhost',
  port: '1984',
  protocol: 'http'
});

export const getAllTxFromID = async (addr) => {
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

export async function fetchTransaction(transactionId) {
  try {
    // const transaction_data = await arweave.transactions.getData(transactionId, { decode: true, string: true });
    const transaction = await arweave.transactions.get(transactionId);
    console.log(transaction);
    return transaction;
  } catch (error) {
    console.error(error);
  }
}
// console.log(res)