//front-end
import Head from 'next/head'
import {
  Button,
  Icon,
  FinanceHeader,
  MarketNews,
  TopList,
  WatchList
} from '../components'
import finance_endpoints from '../utils/finance_endpoints'
import ReactHighcharts from 'react-highcharts'
import moment from 'moment'
import { Carousel } from 'react-responsive-carousel'
//back-end
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import test_data from '../utils/test_data'

function Finance ({
  finnhub_news,
  apple_quote,
  agfs_quote,
  tsla_quote,
  msft_quote,
  amzn_quote,
  spot_quote,
  fb_quote
}) {
  const router = useRouter()
  const [user] = useAuthState(creds)
  if (!user) {
    router.push('/')
  }

  const configPrice = {
    yAxis: [
      {
        offset: 20,

        labels: {
          formatter: function () {
            return numberFormat.format(this.value)
          },
          x: -15,
          style: {
            color: '#000',
            position: 'absolute'
          },
          align: 'left'
        }
      }
    ],
    tooltip: {
      shared: true,
      formatter: function () {
        return (
          numberFormat.format(this.y, 0) +
          '</b></br>' +
          moment(this.x).format('MMM DD YYYY, h:mm')
        )
      }
    },
    plotOptions: {
      series: {
        showInNavigator: true,
        gapSize: 6
      }
    },
    rangeSelector: {
      selected: 1
    },
    title: {
      text: 'Bitcoin stock price'
    },
    chart: {
      height: 600
    },
    credits: {
      enabled: false
    },
    legend: {
      enabled: true
    },
    xAxis: {
      type: 'date'
    },
    rangeSelector: {
      buttons: [
        {
          type: 'day',
          count: 1,
          text: '1d'
        },
        {
          type: 'day',
          count: 7,
          text: '7d'
        },
        {
          type: 'month',
          count: 1,
          text: '1m'
        },
        {
          type: 'month',
          count: 3,
          text: '3m'
        },
        {
          type: 'all',
          text: 'All'
        }
      ],
      selected: 4
    },
    series: [
      {
        name: 'Price',
        type: 'spline',

        data: test_data.price,
        tooltip: {
          valueDecimals: 2
        }
      }
    ]
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
          <ReactHighcharts
            className='bg-gray-600 my-4 px-3'
            config={configPrice}
          ></ReactHighcharts>
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
            {/*agfs_quote.map(stock => (
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

  return {
    props: {
      finnhub_news: marketNews,
      apple_quote: stockReturn,
      agfs_quote: secondReturn,
      tsla_quote: thirdReturn,
      msft_quote: fourthReturn,
      amzn_quote: fifthReturn,
      spot_quote: sixthReturn,
      fb_quote: seventhReturn
    }
  }
}
