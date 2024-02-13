import Image from 'next/image'

const Testimonials = () => {
  return (
    <>
      <ul className='justify-start items-start pl-5 lg:pl-1 lg:pt-[0.22rem] pr-5 lg:pr-4'>
        <li className="bg-primary-very-dark-magenta rounded-lg p-[2.36rem] shadow-2xl">
          <figure className='flex flex-wrap gap-5 lg:pt-[0.44rem] transition duration-300 ease-in-out hover:scale-110'>
          <Image
              src="/assets/image-colton.jpg"
              alt=''
              width={50}
              height={50}
              className='lg:w-[2.5rem] lg:h-[2.5rem] rounded-full border-2 border-orange-400'
            />
            <figcaption className='flex flex-col text-base leading-[1.4rem]'>
            <strong className='text-white font-semibold'>Colton Smith
            </strong> 
            <span className='text-pink-400 cursor-pointer group'>Verified Buyer
            <span className="hidden lg:block bottom-0 h-1 w-0 bg-gradient-to-r from-orange-600 via-white to-green-600 transition-all ease-in-out duration-500 group-hover:w-full"></span> 
            </span> 
            </figcaption>
            <blockquote className='text-white font-medium text-[0.96rem] leading-[1.4rem] select-all selection:text-fuchsia-300'>&quot;We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!&quot;</blockquote>
          </figure>
        </li>
      </ul>
      <ul className='justify-start items-start pl-5 lg:pl-2 pr-5 lg:pt-[1.29rem] lg:pr-4 
      pt-4'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-[2.40rem] shadow-2xl'>
          <figure className='flex flex-wrap  gap-5 lg:pt-[0.44rem] transition duration-300 ease-in-out hover:scale-110'>
          <Image
              src="/assets/image-anne.jpg"
              alt=''
              width={50}
              height={50}
              className='rounded-full lg:w-[2.5rem] lg:h-[2.5rem]  border-2 border-orange-400'
            />
            <figcaption className='flex flex-col text-base leading-[1.4rem]'>
            <strong className='text-white font-semibold'>Anne Wallace</strong> 
            <span className='text-pink-400 group cursor-pointer'>Verified Buyer
            <span className="hidden lg:block bottom-0 h-1 w-0 bg-gradient-to-r from-orange-600 via-white 
            to-green-600 transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </span> 
            </figcaption>
            <blockquote className='text-white font-medium text-[0.96rem] leading-[1.4rem] select-all 
           selection:text-fuchsia-300'>&quot;Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!&quot;</blockquote>
          </figure>
        </li>
      </ul>

      <ul className='justify-start items-start pl-5 lg:pl-2 pr-5 lg:pr-4 pt-4 lg:pt-[2.28rem]'>
        <li className='bg-primary-very-dark-magenta rounded-lg p-[2.38rem] shadow-2xl'>
          <figure className='flex flex-wrap  gap-4 lg:pt-[0.44rem] transition duration-300 ease-in-out hover:scale-110'>
          <Image
              src="/assets/image-irene.jpg"
              alt='Irene Roberts'
              width={50}
              height={50}
              className='rounded-full lg:w-[2.5rem] lg:h-[2.5rem] border-2 border-orange-400'
            />
            <figcaption className='flex flex-col text-base leading-[1.4rem]'>
            <strong className='text-white font-semibold text-base'>Irene Roberts</strong> 
            <span className='text-pink-400 text-base group cursor-pointer'>Verified Buyer
            <span className="hidden lg:block bottom-0 h-1 w-0 bg-gradient-to-r from-orange-600 via-white 
            to-green-600 transition-all ease-in-out duration-500 group-hover:w-full"></span>
            </span> 
            </figcaption>
            <blockquote className='text-white font-medium text-[0.96rem] leading-[1.4rem] select-all selection:text-fuchsia-300'>&quot;Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.&quot;</blockquote>
          </figure>
        </li>
      </ul>
    </>
  )
}

export default Testimonials