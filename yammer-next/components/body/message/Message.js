//front-end
import TimeAgo from 'timeago-react'
//back-end
import { creds } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

function Message ({ user, message }) {
  const [useLoggedIn] = useAuthState(creds)

  return (
    <div className='messageDiv'>
      <img
        src={message?.photoURL}
        alt=''
        className='lg:h-12 h-8 rounded-3xl border border-blue-300'
      />
      <div className='space-y-3'>
        <div className='flex items-center space-x-3'>
          <h3 className='text-lg font-semibold font-robot-slab text-blue-300'>
            {message?.displayName}
          </h3>
          <p className='text-gray-600 font-normal text-sm'>
            <TimeAgo datetime={message.timestamp} />
          </p>
        </div>
        <h3 className='text-md text-blue-100 font-robot-slab font-medium'>
          {message.message}
        </h3>
      </div>
    </div>
  )
}

export default Message
