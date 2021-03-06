//front-end
import Head from 'next/head'
import {
  Button,
  Icon,
  FinanceHeader,
  MarketNews,
  WatchList,
  DisplayedStock
} from '../components'
import finance_endpoints from '../utils/finance_endpoints'
import TopList from './top-list/top_list'
//back-end
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import top_list_data from '../utils/top_list_data.json'
import watch_list_data from '../utils/watch_list_data.json'
import displayed_profile_data from '../utils/displayed_profile_data.json'

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
  displayed_profile,
  alpha_test,
  twtr_quote
}) {
  const router = useRouter()
  const [user] = useAuthState(creds)

  const googleSignIn = () => {
    creds.signInWithPopup(provider).catch(alert)
    router.push('/')
  }

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

  if (!user) {
    return signIn
  }

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
          <MarketNews
            key={finn.id}
            title={finn.headline}
            newsCategory={finn.category}
            newsPublished={finn.datetime}
            newsSource={finn.source}
            newsSummary={finn.summary}
            newsUrl={finn.url}
          />
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
          <div className='h-[480px] grid place-items-center'>
            {displayed_profile_data.map(profile => (
              <DisplayedStock
                companyLogo={profile.image}
                symbol={profile.symbol}
                title={profile.companyName}
                currentPrice={profile.price}
                industry={profile.industry}
                website={profile.website}
                workAddress={profile.address}
                city={profile.city}
                state={profile.state}
                zip={profile.zip}
                compDesc={profile.description}
              />
            ))}
          </div>
          {top_list_data.map(stock => (
            <TopList
              symbol={stock.symbol}
              title={stock.title}
              price={stock.price}
            />
          ))}
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
            {twtr_quote.map(stock => (
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
              />
            ))}
            {watch_list_data.map(stock => (
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
              />
            ))}
            {/*
            ***********************************
            WILL NOT USE OFFICIAL DATA UNTIL NEEDED
            ************************************ 
            apple_quote.map(stock => (
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
              />
            ))}
            {tsla_quote.map(stock => (
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
              />
            ))}
            {amzn_quote.map(stock => (
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
              />
            ))}
            {spot_quote.map(stock => (
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
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
                day_high={stock.dayHigh}
                day_low={stock.dayLow}
                average50={stock.priceAvg50}
                average200={stock.priceAvg200}
                averageVol={stock.avgVolume}
              />
            ))*/}
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

  const twtrReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/TWTR?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  /*const AAPLReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const MSFTReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/MSFT?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const TSLAReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/TSLA?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const METAReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/FB?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const AMZNReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/AMZN?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const SPOTReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/SPOT?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const IBMReturn = await fetch(
    `https://financialmodelingprep.com/api/v3/quote/IBM?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const displayedProf = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/GOOGL?apikey=${process.env.fmp_key}`
  ).then(res => res.json())

  const alphaData = await fetch(
    `https://finnhub.io/api/v1/quote?symbol=AAPL&token=c7sueuaad3i9jn7rmb70`
  ).then(res => res.json())
*/
  return {
    props: {
      finnhub_news: marketNews,
      twtr_quote: twtrReturn
      /* apple_quote: stockReturn,
      msft_quote: secondReturn,
      tsla_quote: thirdReturn,
      fb_quote: fourthReturn,
      amzn_quote: fifthReturn,
      spot_quote: sixthReturn,
      ibm_quote: seventhReturn,
      displayed_profile: displayedProf,
      alpha_test: alphaData*/
    }
  }
}
