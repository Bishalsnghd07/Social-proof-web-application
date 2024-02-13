import Image from 'next/image'
import Ratings from '@/components/Ratings'
import Testimonials from '@/components/Testimonials'

export default function Home() {
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
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[74rem]">
          <article className='justify-center items-center pt-16 lg:pt-3 lg:pl-6 p-5 lg:p-0'>
          <h1 className='text-4xl lg:text-5xl text-primary-very-dark-magenta font-sans font-bold text-center lg:text-left lg:max-w-[25.8rem]'>10,000+ of our users love our products.
          </h1>
          <p className=' font-medium pt-4 lg:pt-6 text-lg text-[#a777a5] text-center lg:text-left lg:max-w-[29rem] leading-6'>
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
          </article>
          <Ratings />
          </section>
          <div className='grid grid-cols-1 lg:grid-cols-3 pt-12 lg:pt-[3.6rem] lg:pl-6 lg:pr-[0.7rem] lg:max-w-[74rem] pb-8 lg:pb-0'>
          <Testimonials />
        </div>
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