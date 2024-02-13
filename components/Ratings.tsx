import React from 'react'
import Icon from './Icon/icon'

const Ratings = () => {
  return (
    <div>
    <section>
      <article className='pl-5 lg:pl-[1.6rem] pr-5 pt-2 lg:pt-[2.6rem]'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-[0.84rem] gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[29.4rem] lg:pr-16 rounded-lg'>
      <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
      </div>
    <p className='text-center text-primary-very-dark-magenta text-lg font-semibold'>Rated 5 Stars in Reviews</p>
    </div>
      </article>
    </section>

    <section>
      <article className='pl-5 lg:pl-[3.8rem] pr-5 pt-5 lg:pt-[1.18rem]'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-[0.84rem] gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[29.4rem] lg:pl-1 lg:pr-6 rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-center text-primary-very-dark-magenta text-lg font-semibold'>Rated 5 Stars in Report Guru</p>
    </div>
      </article>
    </section>
    
     <section>
      <article className='pl-5 lg:pl-[5.8rem] pr-5 pt-5 lg:pt-[1.18rem]'>
    <div className='flex flex-col lg:flex-row bg-neutral-light-grayish-magenta p-[0.82rem] gap-2 lg:gap-6 justify-center items-center w-full lg:max-w-[29.4rem] lg:pl-1 lg:pr-6 rounded-lg'>
    <div className='flex flex-wrap gap-2'>
          <Icon icon="star" 
          aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
          <Icon icon="star" aria-hidden="true" />
    </div>
    <p className='text-center text-primary-very-dark-magenta text-lg font-semibold'>Rated 5 Stars in BestTech</p>
    </div>
      </article>
    </section>
  </div>
  )
}

export default Ratings