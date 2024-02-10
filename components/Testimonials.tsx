import Image from 'next/image'

const Testimonials = () => {
  return (
    <>
      <ul className='justify-start items-start pl-5 lg:pl-0 lg:pt-[0.22rem] pr-5 lg:pr-4'>
        <li className=' bg-primary-very-dark-magenta rounded-lg p-[2.26rem]'>
          <figure className='flex flex-wrap gap-5 lg:pt-[0.30rem]'>
          <Image
              src="/assets/image-colton.jpg"
              alt=''
              width={50}
              height={50}
              className='lg:w-[2.5rem] lg:h-[2.5rem] rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold text-base'>Colton Smith</strong> 
            <span className=' text-primary-soft-pink text-base'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-medium text-[0.97rem]'>&quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;</blockquote>
          </figure>
        </li>
      </ul>
      <ul className='justify-start items-start pl-5 lg:pl-2 pr-5 lg:pt-[1.29rem] lg:pr-4 pt-4'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-[2.2rem]'>
          <figure className='flex flex-wrap  gap-5 lg:pt-[0.21rem]'>
          <Image
              src="/assets/image-anne.jpg"
              alt=''
              width={50}
              height={50}
              className='rounded-full lg:w-[2.5rem] lg:h-[2.5rem]'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold text-base'>Anne Wallace</strong> 
            <span className=' text-primary-soft-pink text-base'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-medium text-[1rem]'>&quot;Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!&quot;</blockquote>
          </figure>
        </li>
      </ul>

      <ul className='justify-start items-start pl-5 lg:pl-2 pr-5 lg:pr-4 pt-4 lg:pt-[2.28rem]'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-[2.27rem]'>
          <figure className='flex flex-wrap  gap-4 lg:pt-[0.22rem]'>
          <Image
              src="/assets/image-irene.jpg"
              alt='Irene Roberts'
              width={50}
              height={50}
              className='rounded-full lg:w-[2.5rem] lg:h-[2.5rem]'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold text-base'>Irene Roberts</strong> 
            <span className=' text-primary-soft-pink text-base'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-medium text-[1rem]'>&quot;Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.&quot;</blockquote>
          </figure>
        </li>
      </ul>
    </>
  )
}

export default Testimonials