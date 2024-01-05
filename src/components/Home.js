/** @format */

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#B9464C] py-2'>Hi, my name is </p>
        <h1 className='text-3xl sm:text-5xl font-bold text-[#ccd6f6]'>
          Oleksandr Tolok
        </h1>
        <h2 className='text-3xl sm:text-5xl font-bold text-[#8892b0]'>
          I'm Junior Web developer
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          My focus: building up responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-2 flex items-center hover:bg-[#B9464C] duration-150 hover:border-[#B9464C]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
