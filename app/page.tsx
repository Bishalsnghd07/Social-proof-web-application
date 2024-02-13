"use client";

import Image from 'next/image'
import Ratings from '@/components/Ratings'
import Testimonials from '@/components/Testimonials'
import { motion } from 'framer-motion'

export default function Home() {
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
    <main className='flex min-h-screen  justify-center items-center bg-neutral-white overflow-hidden'>
      <Image
          src="/assets/bg-pattern-top-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 w-[100%] h-[32%] md:w-[36%] md:h-[45%] left-0"
          aria-hidden="true"
          loading='eager'
        />
        <div className='z-10'>
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[74rem]" variants={textVariants} initial="initial"
        animate="animate">
          <article className='justify-center items-center pt-16 lg:pt-3 lg:pl-6 p-5 lg:p-0'>
          <h2 className='text-4xl lg:text-5xl text-primary-very-dark-magenta font-sans font-bold text-center lg:text-left lg:max-w-[25.8rem]'>10,000+ of our users love our products.
          </h2>
          <p className=' font-medium pt-4 lg:pt-6 text-lg text-[#a777a5] text-center lg:text-left lg:max-w-[29rem] leading-6'>
          We only provide great <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span className="relative text-white">products</span>
  </span> combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
          </article>
          <Ratings />
          </motion.div>
          <motion.div className='grid grid-cols-1 lg:grid-cols-3 pt-12 lg:pt-[3.6rem] lg:pl-6 lg:pr-[0.7rem] lg:max-w-[74rem] pb-8 lg:pb-0' variants={textVariants} initial="initial"
        animate="animate">
          <Testimonials />
        </motion.div>
        </div>
      <Image
          src="/assets/bg-pattern-bottom-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute bottom-0 w-[74%] h-[78%] right-0 hidden lg:block"
          aria-hidden="true"
          loading='eager'
        />
     </main>
  )
}