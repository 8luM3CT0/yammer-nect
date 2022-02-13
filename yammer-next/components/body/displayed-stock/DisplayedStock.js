//front-end
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Icon
} from '../../index'
//back-end
import { useState } from 'react'
function DisplayedStock ({
  title,
  symbol,
  currentPrice,
  companyLogo,
  industry,
  website,
  workAddress,
  city,
  state,
  zip,
  compDesc
}) {
  const [showProfile, setShowProfile] = useState(false)

  return (
    <>
      <div
        onClick={e => setShowProfile(true)}
        className='
    h-[380px] 
    bg-teal-500 
    flex-grow 
    grid 
    p-10
    rounded-xl
    space-y-3
    transform
    transition
    duration-300
    hover:bg-teal-400
    cursor-pointer
    ease-in-out
    '
      >
        <img
          src={companyLogo}
          alt=''
          className='
        h-24 
        w-24 
        rounded-xl 
        mx-auto 
        align-middle'
        />
        <h2 className='text-stone-200 text-2xl font-robot-slab font-normal'>
          {title} - {symbol}
        </h2>
        <h3 className='text-stone-200 text-xl font-robot-slab font-normal'>
          Price: {currentPrice}
        </h3>
        <h4 className='text-stone-200 text-lg font-robot-slab font-semibold'>
          Industry type: {industry}
        </h4>
        <a
          href={website}
          className='text-stone-100 text-base font-robot-slab font-bold'
        >
          Website: {website}
        </a>
      </div>
      <Modal
        active={showProfile}
        size='lg'
        toggler={() => setShowProfile(false)}
      >
        <ModalHeader toggler={() => setShowProfile(false)}>
          Company profile
        </ModalHeader>
        <ModalBody>
          <div className='grid p-[40px] place-items-center space-y-4'>
            <img
              src={companyLogo}
              alt=''
              className='
            h-24 
            w-24 
            rounded-xl 
            mx-auto 
            align-middle'
            />
            <h1 className='text-stone-700 font-robot-slab font-semibold text-xl'>
              {title} - {symbol}
            </h1>
            <h2 className='text-stone-700 font-robot-slab font-semibold text-xl'>
              Industry type: {industry}
            </h2>
            <h2 className='text-stone-600 font-robot-slab font-semibold text-lg'>
              Stock price: {currentPrice}
            </h2>
            <span
              className='
            text-stone-600 
            font-robot-slab 
            font-semibold 
            text-base
            lg:flex
            lg:items-center
            grid
            lg:space-x-2
            space-x-0
            '
            >
              <h4>{workAddress}</h4>
              <h4>{city}</h4>
              <h4>{state}</h4>
              <h4>{zip}</h4>
            </span>
            <div
              className='
            h-[210px] 
            overflow-y-scroll 
            scrollbar-hide 
            w-[240px] 
            text-blue-400'
            >
              {/**company description */}
              <h4 className='font-robot-slab text-sm font-semibold text-stone-500'>
                {compDesc}
              </h4>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={e => setShowProfile(false)}
            buttonType='link'
            color='red'
            size='regular'
            iconOnly={false}
            rounded={false}
            block={false}
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

export default DisplayedStock
