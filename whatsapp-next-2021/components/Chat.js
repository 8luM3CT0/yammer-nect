import styled from 'styled-components'
import { Avatar } from '@material-ui/core'
import getReceiver from '../utilities/getReceiver'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function Chat ({ id, users }) {
  const [user] = useAuthState(auth)
  const [receiverSnapshot] = useCollection(
    db.collection('users').where('email', '==', getReceiver(users, user))
  )

  const enterChat = () => {
    router.push(`/chat/${id}`)
  }

  const receiver = getReceiver(users, user)
  const receiverPhoto = receiverSnapshot?.docs?.[0]?.data()
  //for router actions
  const router = useRouter()

  return (
    <Container onClick={enterChat}>
      {receiver ? (
        <UserAvatar src={receiverPhoto?.photoURL} />
      ) : (
        <UserAvatar>{receiver[0]}</UserAvatar>
      )}
      <UserEmail>{receiver}</UserEmail>
    </Container>
  )
}

export default Chat

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;

  :hover {
    background-color: #f5f5f5;
  }
`

const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`
const UserEmail = styled.p`
  font-weight: 550;
  color: #313131;
  :hover {
    color: #515151;
  }
`
