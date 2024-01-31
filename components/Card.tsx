import Image from 'next/image'

const Card = () => {
  return (
    <>
      <ul className='justify-start items-start pl-5 lg:pl-0 pr-5 lg:pr-0'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-colton.jpg"
              alt=''
              width={50}
              height={50}
              className='rounded-full lg:w-lg:[3rem] lg:h-[3rem] object-cover'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Colton Smith</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-semibold text-sm'>&quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;</blockquote>
          </figure>
        </li>
      </ul>
      <ul className=' justify-start items-start pl-5 lg:pl-6 pr-5 lg:pr-0 pt-4'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-anne.jpg"
              alt=''
              width={50}
              height={50}
              className='rounded-full lg:w-lg:[3rem] lg:h-[3rem] object-cover'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Anne Wallace</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='font-semibold text-sm text-white '>&quot;Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!&quot;</blockquote>
          </figure>
        </li>
      </ul>

      <ul className=' justify-start items-start pl-5 lg:pl-6 pr-5 lg:pr-0 pt-4 lg:pt-8'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-irene.jpg"
              alt='Irene Roberts'
              width={50}
              height={50}
              className='rounded-full lg:w-lg:[3rem] lg:h-[3rem] object-cover'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Irene Roberts</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white font-semibold text-sm'>&quot;Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.&quot;</blockquote>
          </figure>
        </li>
      </ul>
    </>
  )
}

export default Card