//front-end
import Head from 'next/head'
import {
  Button,
  Icon,
  FinanceHeader,
  MarketNews,
  TopList,
  WatchList,
  DisplayedStock
} from '../components'
import finance_endpoints from '../utils/finance_endpoints'
//back-end
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Finance ({
  finnhub_news,
  apple_quote,
  agfs_quote,
  tsla_quote,
  msft_quote,
  amzn_quote,
  spot_quote,
  fb_quote,
  ibm_quote,
  displayed_profile
}) {
  const router = useRouter()
  const [user] = useAuthState(creds)
  if (!user) {
    return signIn
  }

  const googleSignIn = () => {
    creds.signInWithPopup(provider).catch(alert)
  }

  console.log(agfs_quote)

  const signIn = (
    <div className='grid h-screen place-items-center'>
      <div
        className='
          p-[100px] 
          bg-gray-800 
          grid 
          place-items-center 
          items-center 
          space-y-5'
      >
        <Icon name='cloud' size='3xl' color='blue' className='h-20' />
        <h2 className='text-blue-400 font-robot-slab font-normal text-lg '>
          Welcome to Blume
        </h2>
        <Button
          onClick={googleSignIn}
          color='blue'
          buttonType='link'
          size='regular'
          iconOnly={false}
          block={false}
          rounded={false}
          ripple='light'
        >
          <h2 className='text-base capitalize font-semibold font-google-sans'>
            Sign in
          </h2>
        </Button>
      </div>
    </div>
  )

  return (
    <div
      className='
    h-screen 
    bg-gray-50 
    overflow-hidden'
    >
      <Head>
        <title>Our finance page, {user.displayName}</title>
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
      min-w-3xl
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
        <div
          className='
        grid 
        lg:flex 
        lg:items-center 
        px-5 
        space-x-3 
        bg-gray-800'
        >
          {displayed_profile.map(profile => (
            <DisplayedStock
              companyLogo={profile.image}
              symbol={profile.symbol}
              title={profile.companyName}
              currentPrice={profile.price}
              industry={profile.industry}
              website={profile.website}
            />
          ))}
          <TopList />
        </div>
        <div
          className='
        h-[740px] 
        bg-gray-600
        grid  
        mx-auto 
        max-w-full
        '
        >
          <h2
            className='
          text-teal-400 
          font-bold 
          font-robot-slab 
          text-xl 
          px-6 
          pt-6
          pb-3
          flex-grow
          bg-gray-600
          top-0
          left-0 
          z-20
          sticky'
          >
            My watchlist
          </h2>
          <div
            className='
          overflow-y-scroll 
  scrollbar-hide 
  grid
  space-y-6
  h-full
  w-full
  px-6
  mx-auto
          '
          >
            {apple_quote.map(stock => (
              <WatchList
                symbol={stock.symbol}
                company={stock.name}
                current_price={stock.price}
                change={stock.change}
                percentage_change={stock.changesPercentage}
                low_price={stock.yearLow}
                high_price={stock.yearHigh}
                volume={stock.volume}
                market_cap={stock.marketCap}
              />
            ))}
            {msft_quote.map(stock => (
              <WatchList
                symbol={stock.symbol}
                company={stock.name}
                current_price={stock.price}
                change={stock.change}
                percentage_change={stock.changesPercentage}
                low_price={stock.yearLow}
                high_price={stock.yearHigh}
                volume={stock.volume}
                market_cap={stock.marketCap}
              />
            ))}
            {fb_quote.map(stock => (
              <WatchList
                symbol={stock.symbol}
                company={stock.name}
                current_price={stock.price}
                change={stock.change}
                percentage_change={stock.changesPercentage}
                low_price={stock.yearLow}
                high_price={stock.yearHigh}
                volume={stock.volume}
                market_cap={stock.marketCap}
              />
            ))}
            {ibm_quote.map(stock => (
              <WatchList
                symbol={stock.symbol}
                company={stock.name}
                current_price={stock.price}
                change={stock.change}
                percentage_change={stock.changesPercentage}
                low_price={stock.yearLow}
                high_price={stock.yearHigh}
                volume={stock.volume}
                market_cap={stock.marketCap}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Finance

export async function getServerSideProps () {
  const marketNews = await fetch(
    `https://finnhub.io/api/v1/news?${finance_endpoints.fetchMarketNews.url}`
  ).then(res => res.json())

  const stockReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const secondReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/AGFS?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const thirdReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/TSLA?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const fourthReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/MSFT?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const fifthReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/AMZN?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const sixthReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/SPOT?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const seventhReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/FB?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const eighthReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/IBM?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const displayedProf = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/ABNB?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  return {
    props: {
      finnhub_news: marketNews,
      apple_quote: stockReturn,
      agfs_quote: secondReturn,
      tsla_quote: thirdReturn,
      msft_quote: fourthReturn,
      amzn_quote: fifthReturn,
      spot_quote: sixthReturn,
      fb_quote: seventhReturn,
      ibm_quote: eighthReturn,
      displayed_profile: displayedProf
    }
  }
}
