import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { useRouter } from 'next/router'
import { IconButton } from '@material-ui/core'
import { MoreVert, AttachFile, InsertEmoticon, Mic } from '@material-ui/icons'
import { useCollection } from 'react-firebase-hooks/firestore'
import Message from './Message.js'
import { useRef, useState } from 'react'
import firebase from 'firebase'
import getReceiver from '../utilities/getReceiver'
import TimeAgo from 'timeago-react'

function ChatFeed ({ chat, messages }) {
  const [user] = useAuthState(auth)
  const [input, setInput] = useState('')
  const endOfMessagesRef = useRef(null)
  const router = useRouter()
  const [messagesSnapshot] = useCollection(
    db
      .collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .orderBy('timestamp', 'asc')
  )
  const [receiverSnapshot] = useCollection(
    db.collection('users').where('email', '==', getReceiver(chat.users, user))
  )

  const showMessages = () => {
    if (messagesSnapshot) {
      return messagesSnapshot.docs.map(message => (
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

  const scrollToBottom = () => {
    endOfMessagesRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }

  const sendMessage = e => {
    e.preventDefault()

    //updates last seen
    db.collection('users')
      .doc(user.uid)
      .set(
        {
          lastSeen: firebase.firestore.FieldValue.serverTimestamp()
        },
        { merge: true }
      )

    db.collection('chats')
      .doc(router.query.id)
      .collection('messages')
      .add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        user: user.email,
        photoURL: user.photoURL
      })
    setInput('')
    scrollToBottom()
  }

  const receiver = receiverSnapshot?.docs?.[0]?.data()
  const receiverEmail = getReceiver(chat.users, user)

  return (
    <Container>
      <ChatHeader>
        {receiver ? (
          <Avatar src={receiver?.photoURL} />
        ) : (
          <Avatar src={receiverEmail[0]} />
        )}
        <HeaderInfo>
          <ReceiverEmail>{receiverEmail}</ReceiverEmail>
          {receiverSnapshot ? (
            <ReceiverActive>
              Last seen...:{' '}
              {receiver?.lastSeen?.toDate() ? (
                <TimeAgo datetime={receiver?.lastSeen?.toDate()} />
              ) : (
                'Unavailable'
              )}
            </ReceiverActive>
          ) : (
            <ReceiverActive>Loading Last seen ...</ReceiverActive>
          )}
        </HeaderInfo>
        <HeaderIcons>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </HeaderIcons>
      </ChatHeader>
      <MessageFeed>
        {showMessages()}
        <EndOfMessage ref={endOfMessagesRef} />
      </MessageFeed>
      <InputFeed>
        <InsertEmoticon />
        <InputField value={input} onChange={e => setInput(e.target.value)} />
        <button hidden disabled={!input} type='submit' onClick={sendMessage}>
          Send message
        </button>
        <Mic />
      </InputFeed>
    </Container>
  )
}

export default ChatFeed

const Container = styled.div``

const ChatHeader = styled.div`
  position: sticky;
  background-color: whitesmoke;
  z-index: 100;
  top: 0;
  align-items: center;
  display: flex;
  height: 80px;
  padding: 11px;
  border-bottom: 1px solid #e5e5e5;
`

const HeaderInfo = styled.div`
  margin-left: 20px;
  flex: 1;
`

const ReceiverEmail = styled.h3`
  margin-bottom: 3px;
`

const ReceiverActive = styled.p`
  font-size: 14px;
  color: gray;
`

const HeaderIcons = styled.div`
  display: flex;
`

const MessageFeed = styled.div`
  padding: 30px;
  background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
  min-height: 90vh;
`

const EndOfMessage = styled.div`
  margin-bottom: 50px;
`

const InputFeed = styled.form`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: whitesmoke;
  z-index: 100;
`

const InputField = styled.input`
  flex: 1;
  outline: 0;
  border: none;
  padding: 10px;
  background-color: white;
  z-index: 100;
  border-radius: 10px;
  margin-left: 15px;
  margin-right: 15px;
`
