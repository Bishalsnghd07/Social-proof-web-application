import Image from 'next/image'

const Card = () => {
  return (
    <>
      <ul className=' justify-start items-start'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-colton.jpg"
              alt='Colton Smith'
              width={50}
              height={50}
              className='rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Colton Smith</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white text-[14px]'>"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"</blockquote>
          </figure>
        </li>
      </ul>
      <ul className=' justify-start items-start lg:pl-6 pt-4'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-anne.jpg"
              alt='Anne Wallace'
              width={50}
              height={50}
              className='rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Anne Wallace</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white text-[14px]'>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</blockquote>
          </figure>
        </li>
      </ul>

      <ul className=' justify-start items-start lg:pl-6 pt-4 lg:pt-8'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-irene.jpg"
              alt='Irene Roberts'
              width={50}
              height={50}
              className='rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Irene Roberts</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white text-[14px]'>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</blockquote>
          </figure>
        </li>
      </ul>

      {/* <ul className='lg:pl-2 lg:pr-20 pt-4 lg:pt-12'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-irene.jpg"
              alt=''
              width={50}
              height={50}
              aria-label='true'
              className='rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Irene Roberts</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white text-[14px]'>"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."</blockquote>
          </figure>
        </li>
      </ul> */}

      {/* <ul className='lg:pl-0 pt-4 lg:pt-20 lg:p-20'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-6'>
          <figure className='flex flex-wrap  gap-4'>
          <Image
              src="/assets/image-anne.jpg"
              alt=''
              width={50}
              height={50}
              aria-label='true'
              className='rounded-full'
            />
            <figcaption className='flex flex-col'>
            <strong className='text-white font-semibold'>Anne Wallace</strong> 
            <span className=' text-primary-soft-pink'>Verified Buyer</span> 
            </figcaption>
            <blockquote className='text-white text-[14px]'>"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"</blockquote>
          </figure>
        </li>
      </ul> */}
    </>
  )
}

export default Card