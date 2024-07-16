"use client"

import * as React from 'react';
import Image from 'next/image';
import PrintTeams from '../../components/core/PrintTeams';
import PrintMilestones from '@/components/core/PrintMilestones';
import PrintCultures from '@/components/core/PrintCultures';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {

  return (
    <div>
      {/* Hero Banner */}
      <div className='bg-[#12181f] relative overflow-hidden pt-[53.7%]'>
        <Image
          src={"/banner-company.png"}
          width={1999}
          height={1074}
          alt='company-banner'
          className='absolute top-0 left-0 opacity-80'
        />
        <h1 className='text-white absolute max-w-[37rem] top-1/2 transform -translate-y-1/2 text-[1.7rem] sm:text-[0.5rem] leading-[4rem] sm:leading-[1rem] ml-32 sm:ml-4'><span className='font-bold text-5xl sm:text-2xl'>Been quite a ride</span> <br/>Know our journey, and the people behind it.</h1>
      </div>

      {/* Milestones */}
      <div className='bg-[#12181f] justify-center py-9 sm:py-1'>
        <h1 className='text-white font-bold text-center my-20 text-5xl sm:text-2xl'> History & Milestones</h1>
        <span><PrintMilestones /></span>
      </div>

      {/* Cultures */}
      <div className='bg-white justify-center py-9 px-[7rem] pb-28'>
        <h1 className='text-5xl text-[#12181f] font-bold my-20 text-center'>Our Ways of Working</h1>
        <span className='flex justify-center gap-8'><PrintCultures /></span>
      </div>

      {/* Teams */}
      <div className='bg-lime-500 rounded-t-[4rem] p-10'>
      <h1 className='text-5xl text-[#14202e] font-bold text-center pt-14 pb-24 max-w-[35rem] leading-tight mx-auto '> We are the people who make up
        <span className='inline-block align-bottom ml-4'>
          <Image
            src={"/logo-color.png"}
            width={866}
            height={206}
            alt="navbar-logo"
            className='max-h-[6rem] max-w-[13rem] align-bottom'
          />
        </span>
      </h1>
      <span className='gap-8 mt-20 overflow-hidden'><PrintTeams displayContact={false} /></span>
      </div>
    </div>
  );
};

export default About;