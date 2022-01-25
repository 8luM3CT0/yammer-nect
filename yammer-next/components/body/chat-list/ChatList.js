//front-end
//back-end
import getReceiver from '../../../services/getReceiver'
import { creds, store } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function ChatList ({ id, users }) {
  const [user] = useAuthState(creds)
  const router = useRouter()
  const [receiverSnapshot] = useCollection(
    store.collection('users').where('email', '==', getReceiver(users, user))
  )
  const receiver = getReceiver(users, user)
  const receiverDetails = receiverSnapshot?.docs?.[0]?.data()

  return (
    <div
      className='
  my-3 
  px-3 
  py-2 
  justify-evenly
  cursor-pointer 
  flex 
  items-center
  rounded-lg 
  bg-blue-200 
  hover:bg-blue-300 
  hover:scale-105 
  transition 
  transform 
  duration-200 
  ease-in-out'
    >
      {receiver ? (
        <img
          src={receiverDetails?.photoURL}
          alt=''
          className='
          h-10 
          w-10 
          border-2 
          border-blue-400 
          rounded-3xl'
        />
      ) : (
        <img
          className='
        h-10 
        w-10 
        border-2 
        border-blue-400 
        rounded-3xl'
        >
          {receiver[0]}
        </img>
      )}
      <h2
        className='
      font-google-sans 
      font-semibold 
      text-lg 
      text-gray-50'
      >
        {receiverDetails?.displayName}
      </h2>
    </div>
  )
}

export default ChatList
