"use client"

import Image from 'next/image';
import * as React from 'react';
import axios from '../helper/axiosInstance';
import { Cultures } from './Type';

interface IPrintCulturesProps {
}

const PrintCultures: React.FunctionComponent<IPrintCulturesProps> = (props) => {
  const [cultures, setCultures] = React.useState<Cultures[]>([]);

  const fetchCultures = async () => {
    try{
      const {data} = await axios.get("/cultures");
      setCultures(data);
    } catch(error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchCultures();
  },[])
  
  return cultures.map((value: Cultures)=> {
    return (
      <div key={value.id} className='flex items-center sm:flex-col'>
        <Image
          src={value.image}
          width={value.width}
          height={value.height}
          alt={`Culture - {value.id}`}
          className='sm:h-[10rem] md:h-[15rem] lg:h-[21rem] sm:w-[10rem] md:w-[15rem] lg:w-[21rem]'
        />
        <h1 className='font-bold sm:p-2 lg:p-5 sm:max-w-[12rem] md:max-w-[15rem] lg:max-w-[21rem] sm:text-lg md:text-2xl lg:text-3xl sm:text-center lg:text-left'>{value.title}</h1>
        <p className='max-w-[21rem] lg:pl-4 sm:text-center lg:text-left sm:text-sm md:text-lg lg:text-[1.1rem] lg:leading-tight'>{value.description}</p>
      </div>
    )
  })
};

export default PrintCultures;
