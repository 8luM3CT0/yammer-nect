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
//back-end
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import test_data from '../utils/test_data'

function Finance ({ finnhub_news, apple_quote }) {
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

  const options = { style: 'currency', currency: 'USD' }
  console.log(apple_quote)

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
            <WatchList
              symbol='AAPL'
              company='Apple Inc.'
              current_price='174.83'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='AGFS'
              company='Agrofresh Solutions Inc.'
              current_price='2.04'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='AMZN'
              company='Amazon Inc.'
              current_price='3,228.27'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='BRK.A'
              company='Berkshire Hathaway Inc.'
              current_price='482,030.00'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='BTI'
              company='British American Tobacco PI.C'
              current_price='44.16'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='COMP'
              company='NASDAQ'
              current_price='14,194.46'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='CRM'
              company='SalesForce Com, Inc.'
              current_price='217.60'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='EVRI'
              company='Everi Holdings Inc.'
              current_price='21.97'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='FB'
              company='Meta Inc.'
              current_price='220.18'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='GOOGL'
              company='Alphabet Inc.'
              current_price='2,787.98'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='HD'
              company='The Home Depot, Inc.'
              current_price='361.56'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='HON'
              company='Honeywell International Inc.'
              current_price='194.56'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='IBM'
              company='International Business Machines Corp.'
              current_price='137.02'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='INX'
              company='S&P 500'
              current_price='4,521.54'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='ITX'
              company='Inditex Inc.'
              current_price='26.09'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='MCD'
              company='McDonalds Inc.'
              current_price='260.08'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='MMM'
              company='3M Company'
              current_price='162.41'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='MSFT'
              company='Microsoft Inc.'
              current_price='304.56'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='NKE'
              company='Nike Inc.'
              current_price='143.53'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='NVO'
              company='Novo Nordisk A/S'
              current_price='101.55'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='PEP'
              company='Pepsi Co'
              current_price='151.36'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='SBUX'
              company='Starbucks Inc.'
              current_price='94.92'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='SNAP'
              company='Snap Inc.'
              current_price='37.56'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='T'
              company='AT&T Inc.'
              current_price='32.34'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='TMUS'
              company='T-Mobile US Inc.'
              current_price='125.44'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='TSM'
              company='Taiwan Semiconductor Inc.'
              current_price='123.72'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='TWTR'
              company='Twitter Inc.'
              current_price='35.98'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='UL'
              company='Unilever Inc.'
              current_price='52.30'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='VZ'
              company='Verizon Inc.'
              current_price='52.30'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
            <WatchList
              symbol='WMT'
              company='Walmart Inc.'
              current_price='52.82'
              change='+3.17'
              percentage_change='+1.8467'
              low_price='171.43'
              high_price='175.35'
              volume='1.85M'
              market_cap='2.64T'
            />
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

  const appleQuote = await fetch(
    `https://finnhub.io/api/v1/quote?${finance_endpoints.fetchAppleQuotes.url}`
  ).then(res => res.json())

  return {
    props: {
      finnhub_news: marketNews,
      apple_quote: appleQuote
    }
  }
}
