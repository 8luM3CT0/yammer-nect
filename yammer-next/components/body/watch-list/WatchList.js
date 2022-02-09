//front-end
//back-end
function WatchList ({
  symbol,
  company,
  change,
  percentage_change,
  high_price,
  low_price,
  current_price,
  volume,
  market_cap
}) {
  return (
    <div
      className='
        w-full
        flex-grow
        justify-evenly 
        text-green-400 
        font-robot-slab 
        font-light 
        text-lg
        lg:flex
        grid
        h-[80px]
        px-4 
        items-center
        cursor-pointer
        hover:bg-blue-400
        rounded-xl
        transform
        transition
        hover:scale-105
        duration-300
        ease-out
        '
    >
      <div className='lg:flex lg:items-center lg:space-x-4 grid '>
        <h1 className='text-2xl font-normal'>{symbol}</h1>
        <h2 className='text-xl font-semibold'>{company}</h2>
      </div>
      <div className='flex items-center text-center space-x-3'>
        <h4 className='watchListDetails font-semibold text-2xl '>
          {current_price}
        </h4>
        <h3 className='watchListDetails'> {change}</h3>
        <h4 className='watchListDetails'>{percentage_change}</h4>
        <h4 className='watchListDetails'>{volume} </h4>
        <h4 className='watchListDetailsHidden'>
          {low_price} - {high_price}
        </h4>
        <h4 className='watchListDetailsHidden'>{market_cap} </h4>
      </div>
    </div>
  )
}

export default WatchList
