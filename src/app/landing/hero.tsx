"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as React from 'react';

interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <div>
      <div className='bg-[#12181f] relative overflow-hidden pt-[56.25%]'>
          <iframe
              className='w-full h-full absolute top-0 left-0'
              src={"https://www.youtube.com/embed/VJH5FJ5kaJA?enablejsapi=1&version=3&controls=0&rel=0&autoplay=1&loop=1&mute=1&playlist=VJH5FJ5kaJA&playsinline=1"}
              title="Hero Banner Video"
              width={1920}
              height={1080}
              allow="autoplay"
              allowFullScreen
          ></iframe>
          <div className='bg-[#12181f] absolute w-full h-full top-0 left-0 opacity-50'></div>
          <h1 className='text-white font-bold absolute leading-tight top-1/2 transform -translate-y-1/2 sm:text-2xl md:text-3xl lg:text-5xl sm:ml-5 md:ml-16 lg:ml-32 sm:max-w-[16rem] md:max-w-[20rem] lg:max-w-[37rem]'>3 countries. 20+ products. 1 leading on-demand platform.</h1>
      </div>
        <div className='bg-slate-50 relative text-center sm:p-16 lg:p-40'>
        <h1 className='text-[#12181f] font-bold sm:text-3xl lg:text-5xl'> We’re Gojek, the drivers of change</h1>
        <p className='sm:text-base lg:text-2xl sm:pt-5 lg:pt-8'> Gojek is a pioneering super-app in Southeast Asia, offering a comprehensive platform that seamlessly integrates essential services like transportation, payments, food delivery, and more. Founded with a vision to empower millions by providing accessible and innovative solutions, Gojek has transformed daily life across Indonesia and beyond. With a commitment to sustainability, inclusivity, and technological advancement, Gojek continues to redefine convenience and efficiency, enriching communities and driving positive change across the region.</p>
        <Button asChild variant='ghost' className='bg-[#4ca735] hover:bg-[#3d8a2d] text-white font-bold rounded-3xl p-5 mt-7'>
            <Link href="/about">More About Us</Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;