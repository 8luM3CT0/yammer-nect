//front-end
import Head from 'next/head'
import Header from '../components/header/main-header/Header'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Tab from '@material-tailwind/react/Tab'
import TabList from '@material-tailwind/react/TabList'
import TabItem from '@material-tailwind/react/TabItem'
import TabContent from '@material-tailwind/react/TabContent'
import TabPane from '@material-tailwind/react/TabPane'
import InputBox from '../components/body/input-box/InputBox'
import Article from '../components/body/article/Article'
//back-end
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { store } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'

export default function Home () {
  const [openTab, setOpenTab] = useState(1)

  const [articleSnapshot] = useCollection(
    store.collection('posts').orderBy('timestamp', 'desc')
  )
  return (
    <div
      className='
      bg-gray-50
    overflow-hidden  
    h-screen'
    >
      <Head>
        <title>Blume-Net</title>
      </Head>
      <Header />
      {/**body */}
      <div className='mainDiv'>
        <main
          className='
      mainDim 
      px-10
      h-screen 
      overflow-y-scroll
      scrollbar-hide
      border-x-2
      border-blue-400 
      bg-gray-50 
      pb-[120px] 
      mx-auto
      space-y-3'
        >
          {/**input box */}
          <InputBox />
          {articleSnapshot?.docs.map(doc => (
            <Article
              key={doc.id}
              id={doc.id}
              name={doc.data().name}
              post={doc.data().post}
              articleImage={doc.data().articleImage}
              photoURL={doc.data().photoURL}
              timestamp={doc.data().timestamp}
            />
          ))}
        </main>
        {/**news widget */}
      </div>
    </div>
  )
}
