//front-end
import React from 'react'
import moment from 'moment'
//back-end
import parse from 'html-react-parser'
import { useEffect, useState } from 'react'
import { getComments } from '../../../services'
import { comment } from 'postcss'

function Comments ({ slug }) {
  const [comments, setComments] = useState([])

  useEffect(() => {
    getComments(slug).then(result => setComments(result))
  }, [])

  return (
    <>
      {comment.length > 0 && (
        <div
          className='
      bg-gray-800 
      shadow-lg 
      rounded-lg 
      p-8 
      pb-12 
      mb-8'
        >
          <h3 className='text-blue-300 text-xl font-semibold mb-8 borber-b pb-4'>
            {comments.length} Comments
          </h3>
          {comments.map(comment => (
            <div
              key={comment.createdAt}
              className='border-b border-blue-300 mb-4 pb-4'
            >
              <p className='mb-4 text-blue-400 font-robot-slab'>
                <span className='font-semibold'>{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('MMM ,DD ,YYYY')}
              </p>
              <p className='text-orange-400 whitespace-pre-line font-google-sans w-full font-light'>
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default Comments
