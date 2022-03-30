//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../index'
//back-end
import { useState } from 'react'

function WordOfTheDay ({ id, word, type, meaning }) {
  const [showWord, setShowWord] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowWord(true)}
        className='
    grid
    max-w-xl
    w-[310px]
    cursor-pointer
    space-y-5
    place-items-center
    p-12
    bg-blue-400
    rounded-xl
    '
      >
        <h2
          className='
      text-xl 
      font-google-sans 
      text-gray-50 
      font-normal'
        >
          {word}
        </h2>
      </div>
      <Modal
        size='regular'
        active={showWord}
        toggler={() => setShowWord(false)}
      >
        <ModalHeader toggler={() => setShowWord(false)}>Word</ModalHeader>
        <ModalBody>
          <p className='text-base leading-relaxed text-gray-600 font-normal'>
            I always felt like I could do anything. That’s the main thing people
            are controlled by! Thoughts- their perception of themselves! They're
            slowed down by their perception of themselves. If you're taught you
            can’t do anything, you won’t do anything. I was taught I could do
            everything.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button
            color='red'
            buttonType='link'
            onClick={e => setShowWord(false)}
            ripple='dark'
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default WordOfTheDay
