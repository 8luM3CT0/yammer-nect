//front-end
import Head from 'next/head'
import NewsHeader from '../components/header/news-header/NewsHeader'
//back-end
import { creds } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function News () {
  const [user] = useAuthState(creds)

  return (
    <>
      <div
        className='
  h-screen 
  overflow-hidden 
  bg-gray-50'
      >
        <Head>
          <title>Here's the news page, {user?.displayName}</title>
        </Head>
        <NewsHeader />
        <div className='mainDiv'></div>
      </div>
    </>
  )
}

export default News
