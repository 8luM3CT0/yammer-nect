//front-end
import Head from 'next/head'
import { ChatHeader, ChatSidebar } from '../components'
//back-end
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { creds, store } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'

function ChatPage () {
  const [user] = useAuthState(creds)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push('/')
    }
  }, [])

  return (
    <div
      className='
  bg-gray-100 
  overflow-hidden 
  scrollbar-hide'
    >
      <Head>
        <title>Welcome to the chat, {user?.displayName}</title>
      </Head>
      <ChatHeader />
      <main
        className='
      max-w-[1300px] 
      mx-auto
      bg-gray-50
      h-screen 
      border-blue-500 
      border-x-2 
      lg:flex
      lg:items-center
      grid
      '
      >
        <ChatSidebar />
        <div
          className='
        flex-1 
        h-screen 
        overflow-hidden 
        grid  
        bg-blue-400'
        >
          <div
            className='
          py-4 
          px-2 
          top-0 
          bg-gray-800 
          sticky 
          z-50 
          flex 
          items-center 
          justify-between'
          >
            <h2
              className='
            text-xl 
            font-google-sans 
            text-blue-200 
            font-normal'
            >
              Chat here
            </h2>
            <h3
              className='
            text-lg 
            font-google-sans 
            font-semibold 
            text-blue-400'
            >
              No one yet...
            </h3>
          </div>
          <div
            className='
      h-screen
      overflow-y-scroll
      scrollbar-hide
      p-8
      '
          ></div>
        </div>
      </main>
    </div>
  )
}

export default ChatPage
