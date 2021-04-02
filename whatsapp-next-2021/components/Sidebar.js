import { Avatar, IconButton, Button } from '@material-ui/core'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import SearchIcon from '@material-ui/icons/Search'
//for email validation
import * as EmailValidation from 'email-validator'
//for user auth && chats
import { auth, db } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import Chat from './Chat'

function Sidebar () {
  const [user] = useAuthState(auth)
  const userChatRef = db
    .collection('chats')
    .where('users', 'array-contains', user.email)
  const [chatSnapshot] = useCollection(userChatRef)

  const createChat = () => {
    const input = prompt(
      'Please enter an email address for the user you want to chat with : '
    )

    if (!input) return null

    if (
      EmailValidation.validate(input) &&
      !chatExisting(input) &&
      input !== user.email
    ) {
      //for adding chat to db
      //chatExisting is to validate on whether the email exists or not
      db.collection('chats').add({
        users: [user.email, input]
      })
    }
  }

  const chatExisting = receiver =>
    !!chatSnapshot?.docs.find(
      chat => chat.data().users.find(user => user === receiver)?.length > 0
    )

  return (
    <Container>
      <Header>
        <UserAvatar src={user.photoURL} onClick={() => auth.signOut()} />
        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>
      <SearchContainer>
        <SearchIcon />
        <Input placeholder='Search in chats' />
      </SearchContainer>
      <SidebarButton onClick={createChat}>Start a new chat</SidebarButton>
      {/**ChatList */}
      {chatSnapshot?.docs.map(chat => (
        <Chat key={chat.id} id={chat.id} users={chat.data().users} />
      ))}
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  flex: 0.3;
  border-right: 1px solid gray;
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`
const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  height: 80px;
  border-bottom: 1px solid lightgray;
`

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }
`
const IconsContainer = styled.div``

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`

const Input = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`

const SidebarButton = styled(Button)`
  width: 100%;
  &&& {
    background-color: #e5e5e5;
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    font-weight: 600;
  }
`
