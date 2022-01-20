//front-end
//back-end

function Author ({ author }) {
  return (
    <div
      className='
    text-center 
    mt-20 
    mb-8 
    p-12 
    relative 
    rounded-lg 
    bg-gray-900 
    bg-opacity-20'
    >
      <div className='absolute left-0 right-0 -top-14'>
        <img
          src={author.profilePicture.url}
          alt={author.name}
          className='
        h-[100px] 
        w-[80px] 
        rounded-3xl 
        align-middle 
        border-2
        border-blue-400
        '
        />
      </div>
      <h3
        className='
      text-blue-400 
      my-4 
      text-xl 
      font-bold 
      font-robot-slab'
      >
        {author.name}
      </h3>
      <p
        className='
      text-blue-500
      text-lg
      '
      >
        {author.bio}
      </p>
    </div>
  )
}

export default Author
