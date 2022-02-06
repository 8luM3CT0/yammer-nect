//front-end
import Head from 'next/head'
import { Button, Icon, FinanceHeader, MarketNews } from '../components'
//back-end
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Finance ({ finnhub_news }) {
  const [user] = useAuthState(creds)

  console.log(finnhub_news)

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
        finance page
      </main>
    </div>
  )
}

export default Finance

export async function getServerSideProps () {
  const marketNews = await fetch(
    'https://finnhub.io/api/v1/news?category=general&token=c7sueuaad3i9jn7rmb70'
  ).then(res => res.json())

  return {
    props: {
      finnhub_news: marketNews
    }
  }
}
