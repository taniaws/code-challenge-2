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
  return <div key={value.id} className='text-white flex items-center mx-[11rem]'>
      <h3 className='text-3xl font-bold mr-16'>{value.year}</h3>
      <Image 
      src={value.img}
      width={value.width}
      height={value.height}
      alt={`Milestones - ${value.year}`}
      className='w-[28rem] h-[17rem] mr-6 my-10'
      />
      <h4 className='text-[1.4rem]'>{value.description}</h4>
  </div>  
  })
    
};

export default PrintMilestones;
