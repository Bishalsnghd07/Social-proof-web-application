import Image from 'next/image'

const Testimonials = () => {
  return (
    <>
      <ul className='justify-start items-start pl-5 lg:pl-0 pr-5 lg:pr-6'>
        <li className='p-9 bg-primary-very-dark-magenta rounded-lg lg:h-[13.2rem]'>
          <figure className='flex flex-wrap gap-4'>
          <Image
              src="/assets/image-colton.jpg"
              alt=''
              width={50}
              height={50}
              className='lg:w-[2.5rem] lg:h-[2.5rem] rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold text-[0.94rem]'>Colton Smith</strong> 
            <span className=' text-primary-soft-pink text-[0.9em]'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-normal text-[0.945rem]'>&quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;</blockquote>
          </figure>
        </li>
      </ul>
      <ul className='justify-start items-start pl-5 lg:pl-2 pr-5 lg:pr-6 pt-4'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-10 lg:h-[13.4rem]'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-anne.jpg"
              alt=''
              width={50}
              height={50}
              className='rounded-full lg:w-[2.5rem] lg:h-[2.5rem]'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold text-[0.94rem]'>Anne Wallace</strong> 
            <span className=' text-primary-soft-pink text-[0.9em]'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-normal text-[0.945rem]'>&quot;Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!&quot;</blockquote>
          </figure>
        </li>
      </ul>

      <ul className='justify-start items-start pl-5 lg:pl-2 pr-5 lg:pr-4 pt-4 lg:pt-[1.9rem]'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-10 lg:h-[13.6rem]'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-irene.jpg"
              alt='Irene Roberts'
              width={50}
              height={50}
              className='rounded-full lg:w-[2.5rem] lg:h-[2.5rem]'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold text-[0.94rem]'>Irene Roberts</strong> 
            <span className=' text-primary-soft-pink text-[0.9em]'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-normal text-[0.945rem]'>&quot;Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.&quot;</blockquote>
          </figure>
        </li>
      </ul>
    </>
  )
}

export default Testimonials