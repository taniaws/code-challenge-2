"use client"
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

interface INavbarProps {
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const isSmallScreen = useMediaQuery({maxWidth: 768})
  const isLargeScreen = useMediaQuery({minWidth: 769})
  const [isOpen, setIsOpen] = React.useState<Boolean>(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const NavbarLarge = () => {
    return (
      <div className='p-7 bg-[#12181f] flex items-center justify-between' >
          <Link href={"/"}>
            <Image src={"/logo.png"} width={866} height={206} alt="navbar-logo" className='max-h-[8rem] max-w-[8rem]'/>
          </Link>
          <ul className='text-white flex gap-8 font-semibold text-xl'>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/teams">Teams</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          </ul>
      </div>
    );
  }

  const NavbarSmall = () => {
    return (
      <div className='p-7 bg-[#12181f] flex items-center justify-between' >
          <Link href={"/"}>
            <Image src={"/logo.png"} width={866} height={206} alt="navbar-logo" className='max-h-[6rem] max-w-[6rem]'/>
          </Link>
            <button onClick={toggleNavbar} className='text-white text-3xl'> ☰ </button>
      </div>
    )
  }

  const NavbarOpen = () => {
    return (
      <div className='bg-[#12181f] p-7 text-white fixed top-0 left-0 right-0 z-10 shadow-xl shadow-bg-slate-100'>
        <div className='flex items-center justify-between pb-6' >
            <Link href={"/"}>
              <Image src={"/logo.png"} width={866} height={206} alt="navbar-logo" className='sm:max-h-[6rem] md:max-h-[7rem] sm:max-w-[6rem] md:max-w-[7rem]'/>
            </Link>
              <button onClick={toggleNavbar} className='text-white text-3xl font-bold'> ✕ </button>
        </div>
        <hr className='border border-slate-800'/>
        <ul className="w-full space-y-4 font-semibold mt-4 sm:text-xl md:text-2xl">
          <li>
            <Link href="/" onClick={toggleNavbar}>Home</Link>
          </li>
          <li>
            <Link href="/about" onClick={toggleNavbar}>About Us</Link>
          </li>
          <li>
            <Link href="/products" onClick={toggleNavbar}>Products</Link>
          </li>
          <li>
            <Link href="/teams" onClick={toggleNavbar}>Teams</Link>
          </li>
          <li>
            <Link href="/blog" onClick={toggleNavbar}>Blog</Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <div>
      {isSmallScreen && !isOpen && <NavbarSmall />}
      {isSmallScreen && isOpen && (
        <div>
          <NavbarSmall />
          <NavbarOpen />
        </div>
      )}
      {isLargeScreen && <NavbarLarge />}
    </div>
  )



  
};

export default Navbar;