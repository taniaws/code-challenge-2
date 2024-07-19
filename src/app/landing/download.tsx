"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IDownloadProps {
}

const Download: React.FunctionComponent<IDownloadProps> = (props) => {
  return (
    <div className="bg-[#1e3145] relative overflow-hidden sm:h-96 lg:h-full">
        <Image
          src={"https://cdn-site.gojek.com/uploads/download_desktop_ccdc61425a.png"}
          alt="Background"
          height={588.8}
          width={1580}
          className=' sm:h-full sm:object-cover'
        />
        <h1 className="text-white absolute font-bold sm:text-2xl md:text-3xl lg:text-[3.4rem] sm:bottom-44 lg:bottom-[25rem] sm:left-12 lg:left-36 sm:max-w-[16rem] lg:max-w-[50rem] sm:leading-tight lg:leading-snug">Good to Go? Download the Gojek app today!</h1>
        <div className="absolute flex gap-4 sm:bottom-12 lg:bottom-[20rem] sm:left-10 lg:left-36 sm:flex-col lg:flex-row">
          <Button asChild variant='ghost' className='bg-white text-slate-900 rounded-3xl p-5 mx-3 shadow-xl'>
              <Link href="https://apps.apple.com/id/app/gojek/id944875099" target="_blank">App Store</Link>
          </Button>
          <Button asChild variant='ghost' className='bg-white text-slate-900 rounded-3xl p-5 mx-3 shadow-xl'>
              <Link href="https://play.google.com/store/apps/details?id=com.gojek.app&pli=1" target="_blank">Play Store</Link>
          </Button>
        </div>
    </div>
  );
};

export default Download;
