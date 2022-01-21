//front-end
import React from 'react'
import Button from '@material-tailwind/react/Button'
import Icon from '@material-tailwind/react/Icon'
//back-end
import { useEffect, useRef, useState } from 'react'
import { submitComment } from '../../../services'

function CommentsForm ({ slug }) {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const commentElement = useRef()
  const nameElement = useRef()
  const emailElement = useRef()
  const storeDataElement = useRef()

  useEffect(() => {
    nameElement.current.value = window.localStorage.getItem('name')
    emailElement.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentElement.current
    const { value: name } = nameElement.current
    const { value: email } = emailElement.current
    const { checked: storeData } = storeDataElement.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const commentObj = {
      name,
      email,
      comment,
      slug
    }

    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj).then(res => {
      setShowSuccess(true)
      setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
    })
  }

  return (
    <div
      className='
    bg-gray-800 
    shadow-lg 
    rounded-lg 
    p-8 
    pb-12 
    mb-8'
    >
      <h3
        className='
      text-lg 
      text-blue-300 
      mb-8 
      font-google-sans 
      font-semibold 
      border-b'
      >
        Leave something here
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentElement}
          placholder='Comment here...'
          name='comment'
          className='
        p-4 
        outline-none 
        w-full 
        rounded-lg 
        focus:ring-2 
        focus:ring-gray-400 
        bg-gray-600 
        text-blue-400'
        />
      </div>
      <div className='commentsInput'>
        <input
          type='text'
          ref={nameElement}
          placeholder='Name...'
          name='name'
          className='
        py-2 
        px-4
        outline-none 
        w-full 
        rounded-lg 
        focus:ring-2 
        focus:ring-gray-400 
        bg-gray-600 
        text-blue-400
        '
        />
        <input
          type='text'
          ref={emailElement}
          placeholder='Email...'
          name='email'
          className='
        py-2 
        px-4
        outline-none 
        w-full 
        rounded-lg 
        focus:ring-2 
        focus:ring-gray-400 
        bg-gray-600 
        text-blue-400
        '
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='space-x-2'>
          <input
            ref={storeDataElement}
            type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
          />
          <label
            className='
          text-blue-300 
          text-sm 
          cursor-pointer'
            htmlFor='storeData'
          >
            Save my details for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className='text-red-500 text-xl font-google-sans font-semibold'>
          All fields are required!!
        </p>
      )}
      <div className='mt-8'>
        <Button
          onClick={handleCommentSubmission}
          color='blue'
          size='regular'
          iconOnly={false}
          block={false}
          rounded={false}
          ripple='dark'
          className='space-x-2'
        >
          <Icon name='comment' />
          <h4
            className='
          text-blue-50 
          font-google-sans 
          font-semibold 
          capitalize'
          >
            Comment
          </h4>
        </Button>
        {showSuccess && (
          <span
            className='
        text-xl 
        text-blue-400 
        font-semibold 
        font-robot-slab'
          >
            Comment successfully posted
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentsForm
