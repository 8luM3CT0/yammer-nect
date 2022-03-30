//front-end
import Head from 'next/head'
import {
  MainHeader,
  HomeFeed,
  Button,
  Icon,
  DailyWord,
  DayWord,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from '../components/'
//back-end
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { creds, provider, store } from '../backend_services/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollection } from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import Axios from 'axios'
import sample_word from '../backend_services/sample_word'

export default function Home ({
  firstData,
  secondData,
  thirdData,
  fourthData
}) {
  const [addWord, setAddWord] = useState(false)
  const [word, setWord] = useState('')
  const [pronounciation, setPronounciation] = useState('')
  const [type, setType] = useState('')
  const [meaning, setMeaning] = useState('')
  const [user] = useAuthState(creds)
  //for word search
  const [data, setData] = useState('')
  const [searchWord, setSearchWord] = useState('')

  const addWordToDB = e => {
    e.preventDefault()

    if (!word && !pronounciation && !type && !meaning) return

    store
      .collection('userAdds')
      .doc(user.email)
      .collection('words')
      .add({
        newWord: word,
        newPronounce: pronounciation,
        newType: type,
        newMeaning: meaning,
        email: user?.email,
        displayName: user?.displayName,
        photoURL: user?.photoURL
      })

    store.collection('words').add({
      word: word,
      pronounce: pronounciation,
      wordType: type,
      meaning: meaning,
      email: user?.email,
      username: user?.displayName,
      photoURL: user?.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setWord('')
    setPronounciation('')
    setType('')
    setMeaning('')
    setAddWord(false)
  }

  const [wordSnapshot] = useCollection(store.collection('words'))

  function getMeaning () {
    Axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${searchWord}`
    ).then(response => {
      setData(response.data[0])
    })
    setSearchWord('')
  }

  function playAudio () {
    let audio = new Audio(data.phonetics[0].audio)
    audio.play()
  }

  return (
    <>
      <div className='bg-gray-100 h-screen overflow-hidden pb-[240px]'>
        <Head>
          <title>Blume-Net</title>
          <link
            rel='icon'
            href='https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/272327113_4737476893035391_5246286791413601509_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeECrnO_8dXVAWxCpCk_RmpH7jTvern-F6PuNO96uf4Xo7_yjIJ-5o2CMr-603hL1WNa0Jl80SHf-RzZV6SIAqj5&_nc_ohc=3ztfyHPMq2MAX9eglgo&tn=LgHqoGaPnVNjG6Fp&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&oh=00_AT9QVTclQ2qQduyjB1X8cZV7lXR6v7K4jnKetPgNzmthcg&oe=61FEF020'
          />
        </Head>
        <MainHeader />
        <main
          className='
        h-screen 
        bg-gray-50 
        max-w-7xl
        mx-auto
        overflow-y-scroll
        scrollbar-hide
        pb-[240px]
        '
        >
          {/**homeFeed start */}
          <div
            className='
    homeFeedDiv
    '
          >
            <div
              className='
      grid 
      space-y-7 
      place-items-center'
            >
              <h2
                className='
        mx-auto 
        text-xl 
        font-google-sans 
        font-normal
        text-red-500
        '
              >
                Hello / 你好!
              </h2>
              <h2
                className='
        mx-auto 
        text-2xl 
        font-google-sans 
        font-normal
        text-red-500
        '
              >
                Welcome to HokkienPH
              </h2>
            </div>
            <div
              className='inputBox
      '
            >
              <input
                type='text'
                placeholder='Search....'
                onChange={e => {
                  setSearchWord(e.target.value)
                }}
                className='
        focus:outline-none 
        border-0 
        bg-transparent 
        flex-grow
        w-full 
        text-gray-50
        placeholder-gray-50
        '
              />

              <Button
                onClick={() => getMeaning()}
                color='white'
                buttonType='link'
                size='lg'
                iconOnly={true}
                rounded={true}
                block={false}
                ripple='dark'
              >
                <Icon name='saved_search' size='lg' />
              </Button>
            </div>
            {data && (
              <div
                className='
        grid 
        p-[30px] 
        max-w-xl
        space-y-5
        '
              >
                <span
                  className='
          text-red-400 
          font-google-sans 
          text-xl 
          font-semibold 
          flex
          space-x-5 
          items-center'
                >
                  <h2
                    className='
            hover:underline 
            hover:animate-pulse 
            transform 
            transition 
            duration-300 
            ease-in-out'
                  >
                    {data.word}
                  </h2>
                  <Button
                    color='red'
                    buttonType='link'
                    size='regular'
                    iconOnly={true}
                    rounded={true}
                    block={false}
                    ripple='dark'
                  >
                    <Icon name='mic' />
                  </Button>
                </span>
                <h4
                  className='
          text-xl 
          font-google-sans 
          font-normal 
          text-red-500'
                >
                  Parts of speech:
                </h4>
                <p className='text-lg font-google-sans text-red-300'>
                  {data.meanings[0].partOfSpeech}
                </p>
                <h4
                  className='
          text-xl
          font-google-sans 
          font-normal 
          text-red-500'
                >
                  Definition:
                </h4>
                <p className='text-lg font-google-sans text-red-300'>
                  {data.meanings[0].definitions[0].definition}
                </p>
                <h4
                  className='
          text-xl
          font-google-sans 
          font-normal 
          text-red-500'
                >
                  Example:
                </h4>
                <p className='text-lg font-google-sans text-red-300'>
                  {data.meanings[0].definitions[0].example}
                </p>
              </div>
            )}
          </div>
          {/**HomeFeed End */}
          <div className='grid place-items-center space-y-5 pb-24'>
            <h2 className='text-xl text-red-500 font-google-sans font-normal'>
              Or, add something to the databanks
            </h2>
            <Button
              onClick={e => setAddWord(true)}
              disabled={user?.displayName !== 'Reaper IFF'}
              color='blue'
              buttonType='filled'
              size='regular'
              rounded={false}
              iconOnly={false}
              block={false}
              ripple='dark'
            >
              <Icon name='add' />
              <h2 className='text-lg capitalize font-robot-slab font-semibold'>
                Add something
              </h2>
            </Button>
          </div>
          <div className='wordDiv'>
            {wordSnapshot?.docs.slice(6, 10).map(doc => (
              <DayWord key={doc.id} id={doc.id} word={doc.data().word} />
            ))}
          </div>
        </main>
      </div>
      <Modal active={addWord} size='lg' toggler={() => setAddWord(false)}>
        <ModalHeader toggler={() => setAddWord(false)}>
          <h2
            className='
        font-google-sans 
        font-semibold 
        text-lg 
        text-gray-900
         animate-pulse'
          >
            Add a new word / 添加一个新词
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className='grid space-y-5 p-20'>
            <h2 className='text-xl font-semibold text-gray-800'>Word / 字</h2>
            <Input
              type='text'
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Type something...'
              className='mx-auto'
              value={word}
              onChange={e => setWord(e.target.value)}
            />
            <h2 className='text-xl font-semibold text-gray-800'>
              Pronounciation / 发音
            </h2>
            <Input
              type='text'
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Pronounciation: '
              className='mx-auto'
              value={pronounciation}
              onChange={e => setPronounciation(e.target.value)}
            />
            <h2 className='text-xl font-semibold text-gray-800'>Type / 类</h2>
            <Input
              type='text'
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Type of word: '
              className='mx-auto'
              value={type}
              onChange={e => setType(e.target.value)}
            />
            <h2 className='text-xl font-semibold text-gray-800'>
              Meaning / 含义
            </h2>
            <Input
              type='text'
              color='blueGray'
              size='lg'
              outline={false}
              placeholder='Meaning: '
              className='mx-auto'
              value={meaning}
              onChange={e => setMeaning(e.target.value)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setAddWord(false)}
            ripple='dark'
          >
            Close
          </Button>

          <Button color='green' onClick={addWordToDB} ripple='light'>
            Add
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
