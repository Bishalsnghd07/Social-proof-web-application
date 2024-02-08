import React from 'react'
import Icon from './Icon/icon'

const Ratings = () => {
  return (
    <div>
    <ul>
      <li className='pl-5 lg:pl-[4.4rem] pr-5 pt-2 lg:pt-[1.8rem]'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-4 gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[24rem] lg:pl-1 lg:pr-6 rounded-lg'>
      <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
      </div>
    <p className='text-center text-primary-very-dark-magenta text-sm font-bold'>Rated 5 Stars in Reviews</p>
    </div>
      </li>
    </ul>

    <ul>
      <li className='pl-5 lg:pl-[6.4rem] pr-5 pt-5'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-4 gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[24rem] lg:pl-1 lg:pr-6 rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-center text-primary-very-dark-magenta text-sm font-bold'>Rated 5 Stars in Report Guru</p>
    </div>
      </li>
    </ul>
    
     <ul>
      <li className='pl-5 lg:pl-[8.4rem] pr-5 pt-5'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-4 gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[24rem] lg:pl-1 lg:pr-6 rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-center text-primary-very-dark-magenta text-sm font-bold'>Rated 5 Stars in BestTech</p>
    </div>
      </li>
    </ul>
  </div>
  )
}

export default Ratings