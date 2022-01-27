//front-end
import { forwardRef } from 'react'
//back-end
import { useRouter } from 'next/router'

function NewsBanner ({ result, urlToImage, title }) {
  const router = useRouter()

  return (
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
        <h2 className='text-2xl font-google-sans font-semibold text-orange-500 hover:animate-pulse hover:underline'>
          {title}
        </h2>
      </div>
    </div>
  )
}

export default NewsBanner
