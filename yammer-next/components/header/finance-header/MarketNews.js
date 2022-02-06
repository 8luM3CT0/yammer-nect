//front-end
//back-end
function MarketNews ({ title }) {
  return (
    <div
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
  )
}

export default MarketNews
