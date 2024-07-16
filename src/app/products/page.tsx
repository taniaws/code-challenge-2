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
    <div>
      <div className='bg-[#12181f] relative overflow-hidden pt-[53.7%]'>
        <Image src={"/banner-products.png"} width={1999} height={1074} alt='company-banner' className='w-full h-full absolute top-0 left-0 opacity-90'/>
        <h1 className='text-white font-bold text-5xl absolute max-w-[37rem] leading-[3.5rem] ml-32 top-1/2 transform -translate-y-1/2'>We build products that nations run on</h1>
      </div>
      <div className='bg-[#12181f]'>
        <span> <PrintProducts /> </span>
        <span> <PrintProductDetail /> </span>
        <h1 className='bg-slate-50 text-5xl font-bold text-center pt-16 pb-5'>Hear our Partners’ story</h1>
        <p className="bg-slate-50 text-xl text-center text-slate-600 font-semibold">Come, be a Gojek partner?</p>
        <span> <PrintTestimony /> </span>

      </div>
    </div>
  );
};

export default Products;

//absolute top-0 right-0 h-full