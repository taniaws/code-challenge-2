"use client"

import Image from 'next/image';
import * as React from 'react';
import axios from '../helper/axiosInstance';
import { ImageProduct, type ProductDetail } from './Type';
import Slider from 'react-slick';

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
  
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4000,
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
  
  return(
    <div>
        {productDetail.map((product: ProductDetail, index: number)=> {
        return (
          <div key={product.id} className={`${product.bgcolor} rounded-t-[4rem] relative ${index !== 0 ? '-mt-[5rem]' : ''} sm:py-14 sm:px-8 lg:p-24`}>
            <div className='absolute top-0 right-0 h-full z-0'>
              <Image src={product.bgimage} width={product.width} height={product.height} alt='Background'/>
            </div>
            <div className='relative z-10'>
              <h1 className='text-[#12181f] font-bold sm:text-3xl md:text-4xl lg:text-5xl'>{product.title}</h1>
              <p className='sm: text-base md:text-lg lg:text-xl sm:pt-3 lg:pt-5'>{product.description}</p>
            </div>
            <div>
              <Slider {...settings}>
                {product.product.map((image: ImageProduct, index: number)=> {
                  return(
                    <div>
                      <div key={index} className='relative z-10 my-14 bg-white p-10 rounded-3xl w-[17rem] h-56 flex flex-col mx-auto'>
                        <Image src={image.url} width={image.width} height={image.height} alt={`Product - ${index}`} />
                        <p className='mt-3 text-xl'>{image.description}</p>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        );
        })}
    </div>
  )
};

export default ProductDetail;