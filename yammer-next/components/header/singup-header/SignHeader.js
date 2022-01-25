//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { creds, store, provider } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase'

function PostHeader () {
  const [user] = useAuthState(creds)
  const router = useRouter()
  return (
    <>
      <div className='headerDiv'>
        <div
          className='
            bg-gray-800
            border-b-2
            border-blue-300
            flex-grow 
            justify-evenly 
            flex
            p-5
            items-center'
        >
          {/**router to home */}
          <Button
            onClick={() => router.push('/')}
            color='blue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='dark'
          >
            <Icon name='arrow_back_ios' />
          </Button>
          {/**header left /logo */}
          <div
            className='
        flex 
        pl-5 
        items-center 
        space-x-5 '
          >
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='dark'
              className='space-x-3'
            >
              <Icon name='person_add' />
              <h2 className='appName'>Sign in</h2>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostHeader
