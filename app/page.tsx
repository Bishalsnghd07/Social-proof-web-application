import Ratings from '@/components/Ratings'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <Image
          src="/assets/bg-pattern-top-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 w-[100%] h-[32%] md:w-[46%] md:h-[52%] left-0"
          aria-hidden="true"
        />
      <div className='z-10'>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <article className='justify-center items-center pt-14 lg:pt-24 lg:pl-16 p-4 lg:p-auto lg:max-w-[28.96rem]'>
          <h1 className='text-4xl text-primary-very-dark-magenta font-bold text-center lg:text-left lg:pl-[3rem]'>10,000+ of our users love our products.
          </h1>
          <p className='font-bold pt-4 text-sm text-neutral-dark-grayish-magenta text-center lg:text-left lg:pl-12'>
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
          </article>
          <Ratings />
        </section>
        <div className='grid grid-cols-1 lg:grid-cols-3 pt-12 lg:pt-8 lg:pl-24 lg:pr-[0.7rem] lg:max-w-[68rem]'>
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
        />
     </div>
  )
}
 
