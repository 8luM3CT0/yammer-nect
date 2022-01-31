//front-end
import { forwardRef } from 'react'
//back-end
import { useRouter } from 'next/router'

function NewsBanner ({ result, urlToImage, title, creator }) {
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
  )
}

export default NewsBanner
