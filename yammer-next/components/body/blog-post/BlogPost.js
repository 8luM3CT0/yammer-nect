//front-end
import moment from 'moment'
import Link from 'next/link'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
//back-end

function BlogPost ({ post }) {
  return (
    <div className='blogComponent'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='blogSubjectImage'
        />
      </div>
      <h1
        className='blogTitle
        '
      >
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='blogExcerpt'>
        <div className='flex items-center space-x-3 justify-center blogExLarge'>
          <img
            src={post.author.profilePicture.url}
            alt={post.author.name}
            className='
            h-10
            w-10
            border-blue-400 
            border-2
            align-middle 
            rounded-3xl'
          />
          <p
            className='
          text-lg 
          inline 
          align-middle 
          font-google-sans 
          text-orange-400 
          font-semibold'
          >
            {post.author.name}
          </p>
        </div>
        <div className='font-light space-x-3 text-gray-300'>
          <CalendarTodayIcon />
          <span>{moment(post.createdAt).format('MMM/DD/YYYY')}</span>
        </div>
      </div>
      <p
        className='
      text-orange-500 
      text-base 
      text-center 
      font-light
    postExcerptText'
      >
        {post.excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/blogPost/${post.slug}`}>
          <span
            className='
          transition 
          cursor-pointer
          transform 
          duration-500 
          hover:-translate-y-1 
          inline-block 
          bg-blue-300 
          p-2 
          rounded-3xl 
          font-normal 
          text-white'
          >
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
