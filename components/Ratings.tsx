import React from 'react'
import Icon from './Icon/icon'

const Ratings = () => {
  return (
    <div>
    <ul>
      <li className='pl-5 lg:pl-[3.4rem] pr-5 pt-5 lg:pt-[6.30rem]'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-3 gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[24rem] lg:pl-1 lg:pr-6 rounded-lg'>
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
        <li className='pl-5 pr-5 pt-4 lg:pt-6 lg:pl-[5rem]'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-4 lg:pl-6 lg:pr-6 gap-2 lg:gap-4 justify-center items-center w-full lg:max-w-[25rem] rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-primary-very-dark-magenta text-sm font-bold text-center'>Rated 5 stars in Report Guru</p>
    </div>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li className='pl-5 pr-5 pt-4 lg:pt-6 lg:pl-[7rem]'>
        <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-4 gap-2 lg:gap-4 justify-center items-center lg:pl-6 lg:pr-6 lg:max-w-[25rem] rounded-lg w-full'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-primary-very-dark-magenta text-sm font-bold text-center'>Rated 5 stars in BestTech</p>
    </div>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Ratings