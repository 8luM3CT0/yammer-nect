//front-end
import React from 'react'
import moment from 'moment'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
//back-end

function PostDetail ({ post }) {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text
    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>
      }
    }
    switch (type) {
      case 'heading-three':
        return (
          <h3
            key={index}
            className='text-xl text-blue-400 font-robot-slab font-semibold mb-4'
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        )
      case 'paragraph':
        return (
          <p key={index} className='mb-8 text-blue-400 font-robot-slab'>
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        )
      case 'heading-four':
        return (
          <h4
            key={index}
            className='text-md text-blue-400 font-robot-slab font-semibold mb-4'
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        )
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        )
      default:
        return modifiedText
    }
  }
  return (
    <div
      className='
    bg-gray-800 
    shadow-lg 
    rounded-lg 
    lg:p-8 
    pb-12 
    mb-8'
    >
      <div
        className='
      relative 
      overflow-hidden
      shadow-md
      mb-6
      '
      >
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-full w-full rounded-t-lg'
        />
      </div>
      <div
        className='
      px-4 
      lg:px-0'
      >
        <div className='flex items-center mb-8 w-full'>
          <div className='flex items-center space-x-3 blogExLarge'>
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
        <h1
          className='
        text-orange-400
        mb-8 
        text-3xl 
        font-semibold 
        font-robot-slab'
        >
          {post.title}
        </h1>
        <div className='overflow-y-scroll scrollbar-hide'>
          {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemIndex) =>
              getContentFragment(itemIndex, item.text, item)
            )
            return getContentFragment(index, children, typeObj, typeObj.type)
          })}
        </div>
      </div>
    </div>
  )
}

export default PostDetail
