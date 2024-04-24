import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Hero() {
  return (
    <div className='mx-auto max-w-7xl px-6 lg:px-8 mt-24 sm:mt-32 md:mt-56'>
      <div className='mx-auto max-w-2xl lg:max-w-none'>
        <h1 className='font-display text-center text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl'>
          A world-class development agency based in Africa!
        </h1>
        <p className='mt-6 text-xl text-neutral-600 text-center'>
          Crafting outstanding software experiences that inspire confidence,
          growth & success.
        </p>
        <div className='flex justify-center'>
          <a className='flex mt-6 w-[150px] items-center p-4 bg-black text-white hover:bg-[#00df9a] m-2 cursor-pointer duration-300 hover:text-black'>
            <span className='mr-3'>Book a call</span>
            <AiOutlineArrowRight size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
