import Ratings from '@/components/Ratings'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'


export default function Home() {
  return (
    <div className='min-h-screen grid'>
      <Image
          src="/assets/bg-pattern-top-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 w-[100%] h-[32%] md:w-[36%] md:h-[50%] left-0"
          aria-hidden="true"
        />
      <div className='z-10'>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <article className='justify-center items-center pt-14 lg:pt-12 lg:pl-20 p-4 lg:p-auto lg:max-w-[30rem]'>
          <h1 className='text-4xl text-primary-very-dark-magenta font-bold text-center lg:text-left lg:pl-[3rem] lg:pt-[2.89rem]'>10,000+ of our users love our products.
          </h1>
          <p className='font-bold pt-4 text-sm text-neutral-dark-grayish-magenta text-center lg:text-left lg:pl-12'>
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
          </article>
          <Ratings />
        </section>
        <div className='grid grid-cols-1 lg:grid-cols-3 pb-8 lg:pb-0 pt-11 lg:pt-0 lg:pl-24 lg:pr-24'>
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
 
