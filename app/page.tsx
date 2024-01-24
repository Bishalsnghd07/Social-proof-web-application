"use client";

import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Icon from "@/components/Icon/icon";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const textVariants = {
    initial: {
      x:-500,
      opacity: 0,
    },
    animate: {
      x:0,
      opacity: 1,
      transition:{
        duration:1,
        staggerChildren:0.1,
      }
    },
  }
  return (
    <><main className="grid grid-cols-1 lg:grid-cols-2 h-[56vh] w-[100vw] bg-white">
        <div className="pt-[2.6rem] lg:pt-[6rem] pl-4 pr-4 lg:pl-[8rem] lg:pr-[6rem] text-center lg:text-left lg:max-w-[35rem]"> 
        <Image
          src="/assets/bg-pattern-top-desktop.svg"
          alt="top background"
          width={100}
          height={100}
          className="absolute top-0 w-[100%] h-[32%] md:w-[36%] md:h-[50%] left-0"
        />
      <motion.div className="text-primary-very-dark-magenta text-4xl font-bold" variants={textVariants} initial="initial" animate="animate">
        10,000+ of our users love our products
      <span className="flex flex-col flex-wrap pt-[1rem] text-sm text-neutral-dark-grayish-magenta">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</span>
      </motion.div>
      </div>
      <motion.div className="flex flex-wrap items-center justify-center p-6 lg:pt-[5rem]" variants={textVariants} initial="initial" animate="animate">
        <Card1 />
      </motion.div>
      <Image
          src="/assets/bg-pattern-bottom-desktop.svg"
          alt="bottom background"
          width={100}
          height={100}
          className="absolute bottom-0 w-[74%] h-[78%] right-0 hidden xl:block"
        />
    </main>
      <Card2 />
    </>
  );
}
