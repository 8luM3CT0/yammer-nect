//front-end
import { Button, Icon, Input } from '../index'
//back-end
import { useState } from 'react'
import Axios from 'axios'

function HomeFeed () {
  //initialStates
  const [data, setData] = useState('')
  const [searchWord, setSearchWord] = useState('')

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
          Welcome to HokkienHub
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
  )
}

export default HomeFeed
