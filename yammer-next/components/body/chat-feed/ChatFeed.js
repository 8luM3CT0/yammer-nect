//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { Message } from '../../index'
//back-end
import { useRouter } from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import getReceiver from '../../../services/getReceiver'
import { creds, store } from '../../../firebase'
import { useRef, useState } from 'react'
import firebase from 'firebase'

function ChatFeed ({ chat, messages }) {
  const router = useRouter()
  const [user] = useAuthState(creds)
  const [message, setMessage] = useState('')
  const endRef = useRef(null)
  const [receiverSnapshot] = useCollection(
    store
      .collection('users')
      .where('email', '==', getReceiver(chat.users, user))
  )
  const [messageSnapshot] = useCollection(
    store
      .collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  )
  const receiver = receiverSnapshot?.docs?.[0]?.data()
  const receiverDetails = getReceiver(chat.users, user)

  const scrollDown = () => {
    endRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const sendMessage = e => {
    e.preventDefault()

    store
      .collection('users')
      .doc(user.uid)
      .set(
        {
          lastSeen: firebase.firestore.FieldValue.serverTimestamp()
        },
        {
          merge: true
        }
      )
    store
      .collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: message,
        user: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL
      })
    setMessage('')
    scrollDown()
  }

  const showFeed = () => {
    if (messageSnapshot) {
      return messageSnapshot.docs.map(message => (
        <Message
          key={message.id}
          user={message.data().user}
          message={{
            ...message.data(),
            timestamp: message
              .data()
              .timestamp?.toDate()
              .getTime()
          }}
        />
      ))
    } else {
      return JSON.parse(messages).map(message => (
        <Message key={message.id} user={message.user} message={message} />
      ))
    }
  }

  return (
    <div
      className='
      flex-1
      h-screen
      overflow-hidden
      grid
      bg-blue-400
      '
    >
      <header
        className='
    p-4
    top-0 
    bg-gray-800 
    sticky 
    z-50 
    flex 
    items-center 
    justify-between'
      >
        <Button
          onClick={() => router.push('/chat')}
          color='blue'
          buttonType='link'
          iconOnly={false}
          rounded={false}
          block={false}
          ripple='light'
        >
          <Icon name='arrow_back_ios' />
        </Button>
        <h2
          className='
      text-xl 
      font-google-sans 
      text-blue-200 
      font-normal'
        >
          {receiver?.displayName}
        </h2>
        {receiver ? (
          <img
            src={receiver?.photoURL}
            alt=''
            className='h-10 w-10 rounded-3xl border border-blue-300'
          />
        ) : (
          <img
            src={receiver?.displayName[0]}
            alt=''
            className='h-10 w-10 rounded-3xl border border-blue-300'
          />
        )}
      </header>
      <div
        className='
    messageFeed
'
      >
        {showFeed()}
        <div className='mb-[50px]' ref={endRef} />
      </div>
      <footer
        className='
    bottom-0 
    sticky z-50
    space-x-3 
    py-4 
    px-3 
    flex 
    items-center
    justify-evenly 
    bg-gray-800 
    border-t-2 
    border-blue-200'
      >
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          type='text'
          placeholder='Start chatting here...'
          className='
        flex-grow 
        border-0 
        outline-none 
        bg-blue-400 
        placeholder-gray-300
        p-4 
        rounded-3xl 
        text-gray-100 '
        />
        <button
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          type='submit'
          disabled={!message}
          hidden
          onClick={sendMessage}
        >
          Send
        </button>
        <Button
          color='lightBlue'
          buttonType='link'
          rounded={true}
          iconOnly={true}
          block={false}
          ripple='light'
        >
          <Icon name='add_a_photo' />
        </Button>
        <Button
          onClick={sendMessage}
          color='lightBlue'
          buttonType='link'
          rounded={true}
          iconOnly={true}
          block={false}
          ripple='light'
        >
          <Icon name='send' />
        </Button>
      </footer>
    </div>
  )
}

export default ChatFeed
