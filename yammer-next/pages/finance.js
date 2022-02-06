//front-end
import Head from 'next/head'
import { Button, Icon, FinanceHeader, MarketNews } from '../components'
//back-end
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Finance ({ finnhub_news, finnhub_stocks }) {
  const [user] = useAuthState(creds)

  return (
    <div
      className='
    h-screen 
    bg-gray-50 
    overflow-hidden'
    >
      <Head>
        <title>Our finance page, ${user.displayName}</title>
      </Head>
      <div
        className='    
      overflow-x-scroll
      bg-gray-900
      scrollbar-hide
      flex-grow
      flex
      items-center 
      px-8
      py-4
      space-x-8
      mx-auto
      max-w-full
      '
      >
        {finnhub_news.map(finn => (
          <MarketNews key={finn.headline} title={finn.headline} />
        ))}
      </div>
      <FinanceHeader />
      <main
        className='
      max-w-5xl 
      mx-auto
      bg-gray-200 
      h-screen
      overflow-y-scroll
      scrollbar-hide
      pb-56
      border-x-2
      border-blue-500
      '
      >
        {finnhub_stocks.slice(0, 100).map(stock => (
          <h2
            className='
          text-sm 
          flex 
          text-center 
          capitalize 
          font-robot-slab 
          font-semibold'
          >
            {stock.symbol} - {stock.description} - {stock.type}
          </h2>
        ))}
      </main>
    </div>
  )
}

export default Finance

export async function getServerSideProps () {
  const marketNews = await fetch(
    `https://finnhub.io/api/v1/news?category=general&token=${process.env.finnhub_key}`
  ).then(res => res.json())

  const marketStockSymbols = await fetch(
    `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${process.env.finnhub_key}`
  ).then(res => res.json())

  return {
    props: {
      finnhub_news: marketNews,
      finnhub_stocks: marketStockSymbols
    }
  }
}
