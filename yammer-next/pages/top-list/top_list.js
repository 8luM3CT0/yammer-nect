//front-end
//back-end

function TopList ({ symbol, title, price }) {
  return (
    <div
      className='
    h-[480px] 
    flex-grow
    grid
    place-items-center 
    overflow-y-scroll
    scrollbar-hide 
    space-y-5'
    >
      <span
        className='
        w-full
        py-3
        z-20
        sticky
        top-0
        px-5 
        mx-auto 
      bg-gray-800'
      >
        <h1 className='text-teal-200 font-bold font-robot-slab text-xl '>
          Top list of stocks
        </h1>
      </span>

      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>UBER</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>Uber Inc.</h2>-
        <h3 className='font-light text-base'>$36.58</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>LYFT</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>Lyft Inc.</h2>-
        <h3 className='font-light text-base'>$43.82</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>ABNB</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          AirBnb Inc.
        </h2>
        -<h3 className='font-light text-base'>$186.64</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>NFLX</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          Netflix Inc.
        </h2>
        -<h3 className='font-light text-base'>$398.08</h3>
      </span>

      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>TWTR</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          Twitter Inc.
        </h2>
        -<h3 className='font-light text-base'>$36.24</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>T</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>AT&T Inc.</h2>-
        <h3 className='font-light text-base'>$23.94</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>SNAP</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>Snap Inc.</h2>-
        <h3 className='font-light text-base'>$40.01</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>BRK.A</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          Berkshire Hawthaway Inc.
        </h2>
        -<h3 className='font-light text-base'>$473.98K</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>BTI</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          British American Tobacco Inc.
        </h2>
        -<h3 className='font-light text-base'>$46.50</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>HON</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          Honeywell International Inc.
        </h2>
        -<h3 className='font-light text-base'>$189.53</h3>
      </span>
      <span
        className='flex 
      items-center 
      w-full
      px-5
      text-green-300
      justify-between 
      space-x-3 
      font-google-sans
      transform
      transition
      duration-300
      hover:scale-110
      ease-in-out
      cursor-pointer
      '
      >
        <h1 className='font-semibold text-lg '>HD</h1>-
        <h2 className='font-normal text-base w-[120px] truncate'>
          The Home Depot Inc.
        </h2>
        -<h3 className='font-light text-base'>$353.26</h3>
      </span>
    </div>
  )
}

export default TopList
