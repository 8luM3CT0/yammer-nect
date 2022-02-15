//front-end
import {
  Button,
  Icon,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../../index'
//back-end
import { useState } from 'react'
function WatchList ({
  symbol,
  company,
  change,
  percentage_change,
  high_price,
  low_price,
  current_price,
  volume,
  market_cap,
  day_high,
  day_low,
  average50,
  average200,
  averageVol
}) {
  const [showMore, setShowMore] = useState(false)

  const numFormatter = num => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'M'
      : Math.sign(num) * Math.abs(num)
  }

  const countFormatter = num => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K' // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M' // convert to M for number from > 1 million
    } else if (num > 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B'
    } else if (num > 1000000000000) {
      return (num / 1000000000000).toFixed + 'T'
    } else if (num < 900) {
      return num // if value < 1000, nothing to do
    }
  }

  return (
    <>
      <div
        onClick={e => setShowMore(true)}
        className='
        w-full
        flex-grow
        justify-between
        text-indigo-200 
        font-robot-slab 
        font-light 
        text-lg
        lg:flex
        grid
        h-[120px]
        p-4
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
          <h2 className='text-xl font-semibold w-[120px] truncate'>
            {company}
          </h2>
        </div>
        <div className='flex items-center text-center space-x-3'>
          <h4 className='watchListDetails font-semibold text-2xl '>
            {current_price}
          </h4>
          <h3 className='watchListDetails'> {change.toFixed(2)}</h3>
          <h4 className='watchListDetails'>{percentage_change.toFixed(2)}</h4>
          {volume ? (
            <h4 className='watchListDetails'>{countFormatter(volume)} </h4>
          ) : (
            ' '
          )}
          <h4 className='watchListDetailsHidden'>
            {low_price} - {high_price}
          </h4>
          {market_cap ? (
            <h4 className='watchListDetailsHidden'>
              {countFormatter(market_cap)}{' '}
            </h4>
          ) : (
            ' '
          )}
        </div>
      </div>
      <Modal active={showMore} size='lg' toggler={() => setShowMore(false)}>
        <ModalHeader toggler={() => setShowMore(false)}>
          <h2 className='text-3xl font-robot-slab p-[30px] text-green-400 font-bold'>
            {symbol} - {company}
          </h2>
        </ModalHeader>
        <ModalBody>
          <div className='grid p-[40px] space-y-4 place-items-center'>
            <h2 className='text-blue-200 text-2xl font-robot-slab font-normal'>
              Stock prices
            </h2>
            <h3 className='text-xl font-robot-slab text-green-500 font-semibold'>
              Price: ${current_price}
            </h3>
            <div className='flex items-center space-x-3'>
              {/**day high and day low */}
              <div className='grid space-y-2 '>
                <h4 className='text-lg font-robot-slab text-blue-300 font-normal'>
                  Day high: ${day_high.toFixed(2)}
                </h4>
                <h4 className='text-lg font-robot-slab text-red-300 font-normal'>
                  Day low: ${day_low}
                </h4>
              </div>
              {/**year high and year low */}
              <div className='grid space-y-2 '>
                <h4 className='text-lg font-robot-slab text-blue-500 font-normal'>
                  Year high: ${high_price}
                </h4>
                <h4 className='text-lg font-robot-slab text-red-500 font-normal'>
                  Year low: ${low_price}
                </h4>
              </div>
            </div>
            <div className='grid space-y-2 place-items-center'>
              <h3 className='text-2xl font-normal font-robot-slab text-blue-200'>
                Price Average
              </h3>
              <span
                className='
              text-lg 
              text-green-600 
              grid 
              font-robot-slab 
              font-semibold'
              >
                {average50 && (
                  <h4>Price past 50 days: {average50.toFixed(2)}</h4>
                )}
                {average200 && (
                  <h4>Price past 50 days: {average200.toFixed(2)}</h4>
                )}
              </span>
            </div>
            <h3 className='text-2xl font-normal font-robot-slab text-blue-200'>
              Change from previous
            </h3>
            <div className='flex items-center space-x-3 text-gray-600'>
              <h2 className='text-lg font-robot-slab font-semibold'>
                Change: {change.toFixed(2)}
              </h2>
              <h2 className='text-lg font-robot-slab font-semibold'>
                Change (Percentage) :{percentage_change.toFixed(2)}
              </h2>
            </div>
            <h4 className='text-xl font-robot-slab font-semibold text-blue-400'>
              Volume: {countFormatter(volume)}
            </h4>
            <h5 className='text-xl font-robot-slab font-semibold text-blue-400'>
              Average volume: {countFormatter(averageVol)}
            </h5>
            <h3 className='text-xl font-robot-slab font-semibold text-blue-400'>
              Market cap: {countFormatter(market_cap)}
            </h3>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowMore(false)}
            color='red'
            buttonType='filled'
            size='regular'
            iconOnly={false}
            block={false}
            rounded={false}
            ripple='light'
          >
            <Icon name='close' />
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default WatchList
