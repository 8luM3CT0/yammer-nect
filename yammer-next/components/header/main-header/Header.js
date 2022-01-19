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

function Header () {
  const [user] = useAuthState(creds)
  const router = useRouter()
  const [showOptions, setShowOptions] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)

  const goToNews = () => {
    router.push('/news')
  }

  const signIn = e => {
    e.preventDefault()

    creds
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        router.push('/')
      })
      .catch(alert)
    setEmail(' ')
    setPassword(' ')
    setShowLogin(false)
  }

  const googleSignIn = () => {
    creds.signInWithPopup(provider).catch(alert)
    setShowLogin(false)
  }

  const signOut = () => {
    creds.signOut()
    setShowLogin(false)
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
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
          },
          { merge: true }
        )
    }
  }, [user])

  return (
    <>
      <div className='headerDiv'>
        <div
          className='
            bg-gray-800
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
              <Icon name='cloud' />
              <h2 className='appName'>Blume</h2>
            </Button>
          </div>
          {/**header center /routers */}
          <div className='centerDiv'>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={true}
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
              rounded={true}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='inbox' />
                <h2 className='routerName'>Chat</h2>
              </div>
            </Button>
            <Button
              color='blue'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={true}
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
              rounded={true}
              ripple='light'
            >
              <div className='grid space-y-3'>
                <Icon name='newspaper' />
                <h2 className='routerName'>News</h2>
              </div>
            </Button>
          </div>
          {/**header right / user & sign up options */}
          {!user ? (
            <Button
              onClick={e => setShowLogin(true)}
              color='blue'
              buttonType='filled'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='dark'
              className='space-x-3'
            >
              <Icon name='insert_emoticon' />
              <h4
                className='
          text-base 
          font-google-sans 
          capitalize'
              >
                Sign in
              </h4>
            </Button>
          ) : (
            <Button
              onClick={signOut}
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
          )}
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
                    grid 
                    items-center 
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
                <Icon name='inbox' />
                <h2 className='optionsTitle'>Chat</h2>
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
      <Modal size='lg' active={showLogin} toggler={() => setShowLogin(false)}>
        <ModalHeader toggler={() => setShowLogin(false)}>
          <h2
            className='
            text-blue-500 
            capitalize 
            text-xl 
            font-google-sans 
            font-semibold'
          >
            Sign in
          </h2>
          <ModalBody>
            <div className='p-[30px] space-y-3 grid justify-center'>
              <p
                className='
                text-base 
                leading-relaxed 
                text-gray-400 
                font-normal'
              >
                Email
              </p>
              <input
                type='email'
                className='
                px-3
                border 
                border-blue-200
                text-gray-800 
                rounded-lg 
                outline-none 
                bg-gray-100'
              />
              <p
                className='
                text-base 
                leading-relaxed 
                text-gray-400 
                font-normal'
              >
                Password
              </p>
              <input
                type='password'
                className='
                px-3
                border
                text-gray-800
                border-blue-200
                rounded-lg
                outline-none
                bg-gray-100
                '
              />
              <Button
                size='sm'
                buttonType='link'
                color='orange'
                ripple='light'
                className='mt-6'
              >
                Forgot password ?
              </Button>
              <Button
                iconOnly={false}
                block={false}
                rounded={false}
                color='blue'
                buttonType='link'
                ripple='light'
              >
                Sign in
              </Button>
              <p
                className='
              text-base 
              leading-relaxed 
              text-gray-600 
              font-normal'
              >
                Otherwise, sign in with Google
              </p>
              <Button
                onClick={googleSignIn}
                color='green'
                ripple='light'
                iconOnly={false}
                block={false}
                rounded={false}
                className='mt-5'
              >
                Google login
              </Button>

              <p
                className='
              text-base 
              leading-relaxed 
              text-gray-600 
              font-normal my-5'
              >
                Or, if you want to sign up, then click below
              </p>
              <Button buttonType='link' color='orange' ripple='dark'>
                Sign up
              </Button>
            </div>
          </ModalBody>
        </ModalHeader>
      </Modal>
    </>
  )
}

export default Header
