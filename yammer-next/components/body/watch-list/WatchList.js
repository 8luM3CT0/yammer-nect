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
  market_cap
}) {
  const [showMore, setShowMore] = useState(false)

  const numFormatter = num => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'M'
      : Math.sign(num) * Math.abs(num)
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
            <h4 className='watchListDetails'>{numFormatter(volume)} </h4>
          ) : (
            ' '
          )}
          <h4 className='watchListDetailsHidden'>
            {low_price} - {high_price}
          </h4>
          {market_cap ? (
            <h4 className='watchListDetailsHidden'>
              {numFormatter(market_cap)}{' '}
            </h4>
          ) : (
            ' '
          )}
        </div>
      </div>
      <Modal active={showMore} size='lg' toggler={() => setShowMore(false)}>
        <ModalHeader toggler={() => setShowMore(false)}>
          Stock details
        </ModalHeader>
        <ModalBody>
          <div className='grid p-[40px] place-items-center'>
            <p className='text-base leading-relaxed text-gray-600 font-normal'>
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They're slowed down by their perception of themselves.
              If you're taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </p>
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
