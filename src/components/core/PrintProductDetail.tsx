"use client"

import Image from 'next/image';
import * as React from 'react';
import axios from '../helper/axiosInstance';
import { ImageProduct, type ProductDetail } from './Type';

interface IProductDetailProps {
}

const ProductDetail: React.FunctionComponent<IProductDetailProps> = (props) => {
  const [productDetail, setProductDetail] = React.useState<ProductDetail[]>([]);

  const fetchProductDetail = async () => {
    try{
      const {data} = await axios.get("/productDetail");
      setProductDetail(data);
    } catch(error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    fetchProductDetail();
  },[])
  
  return(
    <div>
        {productDetail.map((product: ProductDetail, index: number)=> {
        return (
          <div key={product.id} className={`${product.bgcolor} rounded-t-[4rem] p-24 relative top-[${-5 * index}rem]`}>
            <div className='absolute top-0 right-0 h-full z-0'>
              <Image src={product.bgimage} width={product.width} height={product.height} alt='Background'/>
            </div>
            <div className='relative z-10'>
              <h1 className='text-5xl text-[#12181f] font-bold'>{product.title}</h1>
              <p className='text-xl pt-5'>{product.description}</p>
            </div>
            <div className='grid grid-cols-4 place-items-center'>
              {product.product.map((image: ImageProduct, index: number)=> {
                return(
                  <div key={index} className='relative z-10 my-14 bg-white p-10 rounded-3xl w-[17rem] h-56'>
                    <Image src={image.url} width={image.width} height={image.height} alt={`Product - ${index}`} />
                    <p className='mt-3 text-xl'>{image.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        );
        })}
    </div>
  )
};

export default ProductDetail;