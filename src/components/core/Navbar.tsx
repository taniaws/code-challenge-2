"use client"
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <div className='p-7 bg-[#12181f] flex items-center justify-between' >
        <Link href={"/"}>
          <Image src={"/logo.png"} width={866} height={206} alt="navbar-logo" className='max-h-[8rem] max-w-[8rem]'/>
        </Link>
        <ul className='text-white flex gap-8 font-semibold text-xl'>
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/about"}>
              <li>About Us</li>
            </Link>
            <Link href={"/products"}>
              <li>Products</li>
            </Link>
            <Link href={"/teams"}>
              <li>Teams</li>
            </Link>
            <Link href={"/blog"}>
              <li>Blog</li>
            </Link>
        </ul>
    </div>
  );
};

export default Navbar;