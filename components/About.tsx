import Image from "next/image";
import React from "react";

function ClientLogo({
  alt,
  src,
  width = 184,
}: {
  src: string;
  alt: string;
  width?: number;
}) {
  return (
    <li>
      <div style={{ height: 50, width, position: "relative" }}>
        <Image
          fill
          alt={alt}
          loading='lazy'
          decoding='async'
          data-nimg='1'
          src={src}
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
              talent at African rates. For 4 years, Kosmic Software has
              cultivated the Kosmic Software Engineers Network (KSEN), dedicated
              to connecting top-tier African talent with European and African
              markets boasting over 6 hours of overlapping work hours with
              Africa. Benefit from accessing unparalleled talent at competitive
              African rates.
            </p>
          </div>
        </div>
        <div>
          <ul
            role='list'
            className='mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4'
          >
            <ClientLogo
              src='/hohm-energy-logo-white.png'
              alt='Hohm Energy Logo'
            />
            <ClientLogo
              src='/john-lewis-logo-white.png'
              alt='John Lewis Logo'
            />
            <ClientLogo
              src='/yoma-logo-light.webp'
              width={120}
              alt='Yoma Logo'
            />
            <ClientLogo
              src='/brownie-points-logo.svg'
              width={138}
              alt='Yoma Logo'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
