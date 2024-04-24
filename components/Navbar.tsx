"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineArrowRight,
} from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Our Work" },
    { id: 2, text: "About Us" },
    { id: 3, text: "Our Process" },
    { id: 4, text: "Blog" },
  ];

  return (
    <header className='h-24 max-w-[1240px] w-[100%] mx-auto'>
      <nav className='flex justify-between items-center mx-auto px-4 text-black'>
        {/* Logo */}
        <Link href=''>
          <Image
            height={90}
            width={180}
            alt='Kosmic Software logo'
            src='/kosmic-logo-black.svg'
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex'>
          {navItems.map((item) => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#00df9a] m-2 cursor-pointer duration-300 hover:text-black'
            >
              {item.text}
            </li>
          ))}
          <li
            key='contact-us'
            className='flex items-center p-4 bg-black text-white hover:bg-[#00df9a] m-2 cursor-pointer duration-300 hover:text-black'
          >
            <span className='mr-3'>Book a call</span>
            <AiOutlineArrowRight size={20} />
          </li>
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? "fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 text-white p-4"
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile Logo */}
          <Image
            src='/kosmic-logo-white.svg'
            height={90}
            width={180}
            className='mb-4'
            alt='Kosmic Software logo'
          />

          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <li
              key={item.id}
              className='p-4 border-b hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
            >
              {item.text}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
