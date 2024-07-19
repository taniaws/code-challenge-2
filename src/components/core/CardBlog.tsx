"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface ICardBlogProps {
    id: string;
    title: string;
    section: string;
    image: string;
}

const CardBlog: React.FunctionComponent<ICardBlogProps> = (
        { id, title, section, image}
    ) => {
  const router = useRouter();

  return (
    <div
        key={id}
        onClick={() => router.push(`/blog/${id}`)}
    >
        <div className='sm:w-[22rem] md:w-[22.5rem] lg:w-[23rem] sm:h-[12rem] md:h-[12.5rem] lg:h-[13rem] relative'>
            <Image
                src={`https:${image}`}
                alt="image"
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
            />
        </div>
        <div className='sm:py-3 lg:py-5 sm:max-w-[21rem] lg:max-w-[22rem]'>
            <h3 className='font-bold sm:text-xl lg:text-2xl'>{title}</h3>
            <p className='text-slate-600 font-semibold sm:text-lg lg:text-xl'>{section}</p>
        </div>
    </div>
  )
};

export default CardBlog;