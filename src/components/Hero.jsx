import React from "react";

import { kitty } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex items-center w-full mb-10 pt-3'>
        <img src={kitty} alt='kitty' className='w-28 object-contain' />
  <h3 className="text-3xl font-extrabold tracking-wide ml-3">KittySumm</h3>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='text-pink-400'>Artificial Intelligence</span>
      </h1>
    </header>
  );
};

export default Hero;
