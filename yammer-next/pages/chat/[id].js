//front-end
import Head from 'next/head'
import { ChatFeed } from '../../components'
//back-end
import { creds, store } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import getReceiver from '../../services/getReceiver'
import firebase from 'firebase'

function MessagePage ({ chat, messages }) {
  const [user] = useAuthState(creds)

  return (
    <div
      className='
  overflow-hidden
  scrollbar-hide
  bg-gray-80
  '
    >
      <Head>
        <title>Chat with your person here</title>
      </Head>
      <div className='flex-grow overflow-scroll scrollbar-hide'>
        <ChatFeed chat={chat} messages={messages} />
      </div>
    </div>
  )
}

export default MessagePage

export async function getServerSideProps (context) {
  const ref = store.collection('chats').doc(context.query.id)

  const chatDetails = await ref.get()
  const chat = {
    id: chatDetails.id,
    ...chatDetails.data()
  }

  const messages = await ref
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .get()

  const messageDetails = messages.docs
    .map(doc => ({
      id: doc.id,
      ...doc.data()
    }))
    .map(messages => ({
      ...messages,
      timestamp: messages.timestamp.toDate().getTime()
    }))

  return {
    props: {
      chat: chat,
      messages: JSON.stringify(messageDetails)
    }
  }
}
