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
  top_news,
  bbc_news,
  entertainment_news,
  health_news,
  science_news,
  sports_news,
  tech_news
}) {
  const [user] = useAuthState(creds)
  console.log(top_news.articles)

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
            <div className='absolute w-full h-32 bg-gradientto-t from-gray-100 to-transparent bottom-0 z-20'>
              <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
              >
                {top_news.articles.slice(0, 10).map(result => (
                  <div>
                    <img src={result.urlToImage} loading='lazy' alt='' />
                  </div>
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

  const topUS_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchTopUSNews.url}`
  ).then(res => res.json())

  const bbc_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchBBCNews.url}`
  ).then(res => res.json())

  const business_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchBusinessNews.url}`
  ).then(res => res.json())

  const entertainment_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchEntertainmentNews.url}`
  ).then(res => res.json())

  const health_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchHealthNews.url}`
  ).then(res => res.json())

  const science_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchScienceNews.url}`
  ).then(res => res.json())

  const sports_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchSportsNews.url}`
  ).then(res => res.json())

  const tech_news = await fetch(
    `https://newsapi.org/v2/${news_endpoint.fetchTechNews.url}`
  ).then(res => res.json())
  return {
    props: {
      top_news: topUS_news,
      bbc_news: bbc_news,
      business_news: business_news,
      entertainment_news: entertainment_news,
      health_news: health_news,
      science_news: science_news,
      sports_news: sports_news,
      tech_news: tech_news
    }
  }
}
