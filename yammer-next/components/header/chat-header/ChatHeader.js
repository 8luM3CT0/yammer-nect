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

function ChatHeader () {
  const [user] = useAuthState(creds)
  const router = useRouter()
  const [showOptions, setShowOptions] = useState(false)
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
          {/**header left /logo */}
          <div
            className='
        flex 
        pl-5 
        items-center 
        space-x-5 '
          >
            <div className='appOptions'>
              <Button
                onClick={e => setShowOptions(true)}
                color='blue'
                buttonType='link'
                iconOnly={false}
                block={false}
                rounded={false}
                ripple='dark'
                className='grid'
              >
                <Icon name='apps' />
                <h5
                  className='
                text-sm 
                font-robot-slab 
                capitalize'
                >
                  Apps
                </h5>
              </Button>
            </div>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='dark'
              className='space-x-3'
            >
              <Icon name='inbox' />
              <h2 className='appName'>Chat</h2>
            </Button>
          </div>
          {/**header center /routers */}
          <div className='centerDiv'>
            <Button
              onClick={() => router.push('/')}
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='home' />
                <h2 className='routerName'>Home</h2>
              </div>
            </Button>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='group' />
                <h2 className='routerName'>Confidants</h2>
              </div>
            </Button>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='rate_review' />
                <h2 className='routerName'>Blog</h2>
              </div>
            </Button>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='monetization_on' />
                <h2 className='routerName'>Crypto</h2>
              </div>
            </Button>
            <Button
              onClick={() => router.push('/news')}
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='newspaper' />
                <h2 className='routerName'>News</h2>
              </div>
            </Button>
          </div>
          {/**header right / user & sign up options */}
          <Button
            color='blue'
            buttonType='link'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='dark'
            className='space-x-3'
          >
            <img
              src={user?.photoURL}
              alt=''
              className='rounded-3xl border-2 border-blue-300 h-10'
            />
            <h4
              className='
                userName
          text-base 
          font-google-sans 
          capitalize'
            >
              {user?.displayName}
            </h4>
          </Button>
        </div>
      </div>
      <Modal
        size='lg'
        active={showOptions}
        toggler={() => setShowOptions(false)}
      >
        <ModalHeader toggler={() => setShowOptions(false)}>Options</ModalHeader>
        <ModalBody>
          <div
            className='                    
            items-start
            align-start
            space-y-3 
            p-[40px]'
          >
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='justify-evenly flex items-center space-x-3'>
                <Icon name='group' />
                <h2 className='optionsTitle'>Confidants</h2>
              </div>
            </Button>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='justify-evenly flex items-center space-x-3'>
                <Icon name='rate_review' />
                <h2 className='optionsTitle'>Blog</h2>
              </div>
            </Button>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='justify-evenly flex items-center space-x-3'>
                <Icon name='monetization_on' />
                <h2 className='optionsTitle'>Crypto</h2>
              </div>
            </Button>
            <Button
              onClick={() => router.push('/news')}
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
            >
              <div className='justify-evenly flex items-center space-x-3'>
                <Icon name='newspaper' />
                <h2 className='optionsTitle'>News</h2>
              </div>
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowOptions(false)}
            ripple='dark'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ChatHeader
