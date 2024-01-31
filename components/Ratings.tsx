import React from 'react'
import Icon from './Icon/icon'

const Ratings = () => {
  return (
    <div>
    <ul>
      <li className='pt-6 lg:pt-16'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-3 gap-2 lg:gap-4 justify-center items-center lg:max-w-[22rem] rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-center text-primary-very-dark-magenta text-sm font-bold'>Rated 5 stars in reviews</p>
    </div>
      </li>
    </ul>
    <div>
      <ul>
        <li className='pt-4 lg:pl-10'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-3 gap-2 lg:gap-4 justify-center items-center lg:max-w-[22rem] rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-primary-very-dark-magenta text-sm font-bold text-center'>Rated 5 stars in reviews</p>
    </div>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li className='pt-4 lg:pl-20'>
        <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-3 gap-2 lg:gap-4 justify-center items-center lg:max-w-[22rem] rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-primary-very-dark-magenta text-sm font-bold text-center'>Rated 5 stars in reviews</p>
    </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Ratings