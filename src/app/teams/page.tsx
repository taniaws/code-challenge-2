"use client"

import axios from '@/components/helper/axiosInstance';
import * as React from 'react';
import { TeamsType } from './Type';
import Image from 'next/image';
import PrintTeams from '../../components/core/PrintTeams';
import { useMediaQuery } from 'react-responsive';
import PrintTeamsSmall from '@/components/core/PrintTeamsSm';

interface ITeamsProps {
}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {
  const isSmallScreen = useMediaQuery({maxWidth: 768})
  const isLargeScreen = useMediaQuery({minWidth: 769})

  return (
    <div className='bg-lime-500 p-10 sm:h-screen md:h-[60rem] lg:h-full overflow-hidden'>
      <h1 className='text-[#14202e] font-bold text-center pt-14 pb-24 max-w-[35rem] mx-auto sm:text-3xl md:text-4xl lg:text-5xl lg:leading-tight'> We are the people who make up
        <span className='inline-block align-sub sm:ml-2 lg:ml-4'>
          <Image src={"/logo-color.png"} width={866} height={206} alt="navbar-logo" className='sm:max-h-[2rem] md:max-h-[3rem] lg:max-h-[6rem] sm:max-w-[8rem] md:max-w-[9rem] lg:max-w-[13rem]'/>
        </span>
      </h1>
      {isSmallScreen && (
        <span> <PrintTeamsSmall displayContact={true} /> </span>
      )}
      {isLargeScreen && (
        <span className='gap-8 mt-20 overflow-hidden'><PrintTeams displayContact={true} /></span>
      )}
    </div>
  );
};

export default Teams;
