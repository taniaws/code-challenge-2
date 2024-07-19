import Hero from "@/app/landing/hero";
import PrintProducts from "@/components/core/PrintProducts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Download from "./landing/download";
import PrintTestimony from "@/components/core/PrintTestimony";

export default function Home() {
  return (
    <main>
      {/*Hero*/}
      <Hero/>
      
      {/*Products*/}
      <div className="bg-[#12181f] overflow-hidden">
        <PrintProducts />
        <div className="flex flex-col items-center text-white">
          <h1 className='font-bold text-center sm:text-3xl lg:text-5xl sm:max-w-[24rem] lg:max-w-full'>Explore Endless Possibilities with Gojek!</h1>
          <h3 className='text-center sm:text-lg lg:text-2xl sm:max-w-[20rem] lg:max-w-[50rem] sm:pt-4 lg:pt-7'>Unlock a world of services tailored to your needs. See why millions choose Gojek for their everyday essentials.</h3>
          <Button asChild variant='ghost' className='bg-[#4ca735] hover:bg-[#3d8a2d] text-white font-bold rounded-3xl p-5 m-7 mb-32'>
              <Link href="/products">View All Products</Link>
          </Button>
        </div> 
      </div>

      {/*Testimony*/}
      <div className="bg-slate-50 flex flex-col items-center">
        <h1 className='font-bold text-center pt-16 py-4 sm:text-3xl lg:text-5xl'>Why Gojek?</h1>
        <p className="text-center text-slate-600 font-semibold sm:text-base lg:text-xl sm:max-w-60 lg:max-w-full">Hear what our partners have to say about us!</p>
      </div>
      <PrintTestimony />

      {/*Download*/}
      <Download />
    </main>
  );
};