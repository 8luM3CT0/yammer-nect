//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { useRouter } from 'next/router'
import { useState } from 'react'

function NewsArticle ({
  title,
  imageUrl,
  creator,
  excerpt,
  fullDescription,
  content,
  link
}) {
  const router = useRouter()
  const [showNews, setShowNews] = useState(false)

  return (
    <>
      <div onClick={e => setShowNews(true)} className='newsArticleDiv'>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt=''
            className='
      rounded-xl
      h-[130px]
      w-[190px]
      lg:h-[210px]
      lg:w-[330px]
      xl:h-[240px]
      xl:w-[410px]
      opacity-90
      '
          />
        ) : (
          <img
            src='https://www.sp2.upenn.edu/wp-content/uploads/2019/03/US-News.png'
            alt=''
            className='
        rounded-xl
        h-[130px]
        w-[190px]
        lg:h-[210px]
        lg:w-[330px]
        xl:h-[240px]
        xl:w-[410px]
        opacity-90
        '
          />
        )}
        <div
          className='
      flex 
      flex-col 
      space-y-4 
      text-center 
      items-center 
      text-orange-400'
        >
          <h1
            className='
        newsArticleTitle 
        px-5'
          >
            {title}
          </h1>
          {creator ? <h2 className='articleAuthor'>by {creator}</h2> : ' '}
          <div className='articleExcerptDiv'>
            <p className='articleExcerpt'>{excerpt}</p>
          </div>
        </div>
      </div>
      <Modal
        size='regular'
        active={showNews}
        toggler={() => setShowNews(false)}
      >
        <ModalHeader toggler={() => setShowNews(false)}>
          <h3 className='newsTitleInModal'>{title}</h3>
        </ModalHeader>
        <ModalBody>
          <div
            className='
            modalNewsDiv
            space-y-6
          '
          >
            {imageUrl ? (
              <img
                src={imageUrl}
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
            ) : excerpt ? (
              <h3 className='text-lg font-google-sans font-normal text-gray-600'>
                {excerpt}
              </h3>
            ) : (
              ' '
            )}
            <a
              href={link}
              className='
              lg:text-base 
              text-sm 
              font-google-sans 
              font-semibold 
              text-blue-500
              hover:underline
              '
            >
              {link}
            </a>
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

export default NewsArticle
