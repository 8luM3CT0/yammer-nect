//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../index'
//back-end
import { useState } from 'react'

function MarketNews ({ title }) {
  const [openMarketNews, setOpenMarketNews] = useState(false)

  return (
    <>
      <div
        onClick={e => setOpenMarketNews(true)}
        className='
    cursor-pointer
    '
      >
        <h1
          className='
        w-[1080px]
        max-w-[1380px]
      text-green-400 
      font-google-sans 
      font-semibold 
      hover:underline 
      hover:opacity-90
      transform
      transition
      duration-300
      ease-in-out
      '
        >
          {title}
        </h1>
      </div>
      <Modal
        size='lg'
        active={openMarketNews}
        toggler={() => setOpenMarketNews(false)}
      >
        <ModalHeader toggler={() => setOpenMarketNews(false)}>
          Market news
        </ModalHeader>
        <ModalBody>
          <div className='grid place-items-center p-[60px]'>
            <p className='text-lg font-google-sans font-semibold text-green-500'>
              {title}
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={() => setOpenMarketNews(false)}
            size='regular'
            color='red'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='ligh'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MarketNews
