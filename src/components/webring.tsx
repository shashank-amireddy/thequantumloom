// import React from "react";
import { Dices } from 'lucide-react';

export default () => {
  return (
    <div>
      <div className="hidden sm:flex w-full flex-row justify-between ">
        <a
          href="https://amrita.town/"
          className=" h-full self-center text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125 "
        >
          <p>Amrita.town</p>
        </a>


        <div className="flex h-4 items-center gap-4">
          <a
            href="https://amrita.town/prev"
            className="text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
          >
            <div className="h-4 w-4 fill-[#E9EAE2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left"><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>
            </div>
          </a>

          <a
            href="https://amrita.town/random"
            className="fill-[#E9EAE2] text-sm font-medium uppercase text-accent  text-primary-11 hover:brightness-125 dark:hover:brightness-125 "
          >
            <Dices />
          </a>

          <a
            href="https://amrita.town/next"
            className="text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
          >
            <div className="h-4 w-4 fill-[#E9EAE2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
            </div>
          </a>
        </div>


      </div>
      <div className="sm:hidden block flex w-full flex-row justify-center">
        <div className="flex items-center gap-4">
          {/* Left Arrow */}
          <a
            href="https://amrita.town/prev"
            className="flex items-center text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M6 8L2 12L6 16"/>
              <path d="M2 12H22"/>
            </svg>
          </a>

          {/* Amrita.town */}
          <a
            href="https://amrita.town/random"
            className="flex items-center text-sm font-medium  text-primary-11 uppercase text-accent hover:brightness-125 dark:hover:brightness-125"
          >
            <p className="leading-none">Amrita.town</p>
          </a>

          {/* Right Arrow */}
          <a
            href="https://amrita.town/next"
            className="flex items-center text-sm font-medium uppercase text-primary hover:brightness-125 dark:hover:brightness-125"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <path d="M18 8L22 12L18 16"/>
              <path d="M2 12H22"/>
            </svg>
          </a>
        </div>
      </div>

    </div>


  );
};

// export default webRing;
