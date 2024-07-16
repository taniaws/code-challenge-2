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
        <div className='w-[23rem] h-[13rem] relative'>
            <Image
                src={`https:${image}`}
                alt="image"
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'
            />
        </div>
        <div className='py-5 max-w-[23rem]'>
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='text-xl text-slate-600 font-semibold'>{section}</p>
        </div>
    </div>
  )
};

export default CardBlog;