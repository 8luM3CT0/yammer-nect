//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { useRouter } from 'next/router'

function NewsArticle ({ title, imageUrl, creator, excerpt }) {
  const router = useRouter()

  return (
    <div className='newsArticleDiv'>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt=''
          className='
      rounded-xl
      h-[190px]
      w-[290px]
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
        h-[190px]
        w-[290px]
        lg:h-[210px]
        lg:w-[330px]
        xl:h-[240px]
        xl:w-[410px]
        opacity-90
        '
        />
      )}
      <div className='flex flex-col text-center items-center text-orange-400'>
        <h1 className='text-lg font-google-sans font-semibold'>
          {title}
        </h1>
        <h2 className='text-base font-robot-slab font-semibold text-blue-400'>
          by {creator}
        </h2>
        <p className='articleExcerpt'>{excerpt}</p>
      </div>
    </div>
  )
}

export default NewsArticle
