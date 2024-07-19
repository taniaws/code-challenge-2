"use client"

import * as React from 'react';
import Image from 'next/image';
import PrintProducts from '@/components/core/PrintProducts';
import PrintProductDetail from '@/components/core/PrintProductDetail';
import PrintTestimony from '@/components/core/PrintTestimony';

interface IProductsProps {
}

const Products: React.FunctionComponent<IProductsProps> = (props) => {
  return (
    <div className='overflow-hidden'>
      <div className='bg-[#12181f] relative overflow-hidden pt-[53.7%]'>
        <Image
          src={"/banner-products.png"}
          width={1999}
          height={1074}
          alt='company-banner'
          className='w-full h-full absolute top-0 left-0 opacity-90'
        />
        <h1 className='text-white font-bold absolute leading-[3.5rem] ml-32 top-1/2 transform -translate-y-1/2 sm:text-2xl md:text-4xl lg:text-5xl sm:leading-6 lg:leading-[3rem] sm:ml-10 lg:ml-32 md:max-w-[30rem] lg:max-w-[37rem]'>We build products that nations run on</h1>
      </div>
      <div>
        <div className='bg-[#12181f]'>
          <span> <PrintProducts /> </span>
          <span> <PrintProductDetail /> </span>
        </div>
        <div className='bg-slate-50 text-center pt-16'>
          <h1 className='text-5xl font-bold pb-5'>Hear our Partners’ story</h1>
          <p className="text-xl text-slate-600 font-semibold">Come, be a Gojek partner?</p>
          <span> <PrintTestimony /> </span>
        </div>
      </div>
    </div>
  );
};

export default Products;

//absolute top-0 right-0 h-full