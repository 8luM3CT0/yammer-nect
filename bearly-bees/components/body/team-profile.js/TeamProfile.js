//front-end
//back-end
function TeamProfile ({ pic, name, nickname, job, job_2, job_3 }) {
  return (
    <div
      className='
    grid 
    place-items-center 
    space-y-4 
    bg-gray-700 
    hover:bg-gray-600
    text-gray-50
    cursor-pointer
    transform
    transition
    duration-300
    ease-in-out
    p-5
    '
    >
      <img
        src={pic}
        alt=''
        className='
      max-h-[420px] 
      rounded-lg 
      shadow-lg'
      />
      <h2
        className='
      text-xl 
      font-font-smooch 
      font-semibold
      underline
      space-x-4
      '
      >
        {name}
      </h2>
      <h3 className='text-lg font-font-smooch font-normal'>{nickname}</h3>
      <h4 className='text-base font-font-smooch font-light'> - {job}</h4>
      <h4 className='text-base font-font-smooch font-light'> - {job_2}</h4>
      <h4 className='text-base font-font-smooch font-light'> - {job_3}</h4>
    </div>
  )
}

export default TeamProfile
