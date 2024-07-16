"use client"

import axios from '@/components/helper/axiosInstance';
import * as React from 'react';
import { TeamsType } from './Type';
import Image from 'next/image';
import PrintTeams from '../../components/core/PrintTeams';

interface ITeamsProps {
}

const Teams: React.FunctionComponent<ITeamsProps> = (props) => {

  return (
    <div className='bg-lime-500 p-10'>
      <h1 className='text-5xl text-[#14202e] font-bold text-center pt-14 pb-24 max-w-[35rem] leading-tight mx-auto '> We are the people who make up
        <span className='inline-block align-bottom ml-4'>
          <Image src={"/logo-color.png"} width={866} height={206} alt="navbar-logo" className='max-h-[6rem] max-w-[13rem] align-bottom'/>
        </span>
      </h1>
      <span className='gap-8 mt-20 overflow-hidden'><PrintTeams displayContact={true}/></span>
    </div>
  );
};

export default Teams;
