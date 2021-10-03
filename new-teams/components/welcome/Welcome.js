function Welcome () {
  return (
    <div
      className='
        hidden 
        md:grid 
        bg-gray-800 
        flex-grow
        h-screen
        place-items-center
        '
    >
      <div
        className='
            bg-gray-800
            border-2
            border-green-300
            p-[200px] 
            grid
            text-center
            rounded-lg
            space-y-8
            '
      >
        <span
          className='
                flex 
                items-center
                space-x-4
                mb-4
                '
        >
          <img
            src='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo'
            alt=''
            className='
                    h-16
                    rounded-full
                    border
                    border-green-200
                    '
          />
          <h1
            className='
                    font-semibold
                    text-gray-100
                    text-2xl
                    '
          >
            Hello, John Seed!
          </h1>
        </span>
        <h2
          className='
          font-light
                text-xl
                text-gray-50
                '
        >
          Chat friends, family & other users
        </h2>
        <h3 className='font-extralight text-white text-base'>
          Add people to talk to with the button below
        </h3>
        <button
          type='submit'
          className='py-5 px-3 rounded-2xl bg-green-500 text-white hover:bg-white hover:text-green-500 active:bg-green-300 transition delay-100 ease-in-out'
        >
          Add new receiver
        </button>
      </div>
    </div>
  )
}

export default Welcome
