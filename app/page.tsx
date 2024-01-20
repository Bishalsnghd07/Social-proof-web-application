import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col h-[100vh] w-[100vw] bg-white">
      <div className="flex max-w-[40rem] items-center justify-center pl-auto md:pl-[12rem] pt-auto md:pt-[8rem] p-20">
        <h1 className="flex font-extrabold text-4xl md:text-5xl text-purple-900">10,000+ of our users love our products</h1>
      </div>
      <div className="absolute top-0 left-0 w-[40%] h-[47%]">
      <Image
       src="/assets/bg-pattern-top-desktop.svg"
       alt="Background top image"
      //  width={100}
      //  height={100}
      layout="fill"
      //  objectFit="cover"
      />
      </div>
      <div className="absolute bottom-0 right-0 w-[70%] h-[82%] hidden md:block">
       <Image
       src="/assets/bg-pattern-bottom-desktop.svg"
       alt="Background bottom image"
      //  width={100}
      //  height={100}
       layout="fill"
      //  objectFit="cover"
      />
      </div>
    </main>
  );
}
