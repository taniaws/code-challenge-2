"use client"

import { Milestone } from '@/components/core/Type';
import * as React from 'react';
import axios from '../helper/axiosInstance';
import Image from 'next/image';

interface IPrintMilestonesProps {
}

const PrintMilestones: React.FunctionComponent<IPrintMilestonesProps> = (props) => {
  const [milestones, setMilestones] = React.useState<Milestone[]>([]);
  
  const fetchMilestones = async () => {
    try{
      const {data} = await axios.get("/milestones");
      setMilestones(data);
    } catch(error) {
      console.log(error);
    }
  }
  
  React.useEffect(() => {
      fetchMilestones();
  },[])
    
    
  return milestones.map((value: Milestone)=> {
    return (
      <div key={value.id} className='text-white flex items-center justify-center sm:mx-8 lg:mx-[11rem] sm:my-10'>
          <h3 className='font-bold text-3xl sm:mr-9 lg:mr-16'>{value.year}</h3>
          <div className='items-center sm:flex sm:flex-col lg:flex-row'>
            <Image 
            src={value.img}
            width={value.width}
            height={value.height}
            alt={`Milestones - ${value.year}`}
            className='mr-6 sm:w-[17rem] lg:w-[28rem] sm:h-[12rem] lg:h-[17rem] lg:my-10'
            />
            <h4 className='leading-tight sm:text-base lg:text-[1.4rem] sm:max-w-[17rem]'>{value.description}</h4>
          </div>
      </div>
    )
    })
    
};

export default PrintMilestones;
