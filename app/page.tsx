"use client";
import Ratings from '@/components/Ratings'
import Image from 'next/image'
import Testimonials from '@/components/Testimonials'
import React, {useState} from 'react';
import "./globals.css";
import Link from 'next/link';

export default function Home() {
  const [isMainMenuOpen, setIsMainMenuOpen] = useState(false);

  // Function to toggle the visibility of the main menu
  const toggleMainMenu = () => {
    setIsMainMenuOpen(!isMainMenuOpen);
  };

  return (
    <main className='flex flex-col min-h-screen p-8  justify-center items-center bg-neutral-Light-Gray overflow-hidden'>
      <div className='grid bg-white rounded-t-lg sm:w-[38.5rem] shadow-2xl'>
        <article className='px-9 py-10 flex flex-col flex-wrap'>
          <h1 className=' text-primary-cyan justify-start items-start font-semibold text-2xl'>Join our community</h1>
          <h2 className=' text-primary-Bright-Yellow font-semibold text-lg pt-[1.1rem]'>30-day hassle-free money back guarantee</h2>
          <p className=' text-neutral-Grayish-Blue pt-2 text-base font-karla sm:max-w-[34.56rem] pb-6'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
        </article>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:w-[38.5rem] rounded-b-lg shadow-2xl">
          <section className='flex flex-col sm:items-start sm:justify-start bg-primary-cyan sm:rounded-bl-lg p-9'>
            <h2 className='flex font-karla text-neutral-white font-semibold w-full'>Monthly Subscription</h2>
            
            <div className='flex flex-row text-3xl mt-5 font-semibold text-white gap-[0.60rem]'>$29
            <p className='font-karla text-gray-300 text-sm items-center font-thin mt-[0.64em]'>per month</p>
            </div>
           
            <p className='mt-3 font-karla text-neutral-Light-Gray text-[0.99rem]'>Full access for less than $1 a day</p>
           
          <a href='/' className='mt-10 bg-primary-Bright-Yellow w-full py-3 rounded-md shadow-xl text-center hover:bg-[#cae51a] text-base text-white cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c7e51a]'>Sign up</a>        
          </section>
        <section className='flex flex-col p-9 justify-start bg-[#41bbb9] rounded-b-lg sm:rounded-b-none sm:rounded-br-lg'>
          <h2 className='text-neutral-white font-semibold font-karla'>
          Why Us
          </h2>
          <p className='text-slate-300 font-karla mt-4 sm:max-w-[12.46rem] text-base'>Tutorials by industry experts Peer & expert code review Coding exercises Access to our GitHub repos Community forum Flashcard decks New videos every week</p>
         
        </section>
      </div>













      {/* <Image
          src="/assets/bg-pattern-top-desktop.svg"
          alt=""
          width={100}
          height={100}
          className="absolute top-0 w-[100%] h-[32%] md:w-[36%] md:h-[45%] left-0"
          aria-hidden="true"
        />
      <div className='z-10'>
        <section className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[74rem]">
          <article className='justify-center items-center pt-16 lg:pt-3 lg:pl-6 p-5 lg:p-0'>
          <h1 className='text-4xl lg:text-5xl text-primary-very-dark-magenta font-sans font-bold text-center lg:text-left lg:max-w-[25.8rem]'>10,000+ of our users love our products.
          </h1>
          <p className='font-sans font-medium pt-4 lg:pt-6 text-lg text-neutral-dark-grayish-magenta text-center lg:text-left lg:max-w-[29rem] leading-6'>
          We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.
          </p>
          </article>
          <Ratings />
        </section>
        <div className='grid grid-cols-1 lg:grid-cols-3 pt-12 lg:pt-[4.4rem] lg:pl-6 lg:pr-[0.7rem] lg:max-w-[74rem] pb-8 lg:pb-0'>
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
        /> */}
     </main>
  )
}
 

//     <main className='flex min-h-screen items-center justify-center lg:pl-4 lg:pr-4'>

//     <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//   <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
//       <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
//       <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
//   </a>
//   <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
//       <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
//       <button data-collapse-toggle="navbar-sticky" onClick={toggleMainMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMainMenuOpen}>
//         <span className="sr-only">Open main menu</span>
//         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
//             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
//         </svg>
//     </button>
//   </div>
//   <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMainMenuOpen ? '' : 'hidden'}`} id="navbar-sticky">
//     <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//       <li>
//         <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//       </li>
//       <li>
//         <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
//       </li>
//     </ul>
//   </div>
//   </div>
// </nav>
//     </main>