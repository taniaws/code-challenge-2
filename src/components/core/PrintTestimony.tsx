"use client"

import axios from '@/components/helper/axiosInstance';
import * as React from 'react';
import { Testimony } from './Type';
import Image from 'next/image';
//Swiper
import Slider from "react-slick";

interface IPrintTestimonyProps {
}

const PrintTestimony: React.FunctionComponent<IPrintTestimonyProps> = (props) => {
  const [testimony, setTestimony] = React.useState<Testimony[]>([]);

  const fetchTestimony = async () => {
    try{
      const {data} = await axios.get("/testimonials");
      setTestimony(data);
    } catch(error) {
      console.log(error);
    }
  }
    
  React.useEffect(() => {
    fetchTestimony();
  },[])

  //Slider settings
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className='bg-gray-50 pb-24'>
        <Slider {...settings}>
            {testimony.map((value: Testimony)=> {
            return (
                <div className='p-28' key={value.id}>
                    <div className='bg-white shadow-2xl w-full p-10 rounded-3xl relative flex flex-col items-center'>
                        <div className='text-center pt-16'>
                            <h3 className='text-3xl font-bold pb-1'>{value.name}</h3>
                            <h4 className='text-xl font-semibold text-slate-600 pb-5'>{value.role}</h4>
                            <p className='text-slate-600'>{value.description}</p>
                        </div>
                        <div className='h-40 w-40 absolute top-[-5rem]'>
                            <Image src={value.image} width={value.width} height={value.height} alt={`${value.role} ${value.id}`}/>
                        </div>
                    </div>
                </div>
            )
        })}
        </Slider>
    </div>
  );
};

export default PrintTestimony;

