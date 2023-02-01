const processTransactions = transactions => {
    if (transactions === undefined) { throw new Error("Undefined collection of transactions") }

    let txCount = {}
    transactions.sort().forEach(item => txCount[item] ? txCount[item] += 1 : txCount[item] = 1)
    const sortedKeys = Object.keys(txCount).sort((a, b) => txCount[b] - txCount[a])
    return sortedKeys.map(item => `${item} ${txCount[item]}`)
}

module.exports = processTransactions;