"use client"

import * as React from 'react';
import Image from 'next/image';
import PrintTeams from '../../components/core/PrintTeams';
import PrintMilestones from '@/components/core/PrintMilestones';
import PrintCultures from '@/components/core/PrintCultures';
import { useMediaQuery } from 'react-responsive';
import PrintTeamsSmall from '@/components/core/PrintTeamsSm';

interface IAboutProps {
}

const About: React.FunctionComponent<IAboutProps> = (props) => {
  const isSmallScreen = useMediaQuery({maxWidth: 768})
  const isLargeScreen = useMediaQuery({minWidth: 769})

  return (
    <div className='overflow-hidden'>
      {/* Hero Banner */}
      <div className='bg-[#12181f] relative overflow-hidden pt-[53.7%]'>
        <Image
          src={"/banner-company.png"}
          width={1999}
          height={1074}
          alt='company-banner'
          className='absolute top-0 left-0 opacity-80'
        />
        <h1 className='text-white absolute max-w-[37rem] top-1/2 transform -translate-y-1/2 sm:text-base md:text-lg lg:text-[1.7rem] sm:leading-[1.5rem] lg:leading-[3rem] sm:ml-10 lg:ml-32 '>
          <span className='font-bold sm:text-3xl md:text-4xl lg:text-5xl'>Been quite a ride</span> <br/>Know our journey, and the people behind it.
        </h1>
      </div>

      {/* Milestones */}
      <div className='bg-[#12181f] justify-center sm:py-1 lg:py-9 sm:pb-16'>
        <h1 className='text-white font-bold text-center my-20 sm:text-4xl lg:text-5xl'> History & Milestones</h1>
        <span><PrintMilestones /></span>
      </div>

      {/* Cultures */}
      <div className='bg-white justify-center py-9 px-[7rem] pb-28'>
        <h1 className='text-[#12181f] font-bold text-center sm:text-4xl lg:text-5xl sm:my-10 lg:my-20'>Our Ways of Working</h1>
        <span className='flex justify-center gap-8 sm:flex-col lg:flex-row'><PrintCultures /></span>
      </div>

      {/* Teams */}
      <div className='bg-lime-500 sm:px-8 lg:p-10 sm:rounded-t-[3rem] lg:rounded-t-[4rem] sm:h-screen md:h-[60rem] lg:h-full'>
      <h1 className='text-[#14202e] font-bold text-center pt-14 pb-24 leading-tight mx-auto sm:text-3xl md:text-4xl lg:text-5xl sm:max-w-[20rem] md:max-w-[26rem] lg:max-w-[35rem]'> We are the people who make up
        <span className='inline-block align-bottom sm:ml-2 lg:ml-4 lg:t-2 lg:pt-3'>
          <Image
            src={"/logo-color.png"}
            width={866}
            height={206}
            alt="navbar-logo"
            className='sm:max-h-[2rem] md:max-h-[4rem] lg:max-h-[6rem] sm:max-w-[7rem] md:max-w-[8rem] lg:max-w-[13rem]'
          />
        </span>
      </h1>
      <div>
        {isSmallScreen && (
          <span> <PrintTeamsSmall displayContact={false} /> </span>
        )}
        {isLargeScreen && (
          <span className='gap-8 mt-20 overflow-hidden'><PrintTeams displayContact={false} /></span>
        )}
      </div>
      </div>
    </div>
  );
};

export default About;