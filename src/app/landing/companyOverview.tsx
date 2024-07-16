"use client"

import PrintCultures from '@/components/core/PrintCultures';
import PrintMilestones from '@/components/core/PrintMilestones';
import PrintTeams from '@/components/core/PrintTeams';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface ICompanyOverviewProps {
}

const CompanyOverview: React.FunctionComponent<ICompanyOverviewProps> = (props) => {
  return (
    <div>
        <div className='bg-[#12181f] justify-center py-9 rounded-t-[4rem]'>
            <div className='text-center mt-20'>
                <h1 className='text-5xl text-white font-bold'> History & Milestones</h1>
                <Button asChild variant='ghost' className='bg-[#4ca735] hover:bg-[#3d8a2d] text-white font-bold rounded-3xl p-5 m-7'>
                    <Link href="/about">Find Out More</Link>
                </Button>
            </div>
            <span><PrintMilestones /></span>
        </div>
        <div className='bg-white justify-center py-9 px-[7rem] pb-28'>
            <div className='text-center mt-20'>
                <h1 className='text-5xl text-[#12181f] font-bold'>Our Culture</h1>
                <Button asChild variant='ghost' className='bg-[#4ca735] hover:bg-[#3d8a2d] text-white font-bold rounded-3xl p-5 m-6'>
                    <Link href="/about">Find Out More</Link>
                </Button>
            </div>
            <span className='flex justify-center gap-8'><PrintCultures /></span>
        </div>
        <div className='bg-lime-500 rounded-t-[4rem] p-10'>
        <div className='text-center my-20'>
            <h1 className='text-5xl text-[#14202e] font-bold text-center max-w-[35rem] leading-tight mx-auto '> We are the people who make up
            <span className='inline-block align-bottom ml-4'>
                <Image src={"/logo-color.png"} width={866} height={206} alt="navbar-logo" className='max-h-[6rem] max-w-[13rem] align-bottom'/>
            </span>
            </h1>
            <Button asChild variant='ghost' className='bg-[#4ca735] hover:bg-[#3d8a2d] text-white font-bold rounded-3xl p-5 m-9'>
                <Link href="/teams">Find Out More</Link>
            </Button>
        </div>
        <span className='gap-8 mt-20 overflow-hidden'><PrintTeams displayContact={false} /></span>
        </div>
    </div>
  );
};

export default CompanyOverview;
//provide a more detailed overview of the company