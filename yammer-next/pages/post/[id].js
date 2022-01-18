//front-end
import Head from 'next/head'
import PostHeader from '../../components/header/post-header/PostHeader'
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
        h-screen
        '
    >
      <Head>
        <title>Post by {snapshot?.data()?.name}</title>
      </Head>

      <PostHeader />
      <div className='mainDiv'>
        <div
          className='
        postDiv
        postDim 
        bg-gray-800 
        p-[90px] 
        mx-auto
        rounded-lg
        z-50
        sticky
        top-0
        flex-[0.5]
        mt-6
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
              border-4 
              border-blue-300'
              />
              <h4
                className='
              font-semibold 
              font-robot-slab 
              text-lg 
              text-blue-500'
              >
                {snapshot?.data().name}
              </h4>
            </div>
            {snapshot?.data().timestamp ? (
              <h5
                className='
              desktopDiv
              text-sm 
              font-thin 
              font-google-sans 
              text-gray-500'
              >
                1/17/2022, 8:22 pm
              </h5>
            ) : (
              <h5
                className='
              desktopDiv
              text-sm
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
            p-5 
            rounded-xl 
            h-full 
            w-full 
            relative'
            />
          ) : (
            ' '
          )}
          <div
            className='
          overflow-y-scroll 
          scrollbar-hide 
          h-[110px] 
          line-clamp-3 
          p-4
          pb-[90px]
          '
          >
            <h4
              className='
          text-lg 
          font-normal 
          font-robot-slab 
          pb-[30px]
          text-blue-400'
            >
              {snapshot?.data().post}
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserPost
