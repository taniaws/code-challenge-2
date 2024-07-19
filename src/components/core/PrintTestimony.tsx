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
    arrow: false,
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className='bg-gray-50 pt-10 sm:pb-0 lg:pb-24 overflow-hidden'>
        <Slider {...settings}>
            {testimony.map((value: Testimony)=> {
            return (
                <div className='sm:p-16 lg:p-28' key={value.id}>
                    <div className='bg-white shadow-2xl w-full rounded-3xl relative flex flex-col items-center sm:p-6 lg:p-10'>
                        <div className='text-center pt-16'>
                            <h3 className='font-bold pb-1 sm:text-2xl lg:text-3xl'>{value.name}</h3>
                            <h4 className='font-semibold text-slate-600 pb-5 sm:text-base lg:text-xl'>{value.role}</h4>
                            <p className='text-slate-600 sm:text-sm lg:text-base'>{value.description}</p>
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

