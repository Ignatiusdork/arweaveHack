const Arweave = require('arweave')
const fs = require('fs')

const input3 = require('./data/3.json');
const { Tag } = require('arweave/node/lib/transaction');
const data3 = fs.readFileSync('./data/txt.html')

const arweave = Arweave.init({
    host: 'localhost',
    port: '1984',
    protocol: 'http'
});


(async () => {
    const key = {
        kty: 'RSA',
        n: 'qbB_hh7p4uD6qnOhMxj_-3bxmNKF0UBoDRUGSaqIhC1fSI3Xq9jKWTwvLi1ps4IGYP8v9DTZJzoX8B2eZ1C2G8JZC9xorCcYmLgrLAAxPsXgoAuA8Tou_56CKwD-MuY8L6TdAt6dUcBspXdw5OsuAauUlWNbVc4XIZAcKT0c9JF5tGiIz6FfVHvBkI6D0Pt6JU6f6_nKglcs_kJwegFhZ4ydNbBBpVHQWImRdeSZHeO_mc-GOWGhjzc7SJQ7TzAjgsUEw81jPVSQE2TSA3afZRGvk9RIGmB8DgXCQ1u2Pt_sQtTR9k06xK33-9E1nOMdPZyS-e8BfzoHNmYIs9d1W_ECjefQ2EbvLqPtJuYORZjQtyLGL6jenbt0c714i2ngnrDZO_SnkyXzSCtzfkWMP8LssXbxhtwtwvytain1K_tfDesibP9gzZBEo1IO41Kl7Wq-4NbZo3O5U2RKYs68S5Ul3CwWg0-r2uMk_yvfZkL6Z7ZdPFr5a5J3D3UWAE0b8B3xauyO5wMDne529PoADaT35MXKees_qe5cItaGqMjt1q4Ii0AZjY_KFC3YLhabq6Ez3GI38U20Ggyn6qywvnLVjDoJTNP9deDx7UwNQZhLrdNnevj5i0k8vc8QVH8MdLCyP-AB30f_gg5-C2RY8NkCKZwWYj7cV_P_oAHhYMs',
        e: 'AQAB',
        d: 'QVMajLnq5TYiGatg88hch2R_Vos5C9jFFcAxxvs5CdVjuI0uaVAQefDi4t6Fsh7MsNucjOEpdeH15DCq0fAu4xna6OeFfjygye4gZJSAYL-RnVtAXN0-yZYuWzrLITIkGl1X3epwWs_-o2aLVf05nVf939K7jxlDK18MkE2gD4DPfwW9IV1o0x-_YRSUJ0ggeis-AnyLmsjPn-RY44cThecKgGglpWyNDgCLuHxz-585HA_Zhs6QgQ9MqcCy4mXQTd_l2TEA0tPykRy_gqjQbPq1gm33AfyB1W4fHoo4axUOIZ5HZA_QH3YvoMgl4QtHrvfPVxtNErr2mtkF4aIA4e8s42RVKgpSB02NSUfVVgsPNCKP0MYUEyo5IEHxLpfUZuXY4_GMqYAXyJ5Vbcs9KF4xvuSBwpkQHD7kYNuDGDKYjs9aogyFgBFxgfXGyT9pHceQRC-gGfGXOAAo0kunhbqlF2OtLKzJAAdUaK4jTA1jB6hDX8gjTHXW8BaMcs49iidYEWSJlMDILlDLJrDAuDcM59X0El1MSxnCCLgY-emv7ljy_E8wJlRrV7YNJZWf7QX_6C6sGM0FkTgxntM-6bXkfK3saHsRDj2eFB4gVLQSUjZEatX8fABrupMaW_JVfqyxfhpWDTh1bn7471DH_ObhZ2WIg-2EhqpksqNjnuE',
        p: '1ZspSfelVlBsFFodrLlzyTeoM2r9_wa1axPiG0vfeIGCGW5IIngheTJskcMCVooDyEShxDhT-NwMMIyDq26ZhCkgKqqKsqv2ong5P7KUIZwzjawYxGfZtM6ESkuXhWKR3OEMLW2JljtlWkQH0EI0cmQqaNAhL2bsOMbKh5tI5uINN32FZMyPzcLBN9n2SGsnc8iGJqJWrzXy5wQ17f_hZ4b-K_IA-DHN6dl65Mz3LGdw7wXJrtC9Q0euWTO5GZscoXnRJHZvCgsijQgEk8-O1KuraVUf86Rf4DHMOWlVc6mk8h15IAT8nUE73XWv9QWCbVSIbJISApl6S2o3g1Knaw',
        q: 'y14IKUvJ5l22XQ6upExacHlFd2-oI6Cf_UBSh49W2zdHJRSDdeInq9ZWKGy3ke6hJlpOG95e5tfWSw3h9GMNCvOIo6wPYWpmvvHTpuNAiE1jbQA8Ug_03OT6i-klb7zlm7o_KTSFheWGdhuUVZJi4hL6thQj1eLnusec4XXFc2dDnbkQttiLScLFdP5wuuRs61aEb3UWj_szbwMxwijEpOzw7DXpXs6f9XlkaUGlWwL0ZPFeHx088s2QcKnyR6PmzE7qItmXRLu3k7GOXrsn3B09Lxtmgg9DUTh-Mj_WebQBq43aa95t11EcF900awP24xAgnERBuZ2pwMzr2XxkIQ',
        dp: 'tV1qAEjJ1HCyY9FkEszft8CPCyFUCh5LGWCngZ-5XZswuKD_lGzFlx8uOdEHAi1rKrbDV1SwT8OegfY8selVZXZ5vmBRJYWHAsnrad8ZkTQMPcUavmCi47bZci-etn1L9ewLJ-MyiCFkW_EZZUVhPKM5swbMtm_AMDDxs5QwoQDcUfo8sapSi1VKMz7YswJwXAmthc4epeO7m1Ti6XJykzF2TB_NnO7EtEKY6v3w_H3T0M7sQIcxu5d4PHsDNe-SrrQ81KXOgAuWSYK-SDZaQs6D2wqQ95Dgav49NZ3vFSa8S2qk9n_lcSv7RXzwaq1D4cp9jxmzOwvPX4sPGWyrgw',
        dq: 'mYKLapC5ANlwVOJGVeMEya3hD_0K0Ino-sPZCFbc23DolUbczNk_1Ohf9PfLwa59mnPETikXPe1i5xi9nTo_mCqo09OHcKNel3f3qhwUlE7GZHsvDUraLPvzXDVLewL91wVJtBLfT2kojHLZD5cGaVymP1cIjeVPwp_2_gFmYGxsj9woj7z5t138qwl9krXmueZ-5ZtewqR9-KhSoRshBNWOLt-rH1OdTzCo6QMSjJa4YJIJ2Da70RP2mfTO2-EO0N4owtG467s_IY9_xmZD-lVf3_Uw9bALwn2AVPH3Nbr5H8ReQdqO0194c1MYxEcjz9ZWp16mtjQa9Vw6E9tfwQ',
        qi: 'eB-vvHUamjCvMFAwg4sia2cRVyWFpM7z6GhGk6xDctcdHL2yi5YLCPrIojxduVpZjuyThgOgcVSvtqh0cedWV1e6KIpIdEb8W742aolrpcwPFuA4yEamBWfbMj6DFoWPgRqoA_7a_K-ei5M2Fs2X3XYmllej3OEtgApUgLBHPgnHyFpP0pBjWgJclhU5PN8k5ewDvOhMaolz2AT86R1HnS_QJz5pFCfEY9qpE34Yj_wzBx4gC7-sbhGOwsFIVTpqEH9QXv9TQowJIkfz4glr8j-iugnvoofONCaSTb4vJ6e2yvY0Zv19s3nR6zxGX0Nx-LdURg6gDE1AjKb-l7-MvA'
    };
    const addr = await arweave.wallets.jwkToAddress(key)
    const tokens = arweave.ar.arToWinston(1)
    // mint some tokens
    await arweave.api.get(`mint/${addr}/${tokens}`)
    await arweave.api.get('mine')

    tx = await arweave.createTransaction({
        data: data3, tags: [new Tag('blog_title', 'A little background note on Arweave')]
    }, key)
    // input3.tags.map(tag => {
    //     tx.addTag(tag.name, tag.value)
    // })
    // tx.addTag('blog_title', 'Hello World')
    await arweave.transactions.sign(tx, key)
    console.log(tx.id)
    uploader = await arweave.transactions.getUploader(tx)
    while (!uploader.isComplete) {
        await uploader.uploadChunk()
        console.log(`${uploader.pctComplete}% complete, ${uploader.uploadedChunks}/${uploader.totalChunks}`)
    }
    await arweave.api.get('mine')

    console.log('done')

})()