"use client"

import Image from 'next/image';
import * as React from 'react';
import axios from '../helper/axiosInstance';
import { ImageProduct, Product } from './Type';
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';

interface IPrintProductsProps {
}

const PrintProducts: React.FunctionComponent<IPrintProductsProps> = (props) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const isSmallScreen = useMediaQuery({maxWidth: 1023})
  const isLargeScreen = useMediaQuery({minWidth: 1024})

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
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          dots: false,
          fade: false,
        }
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          fade: false,
        }
      }
    ]
  };

  const ProductsLarge = () => {
    return(
      <div className='flex justify-evenly gap-5 pb-60 p-20 text-white'>
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
              <div className={`absolute left-0 ${product.shadow} rounded-3xl h-[200px]`} style={{ top: 'calc(100% - 4rem)' }}>
                  <h1 className='text-[1.6rem] font-bold mt-20 text-center'>{product.title}</h1>
                  <p className='text-[0.9rem] max-w-[18rem] pb-12 px-5 text-center'>{product.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    )
  }

  const ProductsSmall = () => {
    return (
      <div className='py-16 text-white'>
      <Slider {...settings}>
        {products.map((product: Product) => (
          <div key={product.id}>
          <div className='relative h-[28rem] sm:p-4 md:mx-8'>
            <div className={`relative py-4 px-2 ${product.color} rounded-3xl w-72 h-[17rem] z-[1] flex flex-col mx-auto`}>
              {product.product.map((image: ImageProduct, index: number) => (
                <div key={index} className='p-2'>
                  <Image
                    src={image.url}
                    width={image.width}
                    height={image.height}
                    alt={`Product - ${index}`}
                  />
                </div>
              ))}
            </div>
            <div className={`absolute ${product.shadow} rounded-3xl pt-16 pb-8 w-72 bottom-[3rem] left-1/2 transform -translate-x-1/2`}>
              <h1 className='text-[1.2rem] font-bold text-center'>{product.title}</h1>
              <p className='text-[0.8rem] text-center px-4'>{product.description}</p>
            </div>
          </div>
          </div>
        ))}
      </Slider>
      </div>
    );
  }



  return(
    <div>
      {isSmallScreen &&  <ProductsSmall />}
      {isLargeScreen && <ProductsLarge />}      
    </div>
  )
};

export default PrintProducts;
