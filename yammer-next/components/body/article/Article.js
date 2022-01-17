//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import moment from 'moment'
//back-end
import { useRouter } from 'next/router'

function Article ({
  id,
  articleImage,
  email,
  name,
  photoURL,
  post,
  timestamp
}) {
  const router = useRouter()

  const goToPost = () => {
    /**
     * router.push(`/post/${id}`)
     */
  }

  return (
    <div className='articleDiv'>
      <div
        className='
            w-full 
            justify-between 
            flex 
            items-center 
            px-5'
      >
        <div
          className='
                flex 
                items-center 
                space-x-3'
        >
          <img
            src={photoURL}
            alt='photo'
            className='
                    rounded-3xl 
                    h-10
                    border 
                    border-blue-300'
          />
          <h4
            className='
                    font-semibold 
                    font-robot-slab 
                    text-lg 
                    text-blue-500'
          >
            {name}
          </h4>
        </div>
        <h5
          className='
                text-sm
                font-thin 
                font-google-sans 
                text-gray-500'
        >
          {timestamp
            ? moment(timestamp).format('MM/DD/YYYY, LT')
            : 'Loading...'}
        </h5>
      </div>
      {articleImage ? (
        <img
          src={articleImage}
          className='
            p-10
            rounded-lg
            h-full
            w-full
            relative
            '
        />
      ) : (
        ' '
      )}
      <h4
        className='
      text-base 
      h-[170px]
      p-4 
      line-clamp-3
      font-normal 
      font-font-robot 
      text-orange-400'
      >
        {post}
      </h4>
      <div className='w-[190px] h-[80px] mx-auto'>
        <Button
          color='blue'
          buttonType='link'
          block={false}
          iconOnly={false}
          rounded={false}
          ripple='light'
        >
          <h2
            className='
          capitalize 
          text-sm 
          font-google-sans'
          >
            Read more
          </h2>
        </Button>
      </div>
    </div>
  )
}

export default Article