//front-end
import { forwardRef } from 'react'
//back-end
import { useRouter } from 'next/router'

function NewsBanner ({ result, urlToImage, title }) {
  const router = useRouter()

  return (
    <div
      style={{
        backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Django_logo.svg/278px-Django_logo.svg.png')`
      }}
      className='
      absolute 
      rounded-lg 
      bg-center 
      bg-cover 
      bg-no-repeat 
      shadow-md 
      inline-block 
      w-[710px] 
      h-80'
    ></div>
  )
}

export default NewsBanner
