//front-end
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import { ChatList } from '../../index'
//back-end
import { useState } from 'react'
import { creds, store } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import * as UserValidator from 'email-validator'

function ChatSidebar () {
  const [user] = useAuthState(creds)
  const [showModal, setShowModal] = useState(false)
  const [showAddUser, setShowAddUser] = useState(false)
  const [input, setInput] = useState('')
  const chatRef = store
    .collection('chats')
    .where('users', 'array-contains', user.email)
  const [chatSnapshot] = useCollection(chatRef)

  const addPeople = e => {
    e.preventDefault()

    if (!input) {
      return (
        <Modal active={showModal} toggler={() => setShowModal(false)}>
          <ModalBody>
            <div
              className='
            text-center 
            text-lg 
            font-hind-font 
            font-semibold 
            align-middle'
            >
              Something wrong with the input. try again
            </div>
          </ModalBody>
        </Modal>
      )
    }
    if (UserValidator.validate(input) && input !== user.email) {
      store.collection('chats').add({
        users: [user.email, input]
      })
    }
    setShowAddUser(false)
    setInput('')
  }

  return (
    <>
      <div className='chatSidebar'>
        <div
          className='
        justify-evenly
        top-0 
        sticky
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
            className='
          h-10 
          rounded-3xl 
          border 
          border-gray-900'
          />
          <div
            className='
        grid 
        space-y-2 
        text-center'
          >
            <h3
              className='
          text-lg 
          font-google-sans 
          font-normal 
          text-gray-50'
            >
              {user?.displayName}
            </h3>
            <h4
              className='
          text-base 
          font-google-sans 
          font-semibold 
          text-gray-100'
            >
              {user?.email}
            </h4>
          </div>
          <Button
            onClick={() => setShowAddUser(true)}
            color='black'
            rounded={true}
            iconOnly={false}
            block={false}
            ripple='light'
            className='grid'
          >
            <Icon name='person_add' />
            <h2
              className='
          text-blue-50 
          capitalize 
          text-xs 
          font-google-sans
          font-light
          '
            >
              Add
            </h2>
          </Button>
        </div>
        <div
          className='
      h-screen
      overflow-y-scroll
      scrollbar-hide
      p-8
      '
        >
          {chatSnapshot?.docs.map(chat => (
            <ChatList key={chat.id} id={chat.id} users={chat.data().users} />
          ))}
        </div>
      </div>
      <Modal
        size='lg'
        active={showAddUser}
        toggler={() => setShowAddUser(false)}
      >
        <ModalHeader>
          <h2
            className='
        text-xl 
        font-robot-slab 
        font-normal 
        text-gray-800 '
          >
            Add someone
          </h2>
        </ModalHeader>
        <ModalBody>
          <div
            className='
        p-[40px] 
        space-y-4 
        grid'
          >
            <h4
              className='
          text-lg 
          font-google-sans 
          text-gray-900 
          font-semibold'
            >
              Add them here
            </h4>
            <input
              type='text'
              value={input}
              onChange={e => setInput(e.target.value)}
              className='
          font-robot-slab
          text-blue-300
          outline-none 
          w-full 
          border-b-2 
          px-3
          border-gray-400'
              onKeyDown={e => e.key === 'Enter' && addPeople()}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            ripple='light'
            onClick={() => setShowAddUser(false)}
          >
            Close
          </Button>
          <Button
            color='blue'
            buttonType='link'
            ripple='light'
            onClick={addPeople}
          >
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default ChatSidebar
