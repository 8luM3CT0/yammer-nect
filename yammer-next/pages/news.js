//front-end
import Head from 'next/head'
import {
  NewsHeader,
  NewsBanner,
  NewsArticle,
  BlogWidget,
  Categories
} from '../components'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import TabContent from '@material-tailwind/react/TabContent'
import TabPane from '@material-tailwind/react/TabPane'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { creds } from '../firebase'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import news_endpoint from '../utils/news_endpoint'

function News ({
  us_news,
  tech_news,
  business_news,
  entertainment_news,
  environment_news,
  food_news,
  health_news,
  politics_news,
  science_news,
  sports_news,
  world_news
}) {
  const [user] = useAuthState(creds)
  const [openTab, setOpenTab] = useState(1)

  console.log(us_news)

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
            pb-[90px]
        '
        >
          {/**header news */}
          <div className='top-0'>
            <div
              className='
            w-full
             h-[400px] 
             bg-gradient-to-t
            overflow-x-scroll 
            scrollbar-hide 
            from-gray-100 
            to-transparent 
            '
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
                    creator={news.creator}
                    content={news.content}
                    fullDescription={news.full_description}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          {/**end of header news */}
          <Tab>
            <TabList color='blue'>
              <div
                className='
                mx-auto 
                space-x-20 
                overflow-x-scroll
                scrollbar-hide 
                flex 
                items-center'
              >
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  ripple='light'
                  active={openTab === 1 ? true : false}
                  href='tabItem'
                >
                  <Icon name='store' size='lg' />
                  Business
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(2)
                  }}
                  ripple='light'
                  active={openTab === 2 ? true : false}
                  href='tabItem'
                >
                  <Icon name='local_movies' size='lg' />
                  Entertainment
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(3)
                  }}
                  ripple='light'
                  active={openTab === 3 ? true : false}
                  href='tabItem'
                >
                  <Icon name='park' size='lg' />
                  Environment
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(4)
                  }}
                  ripple='light'
                  active={openTab === 4 ? true : false}
                  href='tabItem'
                >
                  <Icon name='restaurant' size='lg' />
                  Food
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(5)
                  }}
                  ripple='light'
                  active={openTab === 5 ? true : false}
                  href='tabItem'
                >
                  <Icon name='favorite' size='lg' />
                  Health
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(6)
                  }}
                  ripple='light'
                  active={openTab === 6 ? true : false}
                  href='tabItem'
                >
                  <Icon name='gavel' size='lg' />
                  Politics
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(7)
                  }}
                  ripple='light'
                  active={openTab === 7 ? true : false}
                  href='tabItem'
                >
                  <Icon name='science' size='lg' />
                  Science
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(8)
                  }}
                  ripple='light'
                  active={openTab === 8 ? true : false}
                  href='tabItem'
                >
                  <Icon name='sports' size='lg' />
                  Sports
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(9)
                  }}
                  ripple='light'
                  active={openTab === 9 ? true : false}
                  href='tabItem'
                >
                  <Icon name='computer' size='lg' />
                  Technology
                </TabItem>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(10)
                  }}
                  ripple='light'
                  active={openTab === 10 ? true : false}
                  href='tabItem'
                >
                  <Icon name='public' size='lg' />
                  World
                </TabItem>
              </div>
            </TabList>
            <TabContent>
              <div
                className='
              mx-auto 
              overflow-y-scroll 
              scrollbar-hide 
              h-[800px] '
              >
                <TabPane active={openTab === 1 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {business_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 2 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {entertainment_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 3 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {environment_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 4 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {food_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 5 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {health_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 6 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {politics_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 7 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {science_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 8 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {sports_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 9 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {tech_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
                <TabPane active={openTab === 10 ? true : false}>
                  <div
                    className='
                  grid 
                  overflow-y-scroll 
                  scrollbar-hide 
                  mx-auto 
                  space-y-4'
                  >
                    {world_news.results.map(doc => (
                      <NewsArticle
                        key={doc.title}
                        title={doc.title}
                        imageUrl={doc.image_url}
                        creator={doc.creator}
                        excerpt={doc.description}
                        fullDescription={doc.full_description}
                        content={doc.content}
                        link={doc.link}
                      />
                    ))}
                  </div>
                </TabPane>
              </div>
            </TabContent>
          </Tab>
        </main>
      </div>
    </>
  )
}

export default News

export async function getServerSideProps (context) {
  const genre = context.query.title

  //all of these are US news
  const getTopNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSTopNews.url}`
  ).then(res => res.json())

  const getTechNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSTechNews.url}`
  ).then(res => res.json())

  const getBusinessNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSBusinessNews.url}`
  ).then(res => res.json())

  const getEntertainment = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSEntertainment.url}`
  ).then(res => res.json())

  const getEnvironmentNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSEnvironmentNews.url}`
  ).then(res => res.json())

  const getFoodNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSFoodNews.url}`
  ).then(res => res.json())

  const getHealthNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSHealthNews.url}`
  ).then(res => res.json())

  const getPoliticsNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSPoliticsNews.url}`
  ).then(res => res.json())

  const getScienceNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSScienceNews.url}`
  ).then(res => res.json())

  const getSportsNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchUSSportsNews.url}`
  ).then(res => res.json())

  const getWorldNews = await fetch(
    `https://newsdata.io${news_endpoint.fetchWorldNews.url}`
  ).then(res => res.json())

  return {
    props: {
      us_news: getTopNews,
      tech_news: getTechNews,
      business_news: getBusinessNews,
      entertainment_news: getEntertainment,
      environment_news: getEnvironmentNews,
      food_news: getFoodNews,
      health_news: getHealthNews,
      politics_news: getPoliticsNews,
      science_news: getScienceNews,
      sports_news: getSportsNews,
      world_news: getWorldNews
    }
  }
}
