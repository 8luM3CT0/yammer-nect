//front-end
import {
  Button,
  Icon,
  TweetIcon,
  FBIcon,
  GIcon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../index'
//back-end
import { useRouter } from 'next/router'
import { useState } from 'react'

function MainHeader () {
  const router = useRouter()
  const [showComps, setShowComps] = useState(false)

  return (
    <>
      <header
        className='
    top-0 
    z-50 
    sticky 
    px-7 
    py-5 
    bg-purple-600
    shadow-lg
    justify-between
    flex
    items-center
    '
      >
        <div
          className='
    space-x-4
    cursor-pointer 
    flex 
    items-center'
        >
          <Button
            onClick={e => setShowComps(true)}
            color='gray'
            buttonType='link'
            size='regular'
            iconOnly={true}
            rounded={false}
            block={false}
            ripple='light'
          >
            <Icon name='menu' />
          </Button>
          {/*
          <h1
            className='
      text-xl 
      font-normal 
      font-font-smooch
      text-purple-50'
          >
            BareBears
          </h1>
          */}
        </div>
        <div
          className='
      space-x-3
      justify-self-end
      flex
      items-center
      '
        >
          <Button
            color='cyan'
            size='regular'
            buttonType='link'
            rounded={true}
            iconOnly={true}
            block={false}
            ripple='light'
          >
            <TweetIcon />
          </Button>
          <Button
            color='lightGreen'
            size='regular'
            buttonType='link'
            rounded={true}
            iconOnly={true}
            block={false}
            ripple='light'
          >
            <GIcon />
          </Button>
          <Button
            color='lightBlue'
            size='regular'
            buttonType='link'
            rounded={true}
            iconOnly={true}
            block={false}
            ripple='light'
          >
            <FBIcon />
          </Button>
        </div>
      </header>
      <Modal active={showComps} size='lg' toggler={() => setShowComps(false)}>
        <ModalHeader toggler={() => setShowComps(false)}>
          <h1
            className='
      text-xl 
      font-google-sans 
      font-semibold 
      text-gray-800 
      px-6
      py-3
      '
          >
            Menu
          </h1>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          p-9 
          grid 
          place-items-center 
          space-y-4'
          >
            <Button
              onClick={() => router.push('/')}
              color='gray'
              size='lg'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='capitalize space-x-3'
            >
              <Icon name='home' />
              <h2 className='font-google-sans font-semibold text-xl'>Home</h2>
            </Button>
            <Button
              color='gray'
              size='lg'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='capitalize space-x-3'
            >
              <Icon name='info' />
              <h2 className='font-google-sans font-semibold text-xl'>About</h2>
            </Button>
            <Button
              color='gray'
              size='lg'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='capitalize space-x-3'
            >
              <Icon name='storefront' />
              <h2 className='font-google-sans font-semibold text-xl'>Store</h2>
            </Button>
            <Button
              color='gray'
              size='lg'
              buttonType='link'
              iconOnly={false}
              block={false}
              rounded={false}
              ripple='light'
              className='capitalize space-x-3'
            >
              <Icon name='book' />
              <h2 className='font-google-sans font-semibold text-xl'>Blog</h2>
            </Button>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default MainHeader
