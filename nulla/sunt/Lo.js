const transactionBlock = await web3.eth.getTransaction(transactionHash);
const activeGameAddress = transactionBlock.to;
