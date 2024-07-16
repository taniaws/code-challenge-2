"use client"

import Image from 'next/image';
import * as React from 'react';
import axios from '../helper/axiosInstance';
import { ImageProduct, Product } from './Type';

interface IPrintProductsProps {
}

const PrintProducts: React.FunctionComponent<IPrintProductsProps> = (props) => {
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchProducts = async () => {
    try{
      const {data} = await axios.get("/products");
      setProducts(data);
    } catch(error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchProducts();
  },[])

  return(
    <div className='flex justify-evenly gap-5 pb-80 p-20 text-white'>
      {products.map((product: Product)=> {
        return (
          <div key={product.id} className='relative'>
            <div className={`relative py-8 px-5 ${product.color} rounded-3xl w-72 h-[19rem] z-[1]`}>
                {product.product.map((image: ImageProduct, index: number)=> {
                return(
                    <div key={index} className='p-2'>
                    <Image src={image.url} width={image.width} height={image.height} alt={`Product - ${index}`}/>
                    </div>
                )
                })}
            </div>
            <div className={` absolute left-0 ${product.shadow} rounded-3xl h-[200px]`} style={{ top: 'calc(100% - 4rem)' }}>
                <h1 className='text-[1.6rem] font-bold mt-20 text-center'>{product.title}</h1>
                <p className='text-[0.9rem] max-w-[18rem] pb-12 px-5 text-center'>{product.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
};

export default PrintProducts;
