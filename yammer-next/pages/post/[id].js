//front-end
import Head from 'next/head'
import PostHeader from '../../components/header/post-header/PostHeader'
import moment from 'moment'
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
          overflow-hidden
          scrollbar-hide
        pb-[200px]
        '
    >
      <Head>
        <title>Post by {snapshot?.data()?.name}</title>
      </Head>

      <PostHeader />
      <div className='postMainArea'>
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
          {snapshot?.data().articleImage ? (
            <img
              src={snapshot?.data().articleImage}
              alt=''
              className='
            mt-10
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
            mt-10
            object-top 
            rounded-xl 
            h-full
            w-full 
            relative'
            />
          ) : (
            ' '
          )}
          <h4 className='postMainText'>{snapshot?.data().post}</h4>
        </div>
      </div>
    </div>
  )
}

export default UserPost
