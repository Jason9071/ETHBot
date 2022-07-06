const Web3 = require("web3");
require("dotenv").config();

alarmData = [];

async function bot() {

    const network = process.env.ETHEREUM_NETWORK;
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            `https://${network}.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
        )
    );

    const currnetBlockNumber = await web3.eth.getBlockNumber();

    console.log( "Block Number : ", currnetBlockNumber );
    const currentBlock = await web3.eth.getBlock(currnetBlockNumber);

    console.log( "Total Transactions : ", currentBlock["transactions"].length );
    

    for ( let n = 0 ; n < currentBlock["transactions"].length ; n++ ) {
        const transaction = await web3.eth.getTransaction(currentBlock["transactions"][n]);

        // 10000000000000000 WEI <=> 0.01 ETH
        if ( transaction["value"] > 10000000000000000 ) {
            alarmData.push(transaction);
        }
    }

    console.log(alarmData.length);
}

bot();