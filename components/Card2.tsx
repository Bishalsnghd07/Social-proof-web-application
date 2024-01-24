import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Card2 = () => {
  const textVariants = {
    initial: {
      x:-500,
      opacity: 0,
    },
    animate: {
      x:0,
      opacity: 1,
      transition:{
        duration:1,
        staggerChildren:0.1,
      }
    },
  }

  return (
    <>
      <motion.div className="flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start lg:pl-[8rem] gap-[1.5rem] pt-[9rem] sm:pt-[5rem] lg:pt-[0rem] pl-[1rem] pr-[1rem]" variants={textVariants} initial="initial" animate="animate">
        <div className='lg:pt-[1rem]'>
        <div className="border bg-primary-very-dark-magenta lg:w-[20.1rem] h-[13rem] sm:w-[94vw] w-[88vw] rounded-lg">
            <div className='grid grid-cols-2 pl-[2rem] pt-[1.5rem] w-[8rem]'>
            <Image
              src="/assets/image-colton.jpg"
              alt='Colton image'
              width={40}
              height={40}
              // layout='fill'
              className='rounded-full'
            />
            <div className='flex flex-col items-start justify-start whitespace-nowrap pl-2'>
            <h1 className='text-white font-bold'>Colton Smith
            </h1>
            <h1 className=' text-primary-soft-pink font-normal group cursor-pointer'>Verified Buyer
            <span className="hidden md:block left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-white to-green-500 transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </h1>
            </div>
            </div>
            <div className="flex items-center justify-center mx-8 my-4 text-white font-medium text-[14px]">&quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;</div>
        </div>
        </div>
        <div className='lg:pt-[1.8rem]'>
        <div className="border bg-primary-very-dark-magenta lg:w-[20.1rem] h-[13rem] sm:w-[94vw] w-[88vw] rounded-lg">
        <div className='grid grid-cols-2 pl-[2rem] pt-[1.5rem] w-[8rem]'>
            <Image
              src="/assets/image-irene.jpg"
              alt='Irene image'
              width={40}
              height={40}
              // layout='fill'
              className='rounded-full'
            />
            <div className='flex flex-col items-start justify-start whitespace-nowrap pl-2'>
            <h1 className=' text-white font-bold'>Irene Roberts</h1>
            <h1 className=' text-primary-soft-pink font-normal cursor-pointer group z-10'>
              Verified Buyer
              <span className="hidden md:block left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-white to-green-500 transition-all ease-in-out duration-500 group-hover:w-full"></span>
              </h1>
            </div>
            </div>
            <div className="flex items-center justify-center mx-8 my-4 text-white font-medium text-[14px]">&quot;Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.&quot;</div>
        </div>
        </div>
        <div className='lg:pt-[2.6rem]'>
        <div className="border bg-primary-very-dark-magenta lg:w-[20.1rem] h-[13rem] sm:w-[94vw] w-[88vw] rounded-lg">
        <div className='grid grid-cols-2 pl-[2rem] pt-[1.5rem] w-[8rem]'>
            <Image
              src="/assets/image-anne.jpg"
              alt='Anne image'
              width={40}
              height={40}
              // layout='fill'
              className='rounded-full'
            />
            <div className='flex flex-col items-start justify-start whitespace-nowrap pl-2'>
            <h1 className=' text-white font-bold'>Anne Wallace</h1>
            <h1 className=' text-primary-soft-pink font-normal cursor-pointer group z-10'>
              Verified Buyer
              <span className="hidden md:block left-0 bottom-0 h-1 w-0 bg-gradient-to-r from-orange-500 via-white to-green-500 transition-all ease-in-out duration-500 group-hover:w-full"></span>
              </h1>
            </div>
            </div>
            <div className="flex items-center justify-center mx-8 my-4 text-white font-medium text-[14px]">&quot;Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!&quot;</div>
        </div>
        </div>
      </motion.div>
    </>
  )
}

export default Card2