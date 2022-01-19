//front-end
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
//back-end
import { creds, store, storage } from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useRef, useState } from 'react'
import firebase from 'firebase'

function InputBox () {
  const [user] = useAuthState(creds)
  const inputRef = useRef(null)
  const filePicker = useRef(null)
  const [jpgPost, setJPGPost] = useState(null)
  const [openPic, setOpenPic] = useState(false)
  const [picFromWeb, setPicFromWeb] = useState(false)

  const addImage = e => {
    const reader = new FileReader()
    if (e.target.value[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = readerEvent => {
      setJPGPost(readerEvent.target.result)
    }
    setOpenPic(false)
  }

  const removeJPG = () => {
    setJPGPost(null)
  }

  const postArticle = e => {
    e.preventDefault()

    store
      .collection('posts')
      .add({
        post: inputRef.current.value,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .then(doc => {
        if (jpgPost) {
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            .putString(jpgPost, 'data_url')

          removeJPG()

          uploadTask.on(
            'state_change',
            null,
            error => console.error(error),
            () => {
              storage
                .ref('posts')
                .child(doc.id)
                .getDownloadURL()
                .then(url => {
                  store
                    .collection('posts')
                    .doc(doc.id)
                    .set(
                      {
                        articleImage: url
                      },
                      { merge: true }
                    )
                })
            }
          )
        }
      })
    inputRef.current.value = ' '
  }

  return (
    <>
      {user ? (
        <div
          className='
          inputBox 
          inputDim 
          bg-gray-800
          border-4
          border-blue-400
          rounded-lg 
          sticky
          top-0
          z-50
          py-[20px]
          px-[40px]
          shadow-xl
          '
        >
          <textarea
            ref={inputRef}
            placeholder="What's happening ?"
            type='text'
            className='
              w-full
               h-full 
               bg-transparent 
               overflow-y-scroll
               scrollbar-hide
               outline-none 
               p-4
               text-blue-100 
               font-robot-slab 
               text-lg
               border-x-2
               border-blue-300
               '
          />
          <button hidden onClick={postArticle}>
            Post article
          </button>
          {/**mobile posting */}
          <div className='mobilePhotoAdd'>
            {jpgPost ? (
              <div
                className='hover:opacity-90 grid space-y-2'
                onClick={removeJPG}
              >
                <img
                  src={jpgPost}
                  alt=''
                  className='
            rounded-xl 
            h-24 
            w-32 
            border 
            border-blue-200'
                />
              </div>
            ) : (
              <Button
                onClick={e => setOpenPic(true)}
                color='blue'
                buttonType='link'
                rounded={false}
                block={false}
                ripple='light'
              >
                <Icon name='camera_alt' />
              </Button>
            )}

            <Button
              onClick={postArticle}
              color='blue'
              buttonType='filled'
              rounded={false}
              block={false}
              iconOnly={false}
              ripple='dark'
            >
              <h4
                className='
              text-base 
              font-google-sans 
              capitalize'
              >
                Post
              </h4>
            </Button>
          </div>
          <div
            className='
          grid 
          justify-between 
          px-10 
          space-y-3'
          >
            {jpgPost ? (
              <div
                className='hover:opacity-90 grid space-y-2'
                onClick={removeJPG}
              >
                <img
                  src={jpgPost}
                  alt=''
                  className='
              jpgDisplay
              rounded-xl 
              h-24 
              w-32 
              border 
              border-blue-200'
                />
              </div>
            ) : (
              <div className='photoAddOptions  space-y-2'>
                <Button
                  onClick={() => filePicker.current.click()}
                  color='blue'
                  buttonType='link'
                  rounded={false}
                  iconOnly={false}
                  block={false}
                  ripple='dark'
                  className='grid space-y-3'
                >
                  <Icon name='add_photo_alternate' />
                  <h3 className='text-xs capitalize font-google-sans'>
                    library
                  </h3>
                </Button>
                <input
                  hidden
                  type='file'
                  ref={filePicker}
                  onChange={addImage}
                />
                <Button
                  onClick={e => setPicFromWeb(true)}
                  color='blue'
                  buttonType='link'
                  rounded={false}
                  iconOnly={false}
                  block={false}
                  ripple='dark'
                  className='grid space-y-3'
                >
                  <Icon name='add_to_photos' />
                  <h3 className='text-xs capitalize font-google-sans'>web</h3>
                </Button>
              </div>
            )}
            <div className='photoAddOptions'>
              <Button
                onClick={postArticle}
                color='blue'
                buttonType='filled'
                block={false}
                iconOnly={false}
                rounded={false}
                ripple='dark'
              >
                <h4 className='capitalize font-robot-slab font-normal'>
                  Post!
                </h4>
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className='
        w-full 
        justify-center 
        bg-gray-800 
        rounded-lg 
        p-4 
        inputBox'
        >
          <h2
            className='
          text-xl 
          text-blue-300 
          font-robot-slab 
          font-semibold'
          >
            Sign in to start posting
          </h2>
        </div>
      )}
      <Modal size='regular' active={openPic} toggler={() => setOpenPic(false)}>
        <ModalHeader toggler={() => setOpenPic(false)}>
          <h3
            className='
          text-xl 
          font-robot-slab 
          font-semibold 
          text-blue-500'
          >
            Add a pic
          </h3>
        </ModalHeader>
        <ModalBody>
          <div
            className='
          p-[100px] 
          flex 
          items-center
          space-x-3
          '
          >
            <Button
              onClick={() => filePicker.current.click()}
              color='blue'
              buttonType='link'
              rounded={false}
              iconOnly={false}
              block={false}
              ripple='dark'
              className='grid space-y-3'
            >
              <Icon name='add_photo_alternate' />
              <h3 className='text-xs capitalize font-google-sans'>library</h3>
            </Button>
            <input hidden type='file' ref={filePicker} onChange={addImage} />
            <Button
              color='blue'
              buttonType='link'
              rounded={false}
              iconOnly={false}
              block={false}
              ripple='dark'
              className='grid space-y-3'
            >
              <Icon name='add_to_photos' />
              <h3 className='text-xs capitalize font-google-sans'>web</h3>
            </Button>
          </div>
        </ModalBody>
      </Modal>
      <Modal
        active={picFromWeb}
        size='regular'
        toggler={() => setPicFromWeb(false)}
      >
        <ModalHeader toggler={() => setPicFromWeb(false)}>
          <h1 className='text-xl p-10 font-robot-slab font-semibold'>
            Add a picture from the web
          </h1>
        </ModalHeader>
        <ModalBody>
          <div className='p-[70px] grid space-y-4'>
            <h2 className='text-lg font-google-sans font-normal'>Paste here</h2>
            <input
              type='url'
              placeholder='URL ?...'
              className='
            outline-none 
            border-b-2 
            border-blue-100 
            bg-transparent 
            font-robot-slab'
            />
          </div>
        </ModalBody>
      </Modal>
    </>
  )
}

export default InputBox
