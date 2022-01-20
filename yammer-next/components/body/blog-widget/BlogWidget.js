//front-end
import moment from 'moment'
import Link from 'next/link'
//back-end
import { useState, useEffect } from 'react'

import { getRecentPosts, getSimilarPost } from '../../../services'

function BlogWidget ({ categories, slug }) {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(category, slug).then(result => setRelatedPosts(result))
    } else {
      getRecentPosts().then(result => setRelatedPosts(result))
    }
  }, [slug])

  console.log('Related posts >>', relatedPosts)

  return (
    <div className='bg-gray-800 shadow-lg rounded-xl p-8 mb-8'>
      <h3 className='text-xl text-blue-300 mb-8 font-semibold font-google-sans border-b pb-4'>
        {slug ? 'Related Post' : 'Recent Posts'}
      </h3>
      {relatedPosts.map(post => (
        <div
          key={post.title}
          className='flex space-x-3 items-center w-full mb-4'
        >
          <div className='w-16 flex-none'>
            <img
              src={post.featuredImage.url}
              alt={post.title}
              className='
              h-[40px] 
              w-[90px] 
              align-middle 
              rounded-3xl'
            />
          </div>
          <div className='flex-grow'>
            <p className='text-gray-400 font-google-sans font-xs font-light'>
              {moment(post.createdAt).format('MM/DD/YYYY')}
            </p>
            <Link
              href={`/post/${post.slug}`}
              key={post.title}
              className='text-base'
            >
              <h4 className='text-orange-400 font-google-sans font-normal'>
                {post.title}
              </h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogWidget
