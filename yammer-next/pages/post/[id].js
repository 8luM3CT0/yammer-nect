//front-end
import Head from 'next/head'
import PostHeader from '../../components/header/post-header/PostHeader'
import moment from 'moment'
import Modal from '@material-tailwind/react/Modal'
import ModalHeader from '@material-tailwind/react/ModalHeader'
import ModalBody from '@material-tailwind/react/ModalBody'
import ModalFooter from '@material-tailwind/react/ModalFooter'
import Dropdown from '@material-tailwind/react/Dropdown'
import DropdownItem from '@material-tailwind/react/DropdownItem'
import DropdownLink from '@material-tailwind/react/DropdownLink'
//back-end
import { creds, store } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useDocument, useDocumentOnce } from 'react-firebase-hooks/firestore'
import { useRouter } from 'next/router'

function UserPost () {
  const router = useRouter()
  const [user] = useAuthState(creds)
  const { id } = router.query

  const [snapshot, loadingSnapshot] = useDocument(
    store.collection('posts').doc(id)
  )

  return (
    <div
      className='
        bg-gray-50
          overflow-y-scroll
          scrollbar-hide
        '
    >
      <Head>
        <title>Post by {snapshot?.data()?.name}</title>
      </Head>

      <PostHeader />
      <div className='postMainArea pb-[90px]'>
        <div
          className='
        max-w-[1100px]
        mx-auto
        bg-gray-800
        lg:h-[1080px]
        h-[800px]
        overflow-y-scroll
        scrollbar-hide
        grid
        grid-cols-1
        gap-12
        rounded-b-lg
        px-5
        py-3
        '
        >
          <div
            className='
          w-full 
          justify-between 
          flex 
          items-center 
          px-5'
          >
            <div
              className='
            flex 
            items-center 
            space-x-3'
            >
              <img
                src={snapshot?.data()?.photoURL}
                alt=''
                className='
              rounded-3xl 
              h-10 
              w-10
              border-4 
              border-blue-300'
              />
              <h4 className='postCreator'>{snapshot?.data().name}</h4>
            </div>
            {snapshot?.data().timestamp ? (
              <h5
                className='
              desktopDiv
              text-xs
              font-thin 
              font-google-sans 
              text-gray-500'
              >
                {moment(snapshot?.data().timestamp).format('MMM/DD/YY, LT')}
              </h5>
            ) : (
              <h5
                className='
              desktopDiv
              text-xs
              font-thin
              font-google-sans
              text-gray-500
              '
              >
                Loading...
              </h5>
            )}
          </div>
          <div className='lg:h-[680px] lg:w-[890px] h-[310px] w-[410px] mx-auto'>
            {snapshot?.data().articleImage ? (
              <img
                src={snapshot?.data().articleImage}
                alt=''
                className='
            object-top 
            rounded-xl 
            h-full
            w-full 
            relative'
              />
            ) : snapshot?.data().jpgWeb ? (
              <img
                src={snapshot?.data().jpgWeb}
                alt=''
                className='
            object-top 
            rounded-xl 
            h-full
            w-full 
            relative'
              />
            ) : (
              ' '
            )}
          </div>
          <h4 className='postMainText bg-gray-600 rounded-lg'>
            {snapshot?.data().post}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default UserPost
