"use client"

import axios from '@/components/helper/axiosInstance';
import * as React from 'react';
import { TeamsType } from '../../app/teams/Type';
import Image from 'next/image';
import Slider from "react-slick";

interface IPrintTeamsSmallProps {
    displayContact: boolean
}

const PrintTeamsSmall: React.FunctionComponent<IPrintTeamsSmallProps> = ({displayContact = false}) => {
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

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          fade: true,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          fade: false,
        }
      }
    ]
  };

  return (
        <div>
            <Slider {...settings}>
                {teams.map((value: TeamsType)=> {
                    return (
                    <div key={value.id}>
                        <div className='flex flex-col justify-center items-center'>
                            <Image src={value.image} width={value.width} height={value.height} alt={value.name} className='rounded-xl'/>
                            <div className='flex flex-col items-center text-center max-w-[19rem]'>
                                <h1 className='text-2xl font-bold pt-5 pb-2'>{value.name}</h1>
                                <p className='pb-2 text-base font-medium leading-tight'>{value.role}</p>
                                <p className='pb-9 text-sm'>
                                    {displayContact ? value.contact : value.description}
                                </p>
                            </div>
                        </div>
                    </div>  
                    )
                })}
            </Slider>
        </div>
  )
}


export default PrintTeamsSmall;
//<div className="flex justify-center items-center h-full">
//<div className="w-full max-w-[15.75rem]">