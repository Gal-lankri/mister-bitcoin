import Axios from 'axios'
export const bitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}

async function getRate(coins) {
    try {
        const res = await Axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error);
    }

}
async function getMarketPrice(timespan) {
    try {
        const res = await Axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
        console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error);
    }

}
async function getConfirmedTransactions() {
    try {
        const res = await Axios.get(`https://api.blockchain.info/charts/n-transactions?timespan=1months&format=json&cors=true`)
        console.log(res.data)
        return res.data
    }
    catch (error) {
        console.log(error);
    }
}