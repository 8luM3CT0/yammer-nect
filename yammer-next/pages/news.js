//front-end
import Head from 'next/head'
import { NewsHeader, NewsBanner, TopNews } from '../components'
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
  bbc_news,
  entertainment_news,
  health_news,
  science_news,
  sports_news,
  tech_news
}) {
  const [user] = useAuthState(creds)
  console.log(us_news.results)
  const [openTab, setOpenTab] = useState(1)

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
          {/**header news */}
          <div className='top-0 sticky'>
            <div
              className='
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
                    creator={news.creator}
                  />
                ))}
              </Carousel>
            </div>
          </div>
          {/**end of header news */}
          <Tab>
            <TabList color='blue'>
              <div className='mx-auto space-x-4 overflow-x-scroll scrollbar-hide flex items-center'>
                <TabItem
                  onClick={e => {
                    e.preventDefault()
                    setOpenTab(1)
                  }}
                  ripple='light'
                  active={openTab === 1 ? true : false}
                  href='tabItem'
                >
                  <Icon name='language' size='lg' />
                  Discover
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
                  <Icon name='account_circle' size='lg' />
                  Profile
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
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
                  <Icon name='settings' size='lg' />
                  Settings
                </TabItem>
              </div>
            </TabList>
            <TabContent>
              <TabPane active={openTab === 1 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 2 ? true : false}>
                <p>
                  I will be the leader of a company that ends up being worth
                  billions of dollars, because I got the answers. I understand
                  culture. I am the nucleus. I think that’s a responsibility
                  that I have, to push possibilities, to show people, this is
                  the level that things could be at. I think that’s a
                  responsibility that I have, to push possibilities, to show
                  people, this is the level that things could be at.
                </p>
              </TabPane>
              <TabPane active={openTab === 3 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 4 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 5 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 6 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 7 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 8 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 9 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
              <TabPane active={openTab === 10 ? true : false}>
                <p>
                  I think that’s a responsibility that I have, to push
                  possibilities, to show people, this is the level that things
                  could be at. So when you get something that has the name Kanye
                  West on it, it’s supposed to be pushing the furthest
                  possibilities. I will be the leader of a company that ends up
                  being worth billions of dollars, because I got the answers. I
                  understand culture. I am the nucleus.
                </p>
              </TabPane>
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

  const getUSNews = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.newsdata_key}&category=top&country=us`
  ).then(res => res.json())

  return {
    props: {
      us_news: getUSNews
    }
  }
}
