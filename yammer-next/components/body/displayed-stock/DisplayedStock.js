//front-end
//bakc-end
function DisplayedStock ({
  title,
  symbol,
  currentPrice,
  companyLogo,
  industry,
  website
}) {
  return (
    <div
      className='
    h-[480px] 
    bg-teal-800 
    flex-grow 
    grid 
    p-5
    space-y-3
    transform
    transition
    duration-300
    hover:bg-teal-700
    cursor-pointer
    ease-in-out
    '
    >
      <img
        src={companyLogo}
        alt=''
        className='
        h-24 
        w-24 
        rounded-xl 
        mx-auto 
        align-middle'
      />
      <h2 className='text-gray-400 text-2xl font-robot-slab font-normal'>
        {title} - {symbol}
      </h2>
      <h3 className='text-gray-400 text-xl font-robot-slab font-normal'>
        Price: {currentPrice}
      </h3>
      <h4 className='text-gray-400 text-lg font-robot-slab font-semibold'>
        Industry type: {industry}
      </h4>
      <a
        href={website}
        className='text-gray-400 text-base font-robot-slab font-bold'
      >
        Website: {website}
      </a>
    </div>
  )
}

export default DisplayedStock
