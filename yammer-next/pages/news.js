//front-end
import Head from 'next/head'
import { NewsHeader, NewsBanner, TopNews } from '../components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
//back-end
import { creds } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import news_endpoint from '../utils/news_endpoint'

function News ({
  us_news,
  bbc_news,
  entertainment_news,
  health_news,
  science_news,
  sports_news,
  tech_news
}) {
  const [user] = useAuthState(creds)
  console.log(us_news.results)
  return (
    <>
      <div
        className='
  h-screen 
  pb-[120px]
  overflow-hidden 
  scrollbar-hide
  bg-gray-100'
      >
        <Head>
          <title>Here's the news page, {user?.displayName}</title>
        </Head>
        <NewsHeader />
        <main
          className='
          h-screen  
          max-w-screen-2xl
            overflow-y-scroll
            scrollbar-hide
            px-10
            mx-auto
            bg-gray-50
        '
        >
          <div className='relative'>
            <div
              className='
            absolute 
            w-full
             h-[400px] 
             bg-gradient-to-t
            overflow-x-scroll 
            scrollbar-hide 
            from-gray-100 
            to-transparent 
            top-0 
            z-20'
            >
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
              >
                {us_news.results.slice(0, 10).map(news => (
                  <NewsBanner
                    key={news.title}
                    title={news.title}
                    urlToImage={news.image_url}
                  />
                ))}
              </Carousel>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default News

export async function getServerSideProps (context) {
  const genre = context.query.title

  const getUSNews = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.newsdata_key}&country=us`
  ).then(res => res.json())

  return {
    props: {
      us_news: getUSNews
    }
  }
}
