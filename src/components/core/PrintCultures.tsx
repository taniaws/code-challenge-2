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
      <div key={value.id}>
        <Image src={value.image} width={value.width} height={value.height} alt={`Culture - {value.id}`} className='h-[21rem] w-[21rem]'/>
        <h1 className='text-3xl font-bold p-9 pb-2 max-w-[21rem]'>{value.title}</h1>
        <p className='pl-9 text-[1.1rem] max-w-[20rem]'>{value.description}</p>
      </div>
    )
  })
};

export default PrintCultures;
