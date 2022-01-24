//front-end
import { Button } from '@material-tailwind/react/Button'
import { Icon } from '@material-tailwind/react/Icon'
//back-end
import { creds, store } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function ChatSidebar () {
  const [user] = useAuthState(creds)

  return (
    <div className='chatSidebar'>
      <div
        className='
        justify-evenly
        top-0 
        sticky
        z-50
        bg-blue-300 
        border-b-2 
        border-gray-800
        flex
        items-center
        space-x-3 
        py-4 
        px-2'
      >
        <img
          src={user?.photoURL}
          alt=''
          className='h-10 rounded-3xl border border-gray-900'
        />
        <div className='grid space-y-2 text-center'>
          <h3 className='text-lg font-google-sans font-normal text-gray-600'>
            {user?.displayName}
          </h3>
          <h4 className='text-base font-google-sans font-light text-gray-500'>
            {user?.email}
          </h4>
        </div>
      </div>
      <div
        className='
      h-screen
      overflow-y-scroll
      scrollbar-hide
      p-8
      '
      ></div>
    </div>
  )
}

export default ChatSidebar
