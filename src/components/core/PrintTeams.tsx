"use client"

import axios from '@/components/helper/axiosInstance';
import * as React from 'react';
import { TeamsType } from '../../app/teams/Type';
import Image from 'next/image';

interface IPrintTeamsProps {
    displayContact: boolean
}

const PrintTeams: React.FunctionComponent<IPrintTeamsProps> = ({displayContact = false}) => {
  const [teams, setTeams] = React.useState<TeamsType[]>([]);

  const fetchTeams = async () => {
    try{
      const {data} = await axios.get("/teams");
      setTeams(data);
    } catch(error) {
      console.log(error);
    }
  }
    
  React.useEffect(() => {
    fetchTeams();
  },[])

  return (
    <div className='grid grid-cols-4 gap-y-8'>
      {teams.map((value: TeamsType)=> {
        return (
          <div key={value.id} className='justify-self-center'>
            <Image src={value.image} width={value.width} height={value.height} alt={value.name} className='max-h-[21rem] max-w-[15.75rem] rounded-xl'/>
            <h1 className='text-3xl font-bold pt-5 pb-2 max-w-[16rem]'>{value.name}</h1>
            <p className='pb-2 text-[1.1rem] max-w-[16rem] font-medium leading-tight'>{value.role}</p>
            <p className='pb-9 max-w-[16rem]'>
              {displayContact ? value.contact : value.description}
            </p>
          </div>  
        )
      })}
    </div>
  )
}


export default PrintTeams;
