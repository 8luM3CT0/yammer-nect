//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  GLogin,
  GitLogin,
  Button,
  Icon
} from '../index'
//back-end
import { useEffect, useState } from 'react'
import { creds, store, provider } from '../../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function MainHeader () {
  const [showLogin, setShowLogin] = useState(false)
  const [showUser, setShowUser] = useState(false)
  const [user] = useAuthState(creds)

  const signIn = () => {
    creds.signInWithPopup(provider).catch(alert)
    setShowLogin(false)
  }

  useEffect(() => {
    if (user) {
      store
        .collection('users')
        .doc(user.uid)
        .set({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        })
    }
  }, [user])

  const logOut = () => {
    creds.signOut()
    setShowLogin(false)
  }

  return (
    <>
      <header
        className='
        top-0
        bg-gray-800
        z-50
        sticky
        flex
        items-center
        justify-evenly
        px-8
        py-4
        '
      >
        <Button
          color='lightBlue'
          buttonType='link'
          size='regular'
          iconOnly={false}
          block={false}
          rounded={false}
          ripple='link'
          className='
          space-x-4
         hover:underline 
         hover:animate-pulse 
         duration-300 
         transform 
         transition 
         ease-in-out'
        >
          <Icon name='g_translate' />
          <h2 className='font-semibold text-xl capitalize'>HokkienHub</h2>
        </Button>
        <div className='flex items-center space-x-5'>
          <Button
            color='blue'
            buttonType='link'
            size='regular'
            iconOnly={false}
            rounded={false}
            block={false}
            ripple='light'
            className='grid'
          >
            <Icon name='info' />
            <h2 className='routerNames'>About</h2>
          </Button>
          {!user ? (
            <Button
              onClick={e => setShowLogin(true)}
              color='blue'
              buttonType='link'
              size='regular'
              iconOnly={false}
              rounded={false}
              block={false}
              ripple='light'
              className='grid'
            >
              <Icon name='people' />
              <h2 className='routerNames'>Sign in</h2>
            </Button>
          ) : (
            <Button
              onClick={e => setShowUser(true)}
              color='blue'
              buttonType='link'
              size='regular'
              iconOnly={false}
              rounded={false}
              block={false}
              ripple='light'
              className='grid'
            >
              <img
                src={user?.photoURL}
                alt=''
                className='
            h-10 
            w-10 
            rounded-3xl 
            border 
            border-blue-400'
              />
            </Button>
          )}
        </div>
      </header>
      <Modal
        active={showLogin}
        size='regular'
        toggler={() => setShowLogin(false)}
      >
        <ModalHeader>
          <h2 className='font-google-sans capitalize text-2xl'>Sign in</h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          grid 
          place-items-center 
          space-y-4 
          p-16'
          >
            <Button
              onClick={signIn}
              color='blue'
              size='lg'
              buttonType='filled'
              iconOnly={false}
              rounded={false}
              block={false}
              ripple='light'
              className='flex items-center space-x-3'
            >
              <GLogin />
              <h2 className='text-xl font-google-sans font-normal capitalize'>
                Google
              </h2>
            </Button>
            <Button
              color='blueGray'
              size='lg'
              buttonType='filled'
              iconOnly={false}
              rounded={false}
              block={false}
              ripple='light'
            >
              <GitLogin />
              <h2 className='text-xl font-google-sans font-normal capitalize'>
                GitHub
              </h2>
            </Button>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowLogin(false)}
            color='red'
            size='regular'
            buttonType='link'
            ripple='dark'
            className='capitalize'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <Modal
        active={showUser}
        size='regular'
        toggler={() => setShowUser(false)}
      >
        <ModalBody>
          <div
            className='
          grid 
          place-items-center 
          space-y-5
          p-16
          '
          >
            <img
              src={user?.photoURL}
              alt=''
              className='
          h-20
          w-20
          rounded-3xl
          border
          border-blue-400
          '
            />
            <h2
              className='
          text-xl 
          font-robot-slab 
          font-semibold 
          text-blue-400'
            >
              {user?.displayName}
            </h2>
            <p
              className='
            text-lg 
            font-google-sans 
            font-light 
            text-blue-400'
            >
              {user?.email}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={logOut}
            color='green'
            buttonType='link'
            size='regular'
            ripple='dark'
            className='capitalize'
          >
            Log out
          </Button>
          <Button
            onClick={e => setShowUser(false)}
            color='red'
            buttonType='link'
            size='regular'
            ripple='dark'
            className='capitalize'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MainHeader
