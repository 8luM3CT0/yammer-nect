//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { forwardRef } from 'react'
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
    router.push(`/post/${id}`)
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
            alt=''
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
        {timestamp ? (
          <h5
            className='
            desktopDiv
                text-sm
                font-thin 
                font-google-sans 
                text-gray-500'
          >
            {new Date(timestamp?.toDate()).toLocaleString()}
          </h5>
        ) : (
          <h5
            className='
            desktopDiv
                text-sm
                font-thin 
                font-google-sans 
                text-gray-500'
          >
            Loading...
          </h5>
        )}
      </div>
      {articleImage ? (
        <img
          src={articleImage}
          className='
            p-5
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
          onClick={goToPost}
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
