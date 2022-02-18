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
import moment from 'moment'

function MarketNews ({
  id,
  newsCategory,
  title,
  newsPublished,
  newsSource,
  newsSummary,
  newsUrl
}) {
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
          News type: {newsCategory}
        </ModalHeader>
        <ModalBody>
          <div
            className='
          grid 
          place-items-center 
          space-y-6  
          p-[60px]'
          >
            <p className='text-lg font-google-sans font-semibold text-green-500'>
              {title}
            </p>
            {newsPublished ? (
              <p className='text-gray-700 font-google-sans font-light text-sm'>
                {moment(newsPublished).format('MMM/DD/YYYY, LT')}
              </p>
            ) : (
              ' '
            )}
            <p className='text-gray-600 font-google-sans font-normal text-base'>
              Published by: {newsSource}
            </p>
            <div
              className='
            h-[210px] 
            px-4 
            py-3 
            overflow-y-scroll 
            scrollbar-hide'
            >
              <h2 className='text-base font-normal font-google-sans text-gray-800'>
                {newsSummary}
              </h2>
            </div>
            <a
              className='
            cursor-pointer
            text-green-700 
            hover:underline 
            font-google-sans 
            font-normal'
            >
              Article link: {newsUrl}
            </a>
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
            ripple='light'
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
