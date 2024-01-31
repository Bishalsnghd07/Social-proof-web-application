import Ratings from '@/components/Ratings'
import Card from '@/components/Card'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='min-h-screen grid p-2'>
      <Image
          src="/assets/bg-pattern-top-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 w-[100%] h-[32%] md:w-[36%] md:h-[50%] left-0"
          aria-hidden="true"
        />
      <div>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <article className='justify-center items-center lg:max-w-[25rem] pt-14 lg:pt-14 lg:pl-20 p-4 lg:p-auto'>
          <h2 className='text-4xl text-primary-very-dark-magenta font-bold text-center lg:text-left'>10,000+ of our users love our products.
          </h2>
          <p className='font-bold pt-4 text-sm text-neutral-dark-grayish-magenta text-center lg:text-left'>
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
          </article>
          <Ratings />
        </section>
        <div className='grid grid-cols-1 lg:grid-cols-3 pt-11 lg:pl-20 lg:pr-20'>
          <Card />
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
 
