//front-end
//back-end

function SidebarList () {
  return (
    <div
      className='
        h-screen 
        bg-gray-900 
        overflow-hidden 
        flex-1'
    >
      <div
        className='
      top-0 
      sticky 
      z-50 
      bg-gray-900 
      border-b-8 
      border-gray-700 
      flex 
      items-center 
      justify-evenly 
      py-4 
      px-2 
      space-x-3'
      >
        <img
          src='https://lh3.googleusercontent.com/ogw/ADea4I4wtUg3MHCpPxuIczZRSnxCyEQ1LVnaxR6OJtwpOw=s32-c-mo'
          alt=''
          className='
          h-[42px] 
          rounded-3xl 
          border-2 
          border-green-300'
        />
        <div className='text-center space-y-3'>
          <h2
            className='
          text-green-100 
          font-semibold 
          text-lg'
          >
            John Seed
          </h2>
          <h4
            className='
          text-green-300 
          font-medium 
          text-base'
          >
            rumlowb@gmail.com
          </h4>
        </div>
      </div>
    </div>
  )
}

export default SidebarList
