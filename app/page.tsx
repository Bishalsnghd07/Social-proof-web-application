import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";
import Image from "next/image";

export default function Home() {
  return (
    <><main className="grid grid-cols-1 lg:grid-cols-2 h-[56vh] w-[100vw] bg-white">
        <div className="pt-[2.6rem] lg:pt-[6rem] pl-4 pr-4 lg:pl-[8rem] lg:pr-[6rem] text-center lg:text-left lg:max-w-[35rem]">
      <div className="text-primary-very-dark-magenta text-4xl font-bold">
        10,000+ of our users love our products
      <span className="flex flex-col flex-wrap pt-[1rem] text-sm text-neutral-dark-grayish-magenta">We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.</span>
      </div>
      </div>
      <div className="flex flex-wrap items-center justify-center p-6 lg:pt-[5rem]">
        <Card1 />
      </div>
    </main>
      <Card2 />
    </>
  );
}
