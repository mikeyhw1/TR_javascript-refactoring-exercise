const processTransactions = transactions => {
    if (transactions === undefined) throw new Error("Undefined collection of transactions")

    let txCount = {}
    transactions.sort().forEach(item => txCount[item] ? txCount[item] += 1 : txCount[item] = 1)
    const sortedKeys = Object.keys(txCount).sort((a, b) => txCount[b] - txCount[a]);
    return sortedKeys.map(item => `${item} ${txCount[item]}`);
}

module.exports = processTransactions;


/*

const processTransactions = transactions => {
    if (transactions === undefined) throw new Error("Undefined collection of transactions")

    let transactionsCount = {}
    transactions.forEach(item => transactionsCount[item] ? transactionsCount[item] += 1 : transactionsCount[item] = 1)
    const sortedKeys = sortByAmountThenName(transactionsCount);
    return sortedKeys.map(item => `${item} ${transactionsCount[item]}`);
}

const sortByAmountThenName = transactionsCount =>
    Object.keys(transactionsCount).sort((a, b) =>
        (transactionsCount[a] === transactionsCount[b]) ? a.localeCompare(b) : transactionsCount[b] - transactionsCount[a]);

module.exports = processTransactions;

*/