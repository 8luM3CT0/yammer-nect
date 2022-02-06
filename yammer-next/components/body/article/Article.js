//front-end
import { Button, Icon, Dropdown, DropdownItem, DropdownLink } from '../../index'
//back-end
import { forwardRef } from 'react'
import { useRouter } from 'next/router'

function Article ({
  id,
  articleImage,
  jpgWeb,
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
        <div
          className='
        flex
        items-center
        space-x-4
        '
        >
          {timestamp ? (
            <h5
              className='
            desktopDiv
                text-xs
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
                text-xs
                font-thin 
                font-google-sans 
                text-gray-500'
            >
              Loading...
            </h5>
          )}
          <Dropdown
            color='blue'
            buttonType='link'
            size='sm'
            rounded={false}
            block={false}
            ripple='light'
          >
            <DropdownLink
              href='#'
              color='red'
              ripple='dark'
              onClick={e => e.preventDefault()}
            >
              Remove
            </DropdownLink>
          </Dropdown>
        </div>
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
      ) : jpgWeb ? (
        <img
          src={jpgWeb}
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
      <Button
        onClick={goToPost}
        color='blue'
        buttonType='link'
        iconOnly={false}
        block={false}
        rounded={false}
        ripple='light'
        className='mx-auto'
      >
        <h4
          className='
        text-sm 
        font-google-sans 
        font-normal 
        capitalize'
        >
          Read post
        </h4>
      </Button>
    </div>
  )
}

export default Article
