"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';

interface IDownloadProps {
}

const Download: React.FunctionComponent<IDownloadProps> = (props) => {
  return (
    <div className="bg-[#1e3145] relative">
        <Image src={"https://cdn-site.gojek.com/uploads/download_desktop_ccdc61425a.png"} alt="Background" height={588.8} width={1580}/>
        <h1 className="text-white absolute top-72 left-36 text-[3.4rem] font-bold max-w-[50rem]">Good to Go? Download the Gojek app today!</h1>
        <div className="absolute top-[30rem] left-[8.5rem]">
        <Button asChild variant='ghost' className='bg-white text-slate-900 rounded-3xl p-5 mx-3'>
            <Link href="https://apps.apple.com/id/app/gojek/id944875099" target="_blank">App Store</Link>
        </Button>
        <Button asChild variant='ghost' className='bg-white text-slate-900 rounded-3xl p-5 mx-3'>
            <Link href="https://play.google.com/store/apps/details?id=com.gojek.app&pli=1" target="_blank">Play Store</Link>
        </Button>
        </div>
    </div>
  );
};

export default Download;
