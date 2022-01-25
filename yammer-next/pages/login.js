//front-end
import { Head } from 'next/head'
import { SignHeader } from '../components'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { creds, provider } from '../firebase'
import { useRouter } from 'next/router'

function Login () {
  const router = useRouter()
  const signIn = () => {
    creds.signInWithPopup(provider).catch(alert)
    router.push('/')
  }
  return (
    <div className='bg-gray-50 overflow-hidden scrollbar-hide h-screen'>
      <SignHeader />
      <div className='h-screen grid place-items-center'>
        <Modal size='lg'>
          <ModalHeader>
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
                  onClick={signIn}
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
      </div>
    </div>
  )
}

export default Login
