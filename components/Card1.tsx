import Image from 'next/image';
import React from 'react';
import { IconVariant } from '@/app/models/types';
import Icon from './Icon/icon';

const Card1 = () => {
   return (
      <div className="flex flex-col w-full gap-4">
        <div className="flex h-[5rem] lg:pl-[2rem] lg:h-[2.8rem] lg:w-[26rem]">
        <div className="flex flex-col lg:flex-row justify-center items-center text-black font-bold text-4xl bg-neutral-light-grayish-magenta rounded-lg pl-4 pr-4 pt-3 lg:pt-0 w-full">
        <div className='flex gap-2'>
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
        </div>
          <span className='flex p-2 lg:p-6 text-primary-very-dark-magenta text-sm justify-center items-center'>Rated 5 stars in reviews</span>
        </div>
        </div>
        <div className="flex h-[5rem] lg:pl-[4rem] lg:h-[2.8rem] lg:w-[28rem]">
        <div className="flex flex-col lg:flex-row justify-center items-center text-black font-bold text-4xl bg-neutral-light-grayish-magenta rounded-lg pt-3 lg:pt-0 w-full">
        <div className='flex gap-2'>
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
            </div>
          <span className='flex p-2 lg:p-6 text-primary-very-dark-magenta text-sm'>Rated 5 stars in Report Guru</span>
        </div>
        </div>
        <div className='flex h-[5rem] lg:pl-[6rem] lg:h-[2.8rem] lg:w-[30rem]'>
        <div className="flex flex-col lg:flex-row justify-center items-center text-black font-bold text-4xl bg-neutral-light-grayish-magenta rounded-lg w-full">
        <div className='flex gap-2'>
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
          <Icon icon="star" />
            </div>
          <span className='flex p-2 lg:p-6 text-primary-very-dark-magenta text-sm'>Rated 5 stars in Best Tech</span>
        </div>
        </div>
       </div>
    
   )
  };
  
  export default Card1;
  
  
  