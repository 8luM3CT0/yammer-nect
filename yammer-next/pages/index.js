//front-end
import Head from 'next/head'
import {
  Header,
  InputBox,
  Article,
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../components'
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
      pb-56
      mx-auto
      space-y-3'
        >
          {/**input box */}
          <InputBox />
          {articleSnapshot ? (
            articleSnapshot?.docs.map(doc => (
              <Article
                key={doc.id}
                id={doc.id}
                name={doc.data().name}
                post={doc.data().post}
                articleImage={doc.data().articleImage}
                jpgWeb={doc.data().jpgWeb}
                photoURL={doc.data().photoURL}
                timestamp={doc.data().timestamp}
              />
            ))
          ) : (
            <h2
              className='
            text-xl 
            mx-auto 
            font-robot-slab 
            font-semibold 
            text-blue-400'
            >
              Hm. Nothing here. Try posting something
            </h2>
          )}
        </main>
        {/**news widget */}
      </div>
    </div>
  )
}
