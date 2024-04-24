import Image from "next/image";
import React from "react";

function ClientLogo() {
  return (
    <li>
      <div style={{ opacity: 1, transform: "none" }}>
        <Image
          alt='Phobia'
          loading='lazy'
          width='184'
          height='36'
          decoding='async'
          data-nimg='1'
          src='/hohm-energy-logo-monotone-white.png'
          style={{ color: "transparent" }}
        />
      </div>
    </li>
  );
}

export default function Clients() {
  return (
    <div className='mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='md:flex'>
          <div className='flex-1 p-3'>
            <h2 className='text-center font-display text-3xl font-medium text-white md:text-left'>
              We&apos;re proud to have worked with amazing people
            </h2>
          </div>
          <div className='flex-1 p-3'>
            <p className='flex-1 text-lg text-center text-white md:text-left'>
              Over the past 4 years Kosmic Software has been building the Kosmic
              Software Engineers Network (KSEN) which aims to provide the best
              African talent to European & African markets that have 6+ hours of
              overlapping work hours with Africa. The bonus, you get world-class
              talent at African rates.
            </p>
          </div>
        </div>
        <div>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'
          >
            <ClientLogo />
            <ClientLogo />
            <ClientLogo />
            <ClientLogo />
          </ul>
        </div>
      </div>
    </div>
  );
}
