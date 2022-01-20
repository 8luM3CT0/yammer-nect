//front-end
import Link from 'next/link'
//back-end
import { useState, useEffect } from 'react'
import { getCategories } from '../../../services'

function Categories () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(newCategories => setCategories(newCategories))
  }, [])

  return (
    <div className='bg-gray-800 shadow-lg rounded-xl p-8 pb-14 mb-8'>
      <h3 className='text-xl text-blue-300 mb-8 font-semibold font-google-sans border-b pb-4'>
        Categories
      </h3>
      {categories.map(category => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span
            className='
          cursor-pointer 
          text-orange-400 
          font-google-sans 
          font-semibold 
          block 
          pb-3 
          mb-3'
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories
