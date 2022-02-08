export default{
    fetchMarketNews: {
        title: 'Market News',
        url: `category=general&token=${process.env.finnhub_key}`
    },
    fetchAmazonQuotes: {
        title: 'Amazon Stocks',
        url: `symbol=AMZN&token=${process.env.finnhub_key}`
    },
    fetchAppleQuotes: {
        title: 'Apple Stocks',
        url: `symbol=AAPL&token=${process.env.finnhub_key}`
    },
    fetchMicrosoftQuotes: {
        title: 'Microsoft Stocks',
        url: `symbol=MSFT&token=${process.env.finnhub_key}`
    },
    fetchTeslaQuotes: {
        title: 'Tesla Stocks',
        url: `symbol=TSLA&token=${process.env.finnhub_key}`
    }
}