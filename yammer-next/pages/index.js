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
import { creds, provider, store } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'

export default function Home () {
  const [openTab, setOpenTab] = useState(1)

  const [user] = useAuthState(creds)

  const googleSignIn = () => {
    creds.signInWithPopup(provider).catch(alert)
  }

  useEffect(() => {
    if (user) {
      store
        .collection('users')
        .doc(user.uid)
        .set(
          {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          },
          { merge: true }
        )
    }
  }, [user])

  const [articleSnapshot] = useCollection(
    store.collection('posts').orderBy('timestamp', 'desc')
  )
  return (
    <>
      {user ? (
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
      ) : (
        <div className='grid h-screen place-items-center'>
          <div
            className='
          p-[100px] 
          bg-gray-800 
          grid 
          place-items-center 
          items-center 
          space-y-5'
          >
            <Icon name='cloud' size='3xl' color='blue' className='h-20' />
            <h2 className='text-blue-400 font-robot-slab font-normal text-lg '>
              Welcome to Blume
            </h2>
            <Button
              onClick={googleSignIn}
              color='blue'
              buttonType='link'
              size='regular'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <h2 className='text-base capitalize font-semibold font-google-sans'>
                Sign in
              </h2>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
