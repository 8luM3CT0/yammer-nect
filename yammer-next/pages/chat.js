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
      h-full
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
          p-4
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
          h-[90vh]
          p-[20px]
          bg-blue-300
      '
          ></div>
          <footer
            className='
          bottom-0 
          sticky z-50 
          py-4 
          px-3 
          flex 
          justify-evenly 
          bg-gray-800 
          border-t-2 
          border-blue-200'
          >
            footer
          </footer>
        </div>
      </main>
    </div>
  )
}

export default ChatPage
