import Hero from "@/app/landing/hero";
import CompanyOverview from "./landing/companyOverview";
import PrintProducts from "@/components/core/PrintProducts";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Download from "./landing/download";
import PrintTestimony from "@/components/core/PrintTestimony";

export default function Home() {
  return (
    <main>
      <Hero/>
      
      <div className="bg-[#12181f] flex flex-col items-center text-white pt-10">
        <PrintProducts />
        <h1 className='text-5xl font-bold'>Explore Endless Possibilities with Gojek!</h1>
        <h3 className='text-2xl pt-7 max-w-[50rem] text-center'>Unlock a world of services tailored to your needs. See why millions choose Gojek for their everyday essentials.</h3>
        <Button asChild variant='ghost' className='bg-[#4ca735] hover:bg-[#3d8a2d] text-white font-bold rounded-3xl p-5 m-7 mb-32'>
            <Link href="/products">View All Products</Link>
        </Button>
      </div>
      <div className="bg-slate-50 flex flex-col items-center">
        <h1 className='text-5xl font-bold text-center pt-16 py-4'>Why Gojek?</h1>
        <p className="text-xl text-center text-slate-600 font-semibold pb-8">Hear what our partners have to say about us!</p>
      </div>
        <PrintTestimony />
      <Download />
    </main>
  );
}

//<CompanyOverview />