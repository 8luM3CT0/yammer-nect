//front-end
import { forwardRef } from 'react'
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Icon
} from '../../index'
//back-end
import { useRouter } from 'next/router'
import { useState } from 'react'

function NewsBanner ({
  result,
  urlToImage,
  title,
  creator,
  content,
  fullDescription
}) {
  const router = useRouter()
  const [showNews, setShowNews] = useState(false)

  return (
    <>
      <div
        style={
          urlToImage
            ? { backgroundImage: `url(${urlToImage})` }
            : {
                backgroundImage: `url("https://www.ivycoach.com/content/uploads/2021/09/2022-US-News-College-Rankings.jpeg")`
              }
        }
        className='
      rounded-lg 
      cursor-pointer
      bg-center 
      bg-cover 
      bg-no-repeat 
      grid
      place-items-center
      shadow-md 
      w-full
      bg-opacity-80
      h-[360px]
      '
      >
        <div
          onClick={() => setShowNews(true)}
          className='
      grid 
      space-y-4 
      place-items-center 
      right-0 
      bottom-0 
      p-[30px] 
      hover:opacity-80 
      transition 
      transform 
      duration-300 '
        >
          <h2
            className='bottom-0 mx-auto
        text-2xl 
        font-google-sans 
        font-bold 
        px-3
        py-2
        grid
        space-y-5
        text-orange-400 
        hover:scale-105 
        hover:underline 
        hover:bg-blue-200
        transform 
        transition 
        duration-500 
        ease-in-out '
          >
            {title}
            {creator ? (
              <p className='text-blue-600 font-google-sans font-semibold text-xl'>
                {creator}
              </p>
            ) : (
              ' '
            )}
          </h2>
        </div>
      </div>
      <Modal
        size='regular'
        active={showNews}
        toggler={() => setShowNews(false)}
      >
        <ModalHeader toggler={() => setShowNews(false)}>
          <h3 className='newsModalTitle'>{title}</h3>
        </ModalHeader>
        <ModalBody>
          <div
            className='
            modalNewsDiv
            space-y-6
          '
          >
            {urlToImage ? (
              <img
                src={urlToImage}
                alt=''
                className='
      rounded-xl
      h-[150px]
      w-[210px]
      lg:h-[240px]
      lg:w-[330px]
      xl:h-[240px]
      xl:w-[410px]
      '
              />
            ) : (
              <img
                src='https://www.sp2.upenn.edu/wp-content/uploads/2019/03/US-News.png'
                alt=''
                className='
        rounded-xl
        h-[150px]
        w-[210px]
        lg:h-[240px]
        lg:w-[330px]
        xl:h-[240px]
        xl:w-[410px]
        '
              />
            )}
            {content ? (
              <h3 className='text-lg font-google-sans font-normal text-gray-600'>
                {content}
              </h3>
            ) : fullDescription ? (
              <h3 className='text-lg font-google-sans font-normal text-gray-600'>
                {fullDescription}
              </h3>
            ) : (
              ' '
            )}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowNews(false)}
            color='red'
            buttonType='link'
            rounded={false}
            block={false}
            iconOnly={false}
            ripple='dark'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default NewsBanner
