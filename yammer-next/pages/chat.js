//front-end
import Head from 'next/head'
import { ChatHeader, ChatSidebar } from '../components'
import Login from './login'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { creds, store, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection, useDocument } from 'react-firebase-hooks/firestore'

function ChatPage () {
  const [user] = useAuthState(creds)
  const router = useRouter()
  if (!user) return <Login />
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
        chatMainDiv'
        >
          <div
            className='
          min-h-[90vh]
          grid
          place-items-center
          p-[20px]
          bg-blue-300
      '
          >
            <div
              className='
            grid 
            place-items-center
            space-y-3 
            p-[150px] 
            bg-gray-800'
            >
              <h2 className='text-blue-200 text-xl font-robot-slab flex items-center space-x-3 font-normal'>
                Hello there <Icon name='mood' />
              </h2>
              <h3 className='text-blue-500 font-google-sans font-semibold'>
                To start chatting, talk via the sidebar
              </h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ChatPage
